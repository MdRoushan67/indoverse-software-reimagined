import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent! 🚀",
      description: "We'll get back to you within 24 hours. Promise.",
    });

    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@indoverselabs.in',
      href: 'mailto:contact@indoverselabs.in',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: null,
    },
  ];

  const faqs = [
    {
      q: 'How fast can you build my project?',
      a: "Depends on scope, but most MVPs ship in 2-4 weeks. Full products in 6-12 weeks. We're not exaggerating—we're just that good.",
    },
    {
      q: 'What does it cost?',
      a: "Custom quotes for every project. No hidden fees, no surprise charges. We'll give you a fixed price before we start.",
    },
    {
      q: 'Do you work with startups?',
      a: 'Absolutely. From solo founders with an idea to funded startups scaling fast—we love working with people who dream big.',
    },
    {
      q: 'What about ongoing support?',
      a: 'All our projects include post-launch support. We also offer maintenance packages for long-term partnerships.',
    },
  ];

  return (
    <div className="relative min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Got an idea? A problem? A wild dream that needs engineering? We're all ears. 
              No sales pitch, just a real conversation about what you're building.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <GlassCard glow="primary">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="bg-secondary/50 border-border/50 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className="bg-secondary/50 border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company / Project
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company or project name"
                        className="bg-secondary/50 border-border/50 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project, idea, or problem..."
                        rows={5}
                        className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-6 text-lg font-semibold btn-glow"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </GlassCard>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <GlassCard>
                <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-lg font-bold mb-4">Response Time</h3>
                <p className="text-muted-foreground text-sm">
                  We typically respond within <span className="text-primary font-semibold">24 hours</span>. 
                  For urgent inquiries, email us directly and mention it's urgent.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <GlassCard key={faq.q} delay={index * 0.1}>
                <h3 className="font-bold mb-3">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder / Final CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <GlassCard className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Based in India 🇮🇳</h2>
            <p className="text-muted-foreground mb-4">
              Building for the world, from the heart of India. We work with clients globally 
              and are available across all time zones.
            </p>
            <p className="text-sm text-primary">
              Fun fact: Our team works when you sleep, so your project never stops moving.
            </p>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Contact;
