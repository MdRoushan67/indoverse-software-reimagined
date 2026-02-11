import { useEffect, useRef, useState } from 'react';
import heroVideo from '@/assets/hero-bg-video.mp4';

interface HeroVideoBackgroundProps {
  className?: string;
}

const HeroVideoBackground = ({ className = '' }: HeroVideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = 0.5;
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Solid background shown immediately */}
      <div className="absolute inset-0 bg-background" />

      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in ${ready ? 'opacity-100' : 'opacity-0'}`}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        onLoadedData={() => setReady(true)}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 85%)'
        }}
      />
    </div>
  );
};

export default HeroVideoBackground;
