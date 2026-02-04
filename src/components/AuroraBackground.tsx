import { motion } from 'framer-motion';

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Aurora layers */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 60% at 50% -10%, hsl(217 91% 60% / 0.12), transparent 70%),
            radial-gradient(ellipse 80% 50% at 80% 20%, hsl(189 94% 43% / 0.08), transparent 60%),
            radial-gradient(ellipse 60% 40% at 20% 80%, hsl(280 85% 65% / 0.06), transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving aurora wave 1 */}
      <motion.div
        className="absolute -inset-[100px]"
        style={{
          background: `radial-gradient(ellipse 120% 40% at 30% 10%, hsl(217 91% 60% / 0.1), transparent 60%)`,
        }}
        animate={{
          x: [-50, 100, -50],
          y: [-20, 30, -20],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving aurora wave 2 */}
      <motion.div
        className="absolute -inset-[100px]"
        style={{
          background: `radial-gradient(ellipse 100% 50% at 70% 30%, hsl(189 94% 43% / 0.08), transparent 50%)`,
        }}
        animate={{
          x: [50, -80, 50],
          y: [20, -40, 20],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Constellation grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, hsl(217 91% 60% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Large floating orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, hsl(217 91% 60% / 0.15), transparent 70%)',
          top: '-15%',
          left: '-10%',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
        style={{
          background: 'radial-gradient(circle, hsl(189 94% 43% / 0.12), transparent 70%)',
          bottom: '-10%',
          right: '-5%',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px]"
        style={{
          background: 'radial-gradient(circle, hsl(280 85% 65% / 0.08), transparent 70%)',
          top: '40%',
          right: '20%',
        }}
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(222 47% 2% / 0.4) 100%)',
        }}
      />
    </div>
  );
};

export default AuroraBackground;
