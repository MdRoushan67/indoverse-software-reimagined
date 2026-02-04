import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Rocket, Eye, Sparkles, ArrowRight, ExternalLink, Linkedin, Twitter } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

const About = () => {
  const values = [
    {
      icon: Rocket,
      title: 'Speed is Everything',
      description: "In the time it takes traditional agencies to schedule a meeting, we've shipped v1. Time is the only resource you can't get back.",
    },
    {
      icon: Target,
      title: 'User-Obsessed',
      description: "We don't build software for the sake of building. Every line of code serves the end user. If it doesn't add value, it doesn't ship.",
    },
    {
      icon: Sparkles,
      title: 'AI-Native',
      description: "AI isn't a feature we bolt on—it's how we think, build, and deliver. We leverage cutting-edge AI to do more with less.",
    },
    {
      icon: Eye,
      title: 'Transparent Always',
      description: 'No hidden costs, no surprise delays, no corporate BS. What we quote is what you pay. Wild concept, we know.',
    },
  ];

  const timeline = [
    {
      year: '2023',
      title: 'The Spark',
      description: 'Ariba Irfan pivots from UPSC preparation to entrepreneurship, seeing the massive inefficiency in software development.',
    },
    {
      year: '2024',
      title: 'Ownclothing Launches',
      description: 'First product goes live—a hyperlocal fashion marketplace. Proof of concept that we can build fast and build right.',
    },
    {
      year: '2024',
      title: 'Ownclothing AI Ships',
      description: "World's first AI-powered clothing price comparison tool goes live. Users save money, we validate our AI-first approach.",
    },
    {
      year: '2025',
      title: 'Expanding the Universe',
      description: 'Techgram and Gig-lo enter development. Targeting 2B+ users across education and gig economy sectors.',
    },
    {
      year: 'Future',
      title: 'Every Sector. Every Industry.',
      description: "B2B, D2C, government—if it needs software, we're building it. The Indoverse is just getting started.",
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
              We're Not Just Building <span className="gradient-text">Software</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We're engineering the future. One disruptive product at a time. Based in India, 
              building for the world—because great software shouldn't have borders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <GlassCard glow="primary" delay={0.1}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To democratize software development. Whether you're a solo dreamer or an enterprise giant, 
                everyone deserves access to world-class technology. We're making "I can't afford custom software" 
                a thing of the past.
              </p>
            </GlassCard>

            <GlassCard glow="accent" delay={0.2}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the #1 AI-powered SaaS company in the world. Not the biggest—the best. 
                The go-to name when someone says "I need software that works." 
                Every sector. Every industry. Every dream turned digital.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground">From a spark of an idea to building the future.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 border-border last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary glow-primary" />
                <div className="text-sm text-primary font-semibold mb-2">{item.year}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the <span className="gradient-text">Founder</span>
            </h2>
          </motion.div>

          <GlassCard className="max-w-4xl mx-auto" delay={0.1}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center overflow-hidden flex-shrink-0">
                <div className="text-6xl font-bold gradient-text">AI</div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Ariba Irfan</h3>
                <p className="text-primary font-medium mb-4">Founder & CEO</p>
                <p className="text-muted-foreground mb-6">
                  From UPSC aspirant to tech entrepreneur—Ariba saw the massive inefficiency in how software 
                  gets built and said "nah, we can do better." Now leading Indoverse Labs to disrupt every 
                  sector with AI-powered solutions. When not building the future, probably overthinking it.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <a
                    href="https://aribairfan.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    Portfolio <ExternalLink size={16} />
                  </a>
                  <a
                    href="https://linkedin.com/in/aribairfan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://twitter.com/aribairfan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We <span className="gradient-text">Stand For</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These aren't just values on a wall—they're how we operate, every single day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <GlassCard key={value.title} delay={index * 0.1} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                  <value.icon size={28} />
                </div>
                <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 md:px-6">
          <GlassCard className="text-center max-w-3xl mx-auto" glow="primary">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want to Join the <span className="gradient-text">Revolution</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you want to work with us or have us build something for you—let's talk.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold btn-glow hover:gap-4 transition-all"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default About;
