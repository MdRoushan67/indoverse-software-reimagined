import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

// Curated tech news sources
const NEWS_SOURCES = [
  'https://techcrunch.com/tag/artificial-intelligence/',
  'https://www.theverge.com/ai-artificial-intelligence',
];

// Fallback news for when scraping fails or Firecrawl isn't connected
const FALLBACK_NEWS = [
  { title: "AI Transforms Software Development Industry", source: "Tech Industry", summary: "Artificial intelligence is revolutionizing how software is built, with new tools enabling developers to ship code faster than ever.", url: "#" },
  { title: "India's Tech Startups See Record Growth in 2024", source: "Startup News", summary: "Indian technology startups are experiencing unprecedented growth, with AI-focused companies leading the charge.", url: "#" },
  { title: "The Future of No-Code and AI-Assisted Development", source: "Dev Weekly", summary: "Low-code and AI-powered development tools are democratizing software creation, making it accessible to non-technical founders.", url: "#" },
  { title: "Cloud Computing Trends for 2025", source: "Cloud Tech", summary: "Edge computing, serverless architecture, and AI integration are shaping the next generation of cloud services.", url: "#" },
  { title: "How AI is Changing Customer Experience", source: "CX Insights", summary: "From chatbots to personalized recommendations, AI is transforming how businesses interact with customers.", url: "#" },
];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);
    const FIRECRAWL_API_KEY = Deno.env.get("FIRECRAWL_API_KEY");

    // Check for cached news first (less than 24 hours old)
    const { data: cachedNews, error: cacheError } = await supabase
      .from('tech_news')
      .select('*')
      .gte('fetched_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
      .order('fetched_at', { ascending: false })
      .limit(10);

    const { refresh } = await req.json().catch(() => ({ refresh: false }));

    // Return cached news if available and not forcing refresh
    if (!refresh && cachedNews && cachedNews.length > 0 && !cacheError) {
      console.log("Returning cached news");
      return new Response(
        JSON.stringify({ success: true, data: cachedNews, cached: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // If no Firecrawl key, use fallback news
    if (!FIRECRAWL_API_KEY) {
      console.log("No Firecrawl API key, using fallback news");
      
      // Clear old news and insert fallback
      await supabase.from('tech_news').delete().lt('fetched_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());
      
      const newsToInsert = FALLBACK_NEWS.map(news => ({
        title: news.title,
        source: news.source,
        url: news.url,
        summary: news.summary,
        fetched_at: new Date().toISOString(),
      }));

      const { error: insertError } = await supabase
        .from('tech_news')
        .upsert(newsToInsert, { onConflict: 'title' });

      if (insertError) {
        console.error("Error inserting fallback news:", insertError);
      }

      return new Response(
        JSON.stringify({ success: true, data: newsToInsert, fallback: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Fetch fresh news using Firecrawl
    console.log("Fetching fresh news with Firecrawl");
    
    try {
      const firecrawlResponse = await fetch('https://api.firecrawl.dev/v1/search', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${FIRECRAWL_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: 'AI technology news startups 2024 2025',
          limit: 10,
          scrapeOptions: {
            formats: ['markdown'],
          },
        }),
      });

      if (!firecrawlResponse.ok) {
        throw new Error(`Firecrawl error: ${firecrawlResponse.status}`);
      }

      const firecrawlData = await firecrawlResponse.json();
      
      if (firecrawlData.success && firecrawlData.data && firecrawlData.data.length > 0) {
        // Use AI to summarize the news
        const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
        
        const newsItems = firecrawlData.data.slice(0, 5).map((item: any) => ({
          title: item.title || "Tech News Update",
          source: new URL(item.url || "https://example.com").hostname.replace('www.', ''),
          url: item.url || "#",
          summary: item.description || item.markdown?.slice(0, 200) || "Latest updates from the tech industry.",
          fetched_at: new Date().toISOString(),
        }));

        // Clear old news
        await supabase.from('tech_news').delete().lt('fetched_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());
        
        // Insert new news
        const { error: insertError } = await supabase
          .from('tech_news')
          .upsert(newsItems, { onConflict: 'title' });

        if (insertError) {
          console.error("Error inserting news:", insertError);
        }

        return new Response(
          JSON.stringify({ success: true, data: newsItems, fresh: true }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    } catch (firecrawlError) {
      console.error("Firecrawl error:", firecrawlError);
    }

    // Fallback if Firecrawl fails
    return new Response(
      JSON.stringify({ success: true, data: FALLBACK_NEWS, fallback: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (e) {
    console.error("Fetch news error:", e);
    return new Response(
      JSON.stringify({ success: false, error: e instanceof Error ? e.message : "Unknown error", data: FALLBACK_NEWS }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
