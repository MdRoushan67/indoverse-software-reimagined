import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, GraduationCap, Briefcase, ShoppingBag, Bot } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

const Portfolio = () => {
  const projects = [
    {
      id: 'techgram',
      name: 'Techgram',
      tagline: 'The Metaverse of Education',
      status: 'Building',
      icon: GraduationCap,
      link: 'https://techgramedu.in',
      gradient: 'from-blue-500 to-cyan-500',
      description: "AI-powered learning platform that's about to revolutionize how 2B+ underserved learners globally access quality education.",
      features: [
        'Personalized AI Super-Teachers',
        'Adaptive Learning Paths',
        'Real-time Progress Tracking',
        'Gamified Learning Experience',
        'Multi-language Support',
      ],
      impact: "Targeting India's broken education system with AI that actually understands each student.",
      longDescription: `Techgram isn't just another EdTech platform—it's a complete reimagining of education. 
        Traditional education fails because it treats every student the same. Techgram's AI understands that 
        your learning style, pace, and needs are unique. We're building personalized AI tutors that adapt 
        in real-time, making quality education accessible to the 2B+ learners who've been left behind by 
        the current system.`,
    },
    {
      id: 'giglo',
      name: 'Gig-lo',
      tagline: 'People for People',
      status: 'Building',
      icon: Briefcase,
      link: 'https://giglo.in',
      gradient: 'from-green-500 to-emerald-500',
      description: 'Community-powered hyperlocal marketplace empowering India\'s 450M+ informal workers.',
      features: [
        'Instant Gig Matching',
        'AI Skill Badges',
        'Verified Worker Profiles',
        'Hyperlocal Discovery',
        'Secure Payments',
      ],
      impact: 'Bringing dignity and opportunity to the invisible workforce that keeps India running.',
      longDescription: `India has 450M+ informal workers—electricians, plumbers, drivers, domestic helpers—who 
        struggle to find consistent work and fair pay. Gig-lo is changing that. Our community-powered platform 
        connects local workers with local jobs, using AI to verify skills and build trust. No middlemen taking 
        cuts, no exploitation—just people helping people.`,
    },
    {
      id: 'ownclothing',
      name: 'Ownclothing',
      tagline: 'Fashion, Hyperlocal',
      status: 'Building',
      icon: ShoppingBag,
      link: 'https://ownclothing.in',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Hyperlocal fashion marketplace with 100+ D2C brands and 60-minute delivery.',
      features: [
        '100+ D2C Fashion Brands',
        'AI Fit Recommendations',
        'Lowest Price Guarantee',
        '60-Minute Delhi Delivery',
        'Try Before You Buy',
      ],
      impact: 'Making premium fashion accessible with local speed and global quality.',
      longDescription: `Why wait 3-5 days for clothes when you could have them in an hour? Ownclothing 
        aggregates the best D2C fashion brands and delivers them at hyperlocal speed. Our AI helps you 
        find the perfect fit, and our price guarantee ensures you're never overpaying. Fashion that fits 
        your style, your body, and your schedule.`,
    },
    {
      id: 'ownclothing-ai',
      name: 'Ownclothing AI',
      tagline: 'Price Comparison on Steroids',
      status: 'Live',
      icon: Bot,
      link: 'https://ownclothing.in/ownclothingai',
      gradient: 'from-orange-500 to-red-500',
      description: 'AI that scans every platform to find you the best clothing deals. Currently live and saving users money.',
      features: [
        'Multi-Platform Price Scanning',
        'Real-time Price Alerts',
        'Deal Quality Scoring',
        'Brand Authenticity Check',
        'Price History Tracking',
      ],
      impact: 'Already live and helping users save money on every clothing purchase.',
      longDescription: `Ever wonder if you're getting the best price? Stop wondering. Ownclothing AI scans 
        every major fashion platform in real-time to find you the absolute best deals. It's not just about 
        finding lower prices—it's about understanding deal quality, tracking price history, and ensuring 
        you're buying authentic products. The fashion industry's pricing games, exposed.`,
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
              What We're <span className="gradient-text">Building</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Products that are redefining industries. Each one built to solve real problems for real people.
              No vaporware, no endless roadmaps—just software that ships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="relative py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="overflow-hidden">
                  {/* Header gradient */}
                  <div className={`h-2 bg-gradient-to-r ${project.gradient} -mx-6 -mt-6 mb-8`} />
                  
                  <div className="grid lg:grid-cols-5 gap-8">
                    {/* Left column - Main info */}
                    <div className="lg:col-span-3">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                          <project.icon size={32} className="text-foreground" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h2 className="text-2xl md:text-3xl font-bold">{project.name}</h2>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              project.status === 'Live' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-primary/20 text-primary'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                          <p className="text-primary font-medium">{project.tagline}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-foreground mb-4">{project.description}</p>
                      <p className="text-muted-foreground mb-6">{project.longDescription}</p>
                      
                      <div className="bg-secondary/30 rounded-xl p-4 mb-6">
                        <p className="text-sm">
                          <span className="text-primary font-semibold">Impact: </span>
                          {project.impact}
                        </p>
                      </div>
                      
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold btn-glow hover:gap-4 transition-all"
                      >
                        Visit {project.name}
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    
                    {/* Right column - Features */}
                    <div className="lg:col-span-2">
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">4</div>
              <p className="text-sm text-muted-foreground">Products</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">3</div>
              <p className="text-sm text-muted-foreground">Industries</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">2B+</div>
              <p className="text-sm text-muted-foreground">Target Users</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">1</div>
              <p className="text-sm text-muted-foreground">Live Product</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 md:px-6">
          <GlassCard className="text-center max-w-3xl mx-auto py-16" glow="primary">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Got an Idea That <span className="gradient-text">Needs Building</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We're always looking for the next big thing to build. If you've got a vision 
              that could change an industry, we want to hear about it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold btn-glow hover:gap-4 transition-all"
              >
                Let's Build Together
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                See Our Services
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
