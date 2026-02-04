import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'primary' | 'accent' | 'none';
  delay?: number;
}

const GlassCard = ({ 
  children, 
  className = '', 
  hover = true, 
  glow = 'none',
  delay = 0 
}: GlassCardProps) => {
  const glowClasses = {
    primary: 'hover:glow-primary',
    accent: 'hover:glow-accent',
    none: '',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={hover ? { 
        y: -8,
        transition: { duration: 0.3 }
      } : undefined}
      className={cn(
        'glass-card p-6 transition-all duration-300',
        hover && 'cursor-pointer',
        glowClasses[glow],
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
