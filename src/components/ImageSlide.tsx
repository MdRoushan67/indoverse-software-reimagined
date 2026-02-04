import { motion } from 'framer-motion';

interface ImageSlideProps {
  src: string;
  alt: string;
  className?: string;
  overlayOpacity?: number;
  parallax?: boolean;
}

const ImageSlide = ({ 
  src, 
  alt, 
  className = '', 
  overlayOpacity = 0.7,
  parallax = true 
}: ImageSlideProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={parallax ? { scale: 1.02 } : undefined}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={parallax ? { scale: 1.1 } : undefined}
        transition={{ duration: 0.6 }}
      />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-primary/0 transition-colors"
        whileHover={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}
      />
    </motion.div>
  );
};

export default ImageSlide;
