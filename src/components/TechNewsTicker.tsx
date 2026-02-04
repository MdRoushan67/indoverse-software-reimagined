import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, ExternalLink, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TigerMascot from './TigerMascot';
import GlassCard from './GlassCard';
import { supabase } from '@/integrations/supabase/client';

interface NewsItem {
  id?: string;
  title: string;
  source: string;
  url: string;
  summary: string;
}

const TechNewsTicker = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchNews = async (refresh = false) => {
    if (refresh) setIsRefreshing(true);
    else setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('fetch-tech-news', {
        body: { refresh },
      });

      if (error) throw error;
      if (data?.data && data.data.length > 0) {
        setNews(data.data);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      // Fallback news
      setNews([
        { title: "AI Transforms Software Development", source: "Tech News", url: "#", summary: "Revolutionary changes in how we build software" },
        { title: "Startups Ship Faster with AI Tools", source: "Startup Weekly", url: "#", summary: "New development paradigms emerge" },
        { title: "The Future of No-Code Development", source: "Dev Insights", url: "#", summary: "Making software accessible to everyone" },
      ]);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Auto-scroll every 10 seconds
  useEffect(() => {
    if (news.length === 0) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 10000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [news.length]);

  const handleRefresh = () => {
    fetchNews(true);
  };

  const currentNews = news[currentIndex];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-6">
            <Newspaper size={16} />
            Live Tech Updates
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
            Tech <span className="gradient-text">News</span> Feed
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Stay updated with the latest in AI and technology
          </p>
        </motion.div>

        <GlassCard className="max-w-4xl mx-auto overflow-hidden" glow="accent">
          <div className="flex flex-col md:flex-row items-center gap-6 p-6">
            {/* Tiger Mascot */}
            <div className="w-32 h-40 flex-shrink-0">
              <TigerMascot isReading={!isLoading} />
            </div>

            {/* News Content */}
            <div className="flex-1 min-w-0">
              {isLoading ? (
                <div className="space-y-3">
                  <div className="h-6 bg-secondary/50 rounded animate-pulse w-3/4" />
                  <div className="h-4 bg-secondary/50 rounded animate-pulse w-1/2" />
                  <div className="h-4 bg-secondary/50 rounded animate-pulse w-full" />
                </div>
              ) : currentNews ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Speech bubble */}
                    <div className="relative bg-secondary/30 rounded-2xl p-4 mb-4">
                      <div className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 w-4 h-4 bg-secondary/30 rotate-45 hidden md:block" />
                      <p className="text-sm text-accent font-medium mb-1">{currentNews.source}</p>
                      <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-2 line-clamp-2">
                        {currentNews.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {currentNews.summary}
                      </p>
                    </div>

                    {currentNews.url && currentNews.url !== '#' && (
                      <a
                        href={currentNews.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                      >
                        Read Full Article <ExternalLink size={14} />
                      </a>
                    )}
                  </motion.div>
                </AnimatePresence>
              ) : (
                <p className="text-muted-foreground">No news available</p>
              )}

              {/* Dots indicator */}
              {news.length > 1 && (
                <div className="flex items-center gap-2 mt-4">
                  {news.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === currentIndex 
                          ? 'bg-primary w-6' 
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Refresh Button */}
            <div className="flex-shrink-0">
              <Button
                variant="outline"
                size="icon"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="rounded-full"
              >
                <RefreshCw 
                  size={18} 
                  className={isRefreshing ? 'animate-spin' : ''} 
                />
              </Button>
            </div>
          </div>

          {/* Scrolling ticker bar */}
          <div className="bg-secondary/30 border-t border-border/30 py-3 overflow-hidden">
            <motion.div
              className="flex gap-12 whitespace-nowrap"
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: 'linear',
              }}
            >
              {[...news, ...news].map((item, i) => (
                <span key={i} className="text-sm text-muted-foreground flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-foreground font-medium">{item.title}</span>
                  <span className="text-accent">— {item.source}</span>
                </span>
              ))}
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default TechNewsTicker;
