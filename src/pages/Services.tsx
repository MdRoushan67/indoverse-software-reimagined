import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, Users, Code2, Cpu, Database, Cloud, 
  Smartphone, Globe, Shield, Zap, ArrowRight,
  MessageSquare, Palette, Rocket, LineChart
} from 'lucide-react';
import GlassCard from '@/components/GlassCard';

const Services = () => {
  const mainServices = [
    {
      icon: Building2,
      title: 'B2B Solutions',
      description: 'Enterprise-grade platforms that scale with your business.',
      features: [
        'Custom CRM & ERP Systems',
        'SaaS Platform Development',
        'API Development & Integration',
        'Admin Dashboards & Analytics',
        'Workflow Automation Tools',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'D2C Products',
      description: 'Consumer-facing apps that users actually love to use.',
      features: [
        'E-commerce Platforms',
        'Social & Community Apps',
        'On-demand Service Apps',
        'Subscription Products',
        'AI-Powered Consumer Tools',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Code2,
      title: 'Custom Development',
      description: 'Got a unique idea? We turn wild concepts into reality.',
      features: [
        'MVP Development (2-4 weeks)',
        'Full Product Development',
        'Legacy System Modernization',
        'Tech Stack Migration',
        'Performance Optimization',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const techStack = [
    { icon: Cpu, name: 'AI/ML', desc: 'GPT, LLaMA, Custom Models' },
    { icon: Globe, name: 'Web', desc: 'React, Next.js, Vue' },
    { icon: Smartphone, name: 'Mobile', desc: 'React Native, Flutter' },
    { icon: Database, name: 'Backend', desc: 'Node.js, Python, Go' },
    { icon: Cloud, name: 'Cloud', desc: 'AWS, GCP, Azure' },
    { icon: Shield, name: 'Security', desc: 'SOC2, GDPR Compliant' },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We listen. You talk about your vision, problems, and dreams. No sales pitch, just understanding.',
      duration: '30 min',
    },
    {
      step: '02',
      title: 'Proposal & Planning',
      description: 'We come back with a detailed plan, timeline, and transparent pricing. No hidden costs, ever.',
      duration: '24-48 hours',
    },
    {
      step: '03',
      title: 'Design & Prototype',
      description: 'Interactive prototypes you can click through. We iterate until you love it.',
      duration: '3-5 days',
    },
    {
      step: '04',
      title: 'Development Sprint',
      description: 'We build fast. Daily updates, weekly demos. You see progress in real-time.',
      duration: '2-6 weeks',
    },
    {
      step: '05',
      title: 'Launch & Scale',
      description: 'We deploy, monitor, and help you scale. Post-launch support included.',
      duration: 'Ongoing',
    },
  ];

  const specializations = [
    { icon: MessageSquare, name: 'AI Chatbots', desc: 'Custom-trained conversational AI' },
    { icon: Palette, name: 'Design Systems', desc: 'Scalable UI/UX frameworks' },
    { icon: LineChart, name: 'Analytics', desc: 'Real-time dashboards & insights' },
    { icon: Rocket, name: 'MVP Sprints', desc: 'Idea to product in 2 weeks' },
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-8">
              <Zap size={16} />
              AI-Powered Development
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Services That <span className="gradient-text">Actually Ship</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              From concept to production in weeks, not months. We're not your typical dev agency—we're 
              your AI-powered engineering partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <GlassCard 
                key={service.title} 
                delay={index * 0.1}
                className="relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`} />
                
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                  <service.icon size={28} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined process designed for speed without sacrificing quality.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-8 pb-12 last:pb-0"
              >
                {/* Line */}
                {index !== process.length - 1 && (
                  <div className="absolute left-[27px] top-16 bottom-0 w-0.5 bg-border" />
                )}
                
                {/* Step Number */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-lg">
                  {step.step}
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground">Modern, scalable, battle-tested technologies.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <GlassCard key={tech.name} delay={index * 0.05} className="text-center py-8">
                <tech.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-1">{tech.name}</h3>
                <p className="text-xs text-muted-foreground">{tech.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We <span className="gradient-text">Specialize</span> In
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {specializations.map((spec, index) => (
              <GlassCard key={spec.name} delay={index * 0.1} glow="primary" className="text-center">
                <spec.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-1">{spec.name}</h3>
                <p className="text-sm text-muted-foreground">{spec.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 md:px-6">
          <GlassCard className="text-center max-w-3xl mx-auto py-16" glow="primary">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get <span className="gradient-text">Started</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              No commitment, no hard sell. Just a conversation about what you're building 
              and how we can help make it happen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold btn-glow hover:gap-4 transition-all"
              >
                Book a Free Call
                <ArrowRight size={20} />
              </Link>
              <a
                href="mailto:contact@indoverselabs.in"
                className="inline-flex items-center gap-2 px-8 py-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                Or email us directly
              </a>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Services;
