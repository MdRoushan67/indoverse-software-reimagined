import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import brandIntroVideo from '@/assets/brand-intro.mp4';

interface BrandIntroOverlayProps {
  onComplete: () => void;
}

const BrandIntroOverlay = ({ onComplete }: BrandIntroOverlayProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
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
      
      video.muted = false;
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => {
          handleVideoEnd();
        });
      });
    }
  }, []);

  const handleVideoEnd = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 1200);
  };

  // Don't render on mobile or after animation completes
  if (isMobile || !isVisible) {
    return null;
  }

  // Calculate target position for the logo in header (top-left)
  const getTargetPosition = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    
    const targetX = -(vw / 2) + 60;
    const targetY = -(vh / 2) + 40;
    
    return { x: targetX, y: targetY };
  };

  const targetPos = getTargetPosition();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ 
            width: '100vw', 
            height: '100vh',
            backgroundColor: 'hsl(221, 83%, 53%)' // Blue background
          }}
        >
          <motion.div
            initial={{ 
              scale: 1, 
              x: 0, 
              y: 0, 
              opacity: 1 
            }}
            animate={isAnimating ? { 
              scale: 0.05,
              x: targetPos.x,
              y: targetPos.y,
              opacity: 0,
            } : { 
              scale: 1, 
              x: 0, 
              y: 0, 
              opacity: 1 
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="w-full h-full flex items-center justify-center"
          >
            <video
              ref={videoRef}
              onEnded={handleVideoEnd}
              playsInline
              preload="auto"
              className="w-full h-full object-contain"
            >
              <source src={brandIntroVideo} type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrandIntroOverlay;
