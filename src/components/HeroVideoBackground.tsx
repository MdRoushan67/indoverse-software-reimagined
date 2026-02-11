import heroVideo from '@/assets/hero-bg-video.mp4';

interface HeroVideoBackgroundProps {
  className?: string;
}

const HeroVideoBackground = ({ className = '' }: HeroVideoBackgroundProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        className="absolute inset-0 w-full h-full object-contain bg-background"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

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
