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

  useEffect(() => {
    // Play video on every page load/refresh
    const video = videoRef.current;
    if (video) {
      // Reset video to start
      video.currentTime = 0;
      
      // Try to play with sound first
      video.muted = false;
      video.play().catch(() => {
        // If autoplay with sound fails (browser policy), try muted
        video.muted = true;
        video.play().catch(() => {
          // If even muted autoplay fails, skip intro
          handleVideoEnd();
        });
      });
    }
  }, []);

  const handleVideoEnd = () => {
    setIsAnimating(true);
    
    // After shrink animation completes, hide overlay
    setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 1200);
  };

  if (!isVisible) {
    return null;
  }

  // Calculate target position for the logo in header (top-left)
  const getTargetPosition = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    
    // Target: header logo position (approximately 24px from left, 20px from top for the center)
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
          className="fixed inset-0 z-[100] bg-black overflow-hidden"
          style={{ 
            width: '100vw', 
            height: '100vh',
            minHeight: '100dvh' // Dynamic viewport height for mobile
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
            className="absolute inset-0"
            style={{
              width: '100%',
              height: '100%'
            }}
          >
            <video
              ref={videoRef}
              onEnded={handleVideoEnd}
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full"
              style={{
                objectFit: 'cover',
                objectPosition: 'center center',
                minWidth: '100%',
                minHeight: '100%'
              }}
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
