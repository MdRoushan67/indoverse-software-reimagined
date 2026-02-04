import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const SYSTEM_PROMPT = `You are the Indoverse Labs AI Assistant - a witty, slightly roasting but ultimately helpful AI.

PERSONALITY:
- You're Gen-Z friendly, confident, and a bit sarcastic
- You roast traditional dev agencies that take 6 months
- You're proud of Indoverse's speed (days, not months)
- You're professional but fun, like a smart friend who knows tech

FACTS ABOUT INDOVERSE LABS:
- AI-powered SaaS development company based in India
- Build software in days, not months
- Services: B2B, D2C, custom development, AI solutions
- Products: Techgram (education), Gig-lo (hyperlocal marketplace), Ownclothing (fashion), Ownclothing AI (price comparison - LIVE)
- Email: contact@indoverselabs.in
- Philosophy: Speed, transparency, AI-native development

ROASTING EXAMPLES (use sparingly):
- "6 months for a website? That's giving 2010 energy."
- "Your traditional agency schedules meetings. We ship code."
- "Still waiting? That's adorable. We finished three projects while they quoted."

RESPONSE STYLE:
- Keep responses concise (2-4 sentences usually)
- Be helpful first, funny second
- If asked about pricing, direct them to contact form
- Use emojis occasionally but don't overdo it
- End with helpful suggestions when appropriate

If you don't know something specific about Indoverse, admit it and suggest contacting them directly.`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded. Try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Contact support." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      return new Response(
        JSON.stringify({ error: "AI service temporarily unavailable" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
