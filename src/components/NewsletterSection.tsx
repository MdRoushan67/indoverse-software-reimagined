import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Loader2, CheckCircle, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import GlassCard from './GlassCard';

const NewsletterSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email });

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already subscribed!",
            description: "You're already on our list. Stay tuned! 🚀",
          });
        } else {
          throw error;
        }
      } else {
        setIsSubscribed(true);
        toast({
          title: "Subscribed! 🎉",
          description: "You're now part of the Indoverse community.",
        });
      }
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Something went wrong. Try again?",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <GlassCard className="max-w-3xl mx-auto text-center py-12" glow="primary">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
              <Mail size={32} />
            </div>

            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-foreground">
              Stay Ahead of the Curve
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Get exclusive AI insights, product launches, and behind-the-scenes from Indoverse Labs.
            </p>

            <AnimatePresence mode="wait">
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500" />
                  </motion.div>
                  <p className="text-lg font-medium text-foreground">You're in! 🚀</p>
                  <p className="text-muted-foreground text-sm">Check your inbox for a welcome surprise.</p>
                  
                  {/* Confetti-like sparkles */}
                  <div className="flex gap-2 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          y: [-20, -40],
                          x: (i - 2) * 20,
                        }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      >
                        <Sparkles className="w-4 h-4 text-primary" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                >
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 bg-secondary/50 border-border/50 focus:border-primary h-12 text-foreground placeholder:text-muted-foreground input-glow"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 px-8 font-semibold btn-glow"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      'Subscribe'
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>

            <p className="text-xs text-muted-foreground mt-6">
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </motion.div>
        </GlassCard>
      </div>
    </section>
  );
};

export default NewsletterSection;
