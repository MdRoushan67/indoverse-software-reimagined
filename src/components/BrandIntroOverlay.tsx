import { useState, useRef, useEffect } from 'react';
import brandIntroVideo from '@/assets/brand-intro.mp4';

interface BrandIntroOverlayProps {
  onComplete: () => void;
  onAnimationStart?: () => void;
}

const BrandIntroOverlay = ({ onComplete, onAnimationStart }: BrandIntroOverlayProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile (less than 768px - tablet breakpoint)
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());

    // If mobile, skip intro entirely
    if (checkMobile()) {
      setIsVisible(false);
      onComplete();
      return;
    }

    // Play video on tablet/desktop
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      
      // Always start muted for autoplay reliability
      video.muted = true;
      video.play().catch(() => {
        handleVideoEnd();
      });
    }
  }, []);

  const handleVideoEnd = () => {
    // Trigger header animation immediately
    onAnimationStart?.();
    setIsExiting(true);
    
    // Quick fade out
    setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 300);
  };

  // Don't render on mobile or after animation completes
  if (isMobile || !isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black transition-opacity duration-300 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ 
        width: '100vw', 
        height: '100vh',
        willChange: 'opacity'
      }}
    >
      <video
        ref={videoRef}
        onEnded={handleVideoEnd}
        playsInline
        muted
        preload="auto"
        className="w-full h-full object-contain"
        style={{
          willChange: 'auto'
        }}
      >
        <source src={brandIntroVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default BrandIntroOverlay;
