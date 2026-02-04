import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import GlassCard from './GlassCard';

import techgramLogo from '@/assets/techgram-logo.jpg';
import gigloLogo from '@/assets/giglo-logo.png';
import ownclothingLogo from '@/assets/ownclothing-logo.png';

interface Product {
  name: string;
  tagline: string;
  description: string;
  status: 'Building' | 'Live';
  link: string;
  logo: string;
  gradient: string;
}

const products: Product[] = [
  {
    name: 'Techgram',
    tagline: 'The Metaverse of Education',
    description: 'AI-powered learning platform revolutionizing Indian education. Personalized AI super-teachers for 2B+ underserved learners globally.',
    status: 'Building',
    link: 'https://techgramedu.in',
    logo: techgramLogo,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Gig-lo',
    tagline: 'People for People',
    description: "Community-powered hyperlocal marketplace empowering India's 450M+ informal workers with instant gig matching.",
    status: 'Building',
    link: 'https://giglo.in',
    logo: gigloLogo,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Ownclothing',
    tagline: 'Fashion, Hyperlocal',
    description: 'Hyperlocal fashion marketplace with 100+ D2C brands, AI fit recommendations, and 60-minute Delhi delivery.',
    status: 'Building',
    link: 'https://ownclothing.in',
    logo: ownclothingLogo,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Ownclothing AI',
    tagline: 'Price Comparison on Steroids',
    description: 'Clothing price comparison AI that scans all platforms to find you the best deals. Live now!',
    status: 'Live',
    link: 'https://ownclothing.in/ownclothingai',
    logo: ownclothingLogo,
    gradient: 'from-orange-500 to-red-500',
  },
];

const IndoverseProducts = () => {
  return (
    <section id="products" className="relative py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
            Indoverse <span className="gradient-text">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Products that are changing the game. Built by Indoverse, for the future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard 
                className="group relative overflow-hidden h-full"
                glow="primary"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${product.gradient}`} />
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-secondary/50 flex-shrink-0">
                      <img 
                        src={product.logo} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground">{product.name}</h3>
                      <p className="text-sm text-primary">{product.tagline}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    product.status === 'Live' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-primary/20 text-primary'
                  }`}>
                    {product.status === 'Live' && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse" />
                    )}
                    {product.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6">{product.description}</p>
                
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Visit Project
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndoverseProducts;
