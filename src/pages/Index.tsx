import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Code2, Rocket, Globe, Users, Building2, ChevronRight, ExternalLink } from 'lucide-react';
import GlitchText from '@/components/GlitchText';
import GlassCard from '@/components/GlassCard';
import AnimatedCounter from '@/components/AnimatedCounter';

const Index = () => {
  const services = [
    {
      icon: Building2,
      title: 'B2B Solutions',
      description: 'Enterprise-grade software that scales. CRMs, ERPs, and custom platforms that actually work.',
      color: 'primary',
    },
    {
      icon: Users,
      title: 'D2C Products',
      description: 'Consumer apps that users love. From marketplaces to AI companions, we build what sells.',
      color: 'accent',
    },
    {
      icon: Code2,
      title: 'Custom Development',
      description: 'Got a wild idea? We turn napkin sketches into production-ready platforms. No judgment.',
      color: 'primary',
    },
  ];

  const stats = [
    { value: 4, suffix: '+', label: 'Products Launched' },
    { value: 10, suffix: '+', label: 'Industries Disrupted' },
    { value: 90, suffix: '%', label: 'Faster Than Traditional' },
    { value: 2000000000, suffix: '+', label: 'Users Targeted', prefix: '' },
  ];

  const portfolio = [
    {
      name: 'Techgram',
      tagline: 'The Metaverse of Education',
      description: 'AI-powered learning platform revolutionizing Indian education. Personalized AI super-teachers for 2B+ underserved learners globally.',
      status: 'Building',
      link: 'https://techgramedu.in',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Gig-lo',
      tagline: 'People for People',
      description: "Community-powered hyperlocal marketplace empowering India's 450M+ informal workers with instant gig matching and AI skill badges.",
      status: 'Building',
      link: 'https://giglo.in',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Ownclothing',
      tagline: 'Fashion, Hyperlocal',
      description: 'Hyperlocal fashion marketplace with 100+ D2C brands, AI fit recommendations, and 60-minute Delhi delivery.',
      status: 'Building',
      link: 'https://ownclothing.in',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Ownclothing AI',
      tagline: 'Price Comparison on Steroids',
      description: 'Clothing price comparison AI that scans all platforms to find you the best deals. Because why pay more?',
      status: 'Live',
      link: 'https://ownclothing.in/ownclothingai',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
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

            {/* Main Headline */}
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

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
            >
              We build what others quote months for—in <span className="text-primary font-semibold">days</span>. 
              AI-powered SaaS development for B2B, D2C, and anyone crazy enough to dream big. 
              Welcome to the future of software.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg btn-glow hover:gap-4 transition-all"
              >
                Let's Build Something Insane
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary/50 text-foreground rounded-full font-semibold text-lg hover:bg-secondary transition-all"
              >
                See Our Work
                <Rocket size={20} />
              </Link>
            </motion.div>
          </div>

          {/* Scroll indicator */}
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
            {/* Problem */}
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

            {/* Solution */}
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

      {/* What We Build Section */}
      <section className="relative py-24">
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

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlassCard 
                key={service.title} 
                glow={service.color as 'primary' | 'accent'}
                delay={index * 0.1}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${service.color}/10 text-${service.color} mb-6`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
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
                    prefix={stat.prefix}
                    duration={2.5}
                  />
                </div>
                <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="relative py-24">
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
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-1">{project.name}</h3>
                    <p className="text-sm text-primary">{project.tagline}</p>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/50 hover:bg-secondary text-foreground rounded-full font-medium transition-all"
            >
              View Full Portfolio
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <GlassCard className="text-center max-w-4xl mx-auto py-16" glow="primary">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Globe className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-glow" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Build Something <span className="gradient-text">Insane</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Whether you're a solo founder with a napkin sketch or an enterprise needing a complete digital 
                transformation—we're here to make it happen. Fast.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg btn-glow hover:gap-4 transition-all"
                >
                  Start Building
                  <Rocket size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="mailto:contact@indoverselabs.in"
                  className="inline-flex items-center gap-2 px-8 py-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  contact@indoverselabs.in
                </a>
              </div>
            </motion.div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Index;
