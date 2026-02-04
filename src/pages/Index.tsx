import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Zap, Code2, Rocket, Globe, Users, Building2, ChevronRight, ExternalLink,
  Target, Eye, Sparkles, Mail, MapPin, Send, Loader2, CheckCircle,
  Cpu, Database, Cloud, Smartphone, Shield, GraduationCap, Briefcase, ShoppingBag, Bot
} from 'lucide-react';
import GlitchText from '@/components/GlitchText';
import GlassCard from '@/components/GlassCard';
import AnimatedCounter from '@/components/AnimatedCounter';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent! 🚀",
      description: "We'll get back to you within 24 hours.",
    });
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const services = [
    {
      icon: Building2,
      title: 'B2B Solutions',
      description: 'Enterprise-grade software that scales. CRMs, ERPs, and custom platforms that actually work.',
    },
    {
      icon: Users,
      title: 'D2C Products',
      description: 'Consumer apps that users love. From marketplaces to AI companions, we build what sells.',
    },
    {
      icon: Code2,
      title: 'Custom Development',
      description: 'Got a wild idea? We turn napkin sketches into production-ready platforms. No judgment.',
    },
  ];

  const stats = [
    { value: 4, suffix: '+', label: 'Products Launched' },
    { value: 10, suffix: '+', label: 'Industries Disrupted' },
    { value: 90, suffix: '%', label: 'Faster Than Traditional' },
    { value: 2, suffix: 'B+', label: 'Users Targeted' },
  ];

  const portfolio = [
    {
      name: 'Techgram',
      tagline: 'The Metaverse of Education',
      description: 'AI-powered learning platform revolutionizing Indian education. Personalized AI super-teachers for 2B+ underserved learners globally.',
      status: 'Building',
      link: 'https://techgramedu.in',
      icon: GraduationCap,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Gig-lo',
      tagline: 'People for People',
      description: "Community-powered hyperlocal marketplace empowering India's 450M+ informal workers with instant gig matching.",
      status: 'Building',
      link: 'https://giglo.in',
      icon: Briefcase,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Ownclothing',
      tagline: 'Fashion, Hyperlocal',
      description: 'Hyperlocal fashion marketplace with 100+ D2C brands, AI fit recommendations, and 60-minute Delhi delivery.',
      status: 'Building',
      link: 'https://ownclothing.in',
      icon: ShoppingBag,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Ownclothing AI',
      tagline: 'Price Comparison on Steroids',
      description: 'Clothing price comparison AI that scans all platforms to find you the best deals. Live now!',
      status: 'Live',
      link: 'https://ownclothing.in/ownclothingai',
      icon: Bot,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const values = [
    { icon: Rocket, title: 'Speed is Everything', description: 'We ship in days, not months.' },
    { icon: Target, title: 'User-Obsessed', description: 'Every line serves the end user.' },
    { icon: Sparkles, title: 'AI-Native', description: 'AI is how we think and build.' },
    { icon: Eye, title: 'Transparent Always', description: 'No hidden costs. Ever.' },
  ];

  const techStack = [
    { icon: Cpu, name: 'AI/ML' },
    { icon: Globe, name: 'Web' },
    { icon: Smartphone, name: 'Mobile' },
    { icon: Database, name: 'Backend' },
    { icon: Cloud, name: 'Cloud' },
    { icon: Shield, name: 'Security' },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-8"
            >
              <Zap size={16} className="animate-pulse" />
              AI-Powered Development
              <ChevronRight size={16} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Still waiting{' '}
              <span className="text-muted-foreground">6 months</span>{' '}
              for your software?
              <br />
              <GlitchText 
                text="That's adorable." 
                className="gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
            >
              We build what others quote months for—in <span className="text-primary font-semibold">days</span>. 
              AI-powered SaaS development for B2B, D2C, and anyone crazy enough to dream big.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg btn-glow hover:gap-4 transition-all"
              >
                Let's Build Something Insane
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary/50 text-foreground rounded-full font-semibold text-lg hover:bg-secondary transition-all"
              >
                See Our Work
                <Rocket size={20} />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ height: ['20%', '80%', '20%'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 bg-primary rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <GlassCard className="relative overflow-hidden" delay={0.1}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/20 rounded-full blur-3xl" />
              <h3 className="text-sm font-semibold text-destructive uppercase tracking-wider mb-4">
                The Old Way 💀
              </h3>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Traditional Dev Agencies Be Like...
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  6-12 months development cycles (in 2024, seriously?)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  Budget that grows faster than your feature list
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  "We'll get back to you" (they never do)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✗</span>
                  Tech debt that haunts you for years
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="relative overflow-hidden" glow="primary" delay={0.3}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                The Indoverse Way 🚀
              </h3>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                We Actually Deliver
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  Days to weeks, not months. We're built different.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  Transparent pricing that doesn't need a therapist
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  AI-powered development = faster + smarter
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  Clean, scalable code (we sleep at night)
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Who <span className="gradient-text">We Are</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're not just building software—we're engineering the future. Based in India, 
              building for the world. Founded by Ariba Irfan with one mission: make great software accessible to everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <GlassCard glow="primary" delay={0.1}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To democratize software development. Everyone deserves access to world-class technology. 
                We're making "I can't afford custom software" a thing of the past.
              </p>
            </GlassCard>

            <GlassCard glow="accent" delay={0.2}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground">
                To be the #1 AI-powered SaaS company in the world. Not the biggest—the best. 
                Every sector. Every industry. Every dream turned digital.
              </p>
            </GlassCard>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <GlassCard key={value.title} delay={index * 0.1} className="text-center">
                <value.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-1 text-sm">{value.title}</h4>
                <p className="text-xs text-muted-foreground">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What We <span className="gradient-text">Build</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From solo founders with a dream to enterprises with complex needs—we've got the tech to make it happen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <GlassCard 
                key={service.title} 
                glow="primary"
                delay={index * 0.1}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <GlassCard key={tech.name} delay={index * 0.05} className="text-center py-6">
                <tech.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-xs font-medium">{tech.name}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    duration={2.5}
                  />
                </div>
                <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What We're <span className="gradient-text">Cooking</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Products that are changing the game. Built by Indoverse, for the future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <GlassCard 
                key={project.name} 
                delay={index * 0.15}
                className="group relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20`}>
                      <project.icon size={24} className="text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{project.name}</h3>
                      <p className="text-sm text-primary">{project.tagline}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-primary/20 text-primary'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Visit Project
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Got an idea? A problem? A wild dream that needs engineering? We're all ears.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <GlassCard glow="primary">
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
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a
                        href="mailto:contact@indoverselabs.in"
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        contact@indoverselabs.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-medium">India 🇮🇳</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-lg font-bold mb-4">Response Time</h3>
                <p className="text-muted-foreground text-sm">
                  We typically respond within <span className="text-primary font-semibold">24 hours</span>. 
                  For urgent inquiries, email us directly.
                </p>
              </GlassCard>

              <GlassCard>
                <h3 className="text-lg font-bold mb-4">Founder</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Built by <span className="text-foreground font-medium">Ariba Irfan</span>
                </p>
                <a
                  href="https://aribairfan.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                >
                  View Portfolio <ExternalLink size={14} />
                </a>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <GlassCard className="text-center max-w-4xl mx-auto py-16" glow="primary">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Globe className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                The Future Doesn't Wait. <span className="gradient-text">Neither Do We.</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Stop dreaming. Start building. Let's create something that changes the game.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg btn-glow hover:gap-4 transition-all"
              >
                Start Building Now
                <Rocket size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Index;
