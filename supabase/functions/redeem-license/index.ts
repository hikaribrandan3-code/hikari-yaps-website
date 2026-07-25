import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

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
    const { code } = await req.json()

    if (!code || typeof code !== "string") {
      return new Response(
        JSON.stringify({ error: "Missing code" }),
        { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
      )
    }

    const normalizedCode = code.trim().toUpperCase()
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") || "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || ""
    )

    const { data: existing, error: lookupError } = await supabase
      .from("activation_codes")
      .select()
      .eq("code", normalizedCode)
      .eq("used", false)
      .maybeSingle()

    if (lookupError) {
      console.error("Supabase error:", lookupError)
      return new Response(
        JSON.stringify({ error: "Server error" }),
        { status: 500, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
      )
    }

    if (!existing) {
      return new Response(
        JSON.stringify({ error: "Invalid or already used code" }),
        { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
      )
    }

    const { data, error } = await supabase
      .from("activation_codes")
      .update({ used: true })
      .eq("code", normalizedCode)
      .eq("used", false)
      .select()
      .maybeSingle()

    if (error) {
      console.error("Supabase error:", error)
      return new Response(
        JSON.stringify({ error: "Server error" }),
        { status: 500, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
      )
    }

    if (!data) {
      return new Response(
        JSON.stringify({ error: "Invalid or already used code" }),
        { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
      )
    }

    return new Response(
      JSON.stringify({ success: true, email: data.email, product: data.product }),
      { status: 200, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
    )
  } catch (error) {
    console.error("Error:", error)
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
    )
  }
})
