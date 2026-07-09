import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const PAYPAL_CLIENT_ID = "AUQnpwD7KquTmCrB4eopOKPb-qd5m_pwi8ToTts3hyllL-C4UTl1WbfYBHY_vsK5FOY-jLH6EaMA6apu"
const PAYPAL_SECRET = "ENGN4D6wJVYIhihcrUJbxRwfVXXzpFLsZ3On_EM0_9T4n1YZ8dBqH1p-zf_rN18RjtNNLj-U3Cg_RD38"
const PAYPAL_API = "https://api.paypal.com"

function generateActivationCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let code = ""
  for (let i = 0; i < 7; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

async function getPayPalAccessToken(): Promise<string> {
  const auth = btoa(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`)

  const response = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      "Authorization": `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  })

  const data = await response.json()
  return data.access_token
}

async function capturePayPalOrder(orderId: string, accessToken: string): Promise<any> {
  const response = await fetch(`${PAYPAL_API}/v2/checkout/orders/${orderId}/capture`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    }
  })

  return await response.json()
}

serve(async (req) => {
  // Handle CORS
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
    const { orderId, email } = await req.json()

    if (!orderId || !email) {
      return new Response(
        JSON.stringify({ error: "Missing orderId or email" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      )
    }

    // Get PayPal access token
    const accessToken = await getPayPalAccessToken()

    // Capture the PayPal order
    const captureResult = await capturePayPalOrder(orderId, accessToken)

    if (captureResult.status !== "COMPLETED") {
      return new Response(
        JSON.stringify({ error: "Payment capture failed", details: captureResult }),
        { status: 400, headers: { "Content-Type": "application/json" } }
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
        paypal_order_id: orderId,
        used: false,
        created_at: new Date().toISOString()
      })

    if (error) {
      console.error("Supabase error:", error)
      return new Response(
        JSON.stringify({ error: "Failed to save activation code", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      )
    }

    // Return success with code
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
