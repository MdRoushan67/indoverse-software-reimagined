import heroBg from '@/assets/hero-bg.gif';

interface HeroVideoBackgroundProps {
  className?: string;
}

const HeroVideoBackground = ({ className = '' }: HeroVideoBackgroundProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated GIF background - object-contain to preserve quality */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-contain bg-background"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 80%)'
        }}
      />
    </div>
  );
};

export default HeroVideoBackground;
