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
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    // Check if intro has already played in this session
    const played = sessionStorage.getItem('indoverse-intro-played');
    if (played) {
      setHasPlayed(true);
      setIsVisible(false);
      onComplete();
      return;
    }

    // Play the video
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        console.log('Autoplay prevented:', err);
        // If autoplay fails (browser policy), skip intro
        handleVideoEnd();
      });
    }
  }, []);

  const handleVideoEnd = () => {
    setIsAnimating(true);
    
    // After shrink animation completes, hide overlay
    setTimeout(() => {
      sessionStorage.setItem('indoverse-intro-played', 'true');
      setIsVisible(false);
      onComplete();
    }, 1200);
  };

  // Don't render if already played
  if (hasPlayed || !isVisible) {
    return null;
  }

  // Calculate target position for the logo in header (top-left)
  const getTargetPosition = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    
    // Target: header logo position (approximately 24px from left, 20px from top for the center)
    // We need to calculate offset from center of screen
    const targetX = -(vw / 2) + 60; // Move to left side + some padding for logo center
    const targetY = -(vh / 2) + 40; // Move to top + header height center
    
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
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
            className="w-screen h-screen flex items-center justify-center"
          >
            <video
              ref={videoRef}
              onEnded={handleVideoEnd}
              playsInline
              className="w-full h-full object-cover"
              style={{ 
                maxWidth: '100vw', 
                maxHeight: '100vh' 
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
