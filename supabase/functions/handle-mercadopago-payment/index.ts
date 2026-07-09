import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const MP_ACCESS_TOKEN = "APP_USR-2339974286884334-070902-608a70d4e9efadb7719b18b396419ee9-1911962862"
const MP_API = "https://api.mercadopago.com"

function generateActivationCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let code = ""
  for (let i = 0; i < 7; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

async function createMercadoPagoPreference(email: string): Promise<any> {
  const response = await fetch(`${MP_API}/checkout/preferences`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${MP_ACCESS_TOKEN}`
    },
    body: JSON.stringify({
      items: [
        {
          title: "iVoz Pro - Licencia de por vida",
          quantity: 1,
          unit_price: 14.99,
          currency_id: "USD"
        }
      ],
      payer: {
        email: email
      },
      back_urls: {
        success: `https://ivoz.vercel.app/?payment=success&email=${encodeURIComponent(email)}`,
        failure: "https://ivoz.vercel.app/?payment=failure",
        pending: "https://ivoz.vercel.app/?payment=pending"
      },
      auto_return: "approved"
    })
  })

  return await response.json()
}

async function getMercadoPagoPayment(paymentId: string): Promise<any> {
  const response = await fetch(`${MP_API}/v1/payments/${paymentId}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${MP_ACCESS_TOKEN}`
    }
  })

  return await response.json()
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    })
  }

  try {
    const { action, email, paymentId } = await req.json()

    // CREATE preference
    if (action === "create") {
      if (!email) {
        return new Response(
          JSON.stringify({ error: "Missing email" }),
          { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
        )
      }

      const preference = await createMercadoPagoPreference(email)

      if (!preference.id || !preference.init_point) {
        return new Response(
          JSON.stringify({ error: "Failed to create preference", details: preference }),
          { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
        )
      }

      return new Response(
        JSON.stringify({
          success: true,
          preferenceId: preference.id,
          initPoint: preference.init_point
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
    }

    // VERIFY payment (using the payment_id MP appends to the return URL) and generate code
    if (action === "verify") {
      if (!paymentId || !email) {
        return new Response(
          JSON.stringify({ error: "Missing paymentId or email" }),
          { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
        )
      }

      const payment = await getMercadoPagoPayment(paymentId)

      if (!payment || !payment.status) {
        return new Response(
          JSON.stringify({ error: "Payment not found", details: payment }),
          { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
        )
      }

      if (payment.status !== "approved") {
        return new Response(
          JSON.stringify({ error: `Payment status: ${payment.status}` }),
          { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
        )
      }

      // Generate activation code
      const code = generateActivationCode()

      // Save to Supabase
      const supabase = createClient(
        Deno.env.get("SUPABASE_URL") || "",
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || ""
      )

      const { error } = await supabase
        .from("activation_codes")
        .insert({
          code: code,
          email: email,
          paypal_order_id: `mp_${payment.id}`,
          used: false,
          created_at: new Date().toISOString()
        })

      if (error) {
        console.error("Supabase error:", error)
        return new Response(
          JSON.stringify({ error: "Failed to save activation code", details: error }),
          { status: 500, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
        )
      }

      return new Response(
        JSON.stringify({
          success: true,
          code: code,
          email: email,
          message: "Payment verified and code generated"
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
    }

    return new Response(
      JSON.stringify({ error: "Invalid action" }),
      { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
    )
  } catch (error) {
    console.error("Error:", error)
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
  }
})
