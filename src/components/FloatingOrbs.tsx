import { motion } from 'framer-motion';
import geometricShapes from '@/assets/geometric-shapes.jpg';
import aiNetwork from '@/assets/ai-network-bg.jpg';

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Primary animated orb - top right */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl bg-primary/15 top-[-150px] right-[-150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Accent orb - bottom left with image */}
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full overflow-hidden bottom-[-100px] left-[-100px] opacity-10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img 
          src={geometricShapes} 
          alt="" 
          className="w-full h-full object-cover blur-xl"
        />
      </motion.div>
      
      {/* Floating AI network orb - center right */}
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full overflow-hidden top-[30%] right-[-50px] opacity-5"
        animate={{
          y: [0, -30, 0],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img 
          src={aiNetwork} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Small floating orbs with blur */}
      <motion.div 
        className="absolute w-[250px] h-[250px] rounded-full blur-3xl bg-accent/10 top-[60%] left-[10%]"
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute w-[150px] h-[150px] rounded-full blur-2xl bg-primary/20 top-[20%] left-[40%]"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle particle dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
