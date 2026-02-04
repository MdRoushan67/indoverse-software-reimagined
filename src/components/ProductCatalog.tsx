import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Rocket, Building2, Landmark, X,
  Palette, Globe, Lightbulb, Link2,
  Code2, Box, ArrowRightLeft, Bot,
  ShoppingCart, MessageSquare, Settings, BarChart3,
  Server, Shield
} from 'lucide-react';
import GlassCard from './GlassCard';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface CatalogCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  gradient: string;
  services: Service[];
  comingSoon?: boolean;
}

const categories: CatalogCategory[] = [
  {
    id: 'individuals',
    title: 'For Individuals',
    subtitle: 'Creators & Freelancers',
    icon: User,
    gradient: 'from-blue-500 to-cyan-500',
    services: [
      { icon: Palette, title: 'AI Personal Portfolio Builder', description: 'Custom portfolios for students, creators, developers. Auto-designed, SEO-ready, hosted.' },
      { icon: Globe, title: 'Personal Website & Brand Identity', description: 'One-page or multi-page personal websites with brand colors, fonts, logo assistance.' },
      { icon: Lightbulb, title: 'Idea to App (Solo Edition)', description: 'Turn your idea into a real product. MVP apps, tools, dashboards—no tech knowledge needed.' },
      { icon: Link2, title: 'Creator Tools & Micro-Platforms', description: 'Link-in-bio alternatives, fan communities, subscription tools, digital product selling.' },
    ],
  },
  {
    id: 'startups',
    title: 'For Startups',
    subtitle: 'Founders & Teams',
    icon: Rocket,
    gradient: 'from-green-500 to-emerald-500',
    services: [
      { icon: Code2, title: 'Startup Software Builder', description: 'MVPs, SaaS products, internal tools. Web apps, mobile apps, admin panels—built faster with AI.' },
      { icon: Box, title: 'SaaS Launch Kit', description: 'Website + dashboard, authentication, payments, subscriptions, analytics and scaling support.' },
      { icon: ArrowRightLeft, title: 'No-Code to Full-Code Transition', description: 'Start fast, scale properly. Convert early tools into enterprise-grade software.' },
      { icon: Bot, title: 'Custom AI Solutions', description: 'Chatbots, AI assistants, recommendation systems, workflow automation.' },
    ],
  },
  {
    id: 'businesses',
    title: 'For Businesses',
    subtitle: 'D2C Brands & Companies',
    icon: Building2,
    gradient: 'from-purple-500 to-pink-500',
    services: [
      { icon: ShoppingCart, title: 'Business Websites & Platforms', description: 'High-conversion websites, e-commerce platforms, booking and service systems.' },
      { icon: MessageSquare, title: 'AI-Powered Customer Experience', description: 'WhatsApp & website chatbots, automated support, personalized product suggestions.' },
      { icon: Settings, title: 'Operations & Automation Tools', description: 'Order management systems, inventory tools, CRM and ERP-lite solutions.' },
      { icon: BarChart3, title: 'Marketing & Growth Software', description: 'Campaign dashboards, lead tracking, AI-driven insights.' },
    ],
  },
  {
    id: 'enterprise',
    title: 'Enterprise & Gov',
    subtitle: 'Expanding Soon',
    icon: Landmark,
    gradient: 'from-orange-500 to-red-500',
    comingSoon: true,
    services: [
      { icon: Server, title: 'Enterprise Software Systems', description: 'Custom platforms, secure internal tools, large-scale deployments.' },
      { icon: Shield, title: 'Government & Public Tech Solutions', description: 'Digital portals, citizen service platforms, AI-assisted administration.' },
    ],
  },
];

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const openCategory = (id: string) => setSelectedCategory(id);
  const closeCategory = () => setSelectedCategory(null);

  const selectedData = categories.find((c) => c.id === selectedCategory);

  return (
    <section id="services" className="relative py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From solo creators to enterprises—we've got the tech to make it happen.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => openCategory(category.id)}
                className="w-full text-left group"
              >
                <GlassCard 
                  className="relative overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                  glow="primary"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.gradient}`} />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} bg-opacity-20`}>
                      <category.icon size={28} className="text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                    </div>
                    {category.comingSoon && (
                      <span className="ml-auto px-3 py-1 text-xs font-medium bg-orange-500/20 text-orange-400 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {category.services.length} services available
                  </p>

                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Explore Services
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </GlassCard>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCategory && selectedData && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
                onClick={closeCategory}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-auto"
              >
                <div className="min-h-full flex items-start justify-center py-8">
                  <GlassCard className="w-full max-w-4xl relative" glow="primary">
                    <button
                      onClick={closeCategory}
                      className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-xl transition-colors"
                    >
                      <X size={24} />
                    </button>

                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${selectedData.gradient}`} />

                    <div className="flex items-center gap-4 mb-8">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${selectedData.gradient} bg-opacity-20`}>
                        <selectedData.icon size={32} className="text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">{selectedData.title}</h3>
                        <p className="text-muted-foreground">{selectedData.subtitle}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {selectedData.services.map((service, index) => (
                        <motion.div
                          key={service.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-6 bg-secondary/30 rounded-2xl border border-border/30"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-primary/10">
                              <service.icon size={24} className="text-primary" />
                            </div>
                            <div>
                              <h4 className="font-display font-bold text-foreground mb-2">{service.title}</h4>
                              <p className="text-sm text-muted-foreground">{service.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-border/30">
                      <button
                        onClick={() => {
                          closeCategory();
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold btn-glow"
                      >
                        Get Started with {selectedData.title}
                      </button>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductCatalog;
