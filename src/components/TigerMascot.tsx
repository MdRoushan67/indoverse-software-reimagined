import { motion } from 'framer-motion';

interface TigerMascotProps {
  isReading?: boolean;
  className?: string;
}

const TigerMascot = ({ isReading = true, className = '' }: TigerMascotProps) => {
  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Body - Suit */}
        <motion.path
          d="M60 180 Q50 200 50 220 L150 220 Q150 200 140 180 L100 170 L60 180 Z"
          fill="hsl(217 50% 20%)"
          stroke="hsl(217 40% 30%)"
          strokeWidth="2"
        />
        
        {/* Suit lapels */}
        <path
          d="M85 170 L75 220 L100 195 L125 220 L115 170 Z"
          fill="hsl(0 0% 95%)"
        />
        
        {/* Tie */}
        <motion.path
          d="M95 175 L100 180 L105 175 L102 220 L98 220 Z"
          fill="hsl(217 91% 60%)"
          animate={isReading ? { rotate: [-2, 2, -2] } : {}}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ transformOrigin: '100px 175px' }}
        />

        {/* Tiger Head */}
        <motion.g
          animate={isReading ? { 
            y: [0, -2, 0],
            rotate: [-1, 1, -1] 
          } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: '100px 100px' }}
        >
          {/* Face base */}
          <ellipse cx="100" cy="100" rx="55" ry="50" fill="hsl(30 80% 55%)" />
          
          {/* Tiger stripes */}
          <path d="M60 80 Q70 90 65 100" stroke="hsl(30 60% 25%)" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M55 95 Q65 100 60 110" stroke="hsl(30 60% 25%)" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M140 80 Q130 90 135 100" stroke="hsl(30 60% 25%)" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M145 95 Q135 100 140 110" stroke="hsl(30 60% 25%)" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M90 55 Q100 50 100 60" stroke="hsl(30 60% 25%)" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M110 55 Q100 50 100 60" stroke="hsl(30 60% 25%)" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* White face patch */}
          <ellipse cx="100" cy="115" rx="35" ry="30" fill="hsl(40 50% 95%)" />

          {/* Ears */}
          <ellipse cx="55" cy="55" rx="20" ry="22" fill="hsl(30 80% 55%)" />
          <ellipse cx="55" cy="55" rx="12" ry="14" fill="hsl(350 60% 70%)" />
          <ellipse cx="145" cy="55" rx="20" ry="22" fill="hsl(30 80% 55%)" />
          <ellipse cx="145" cy="55" rx="12" ry="14" fill="hsl(350 60% 70%)" />

          {/* Eyes */}
          <g>
            {/* Eye whites */}
            <ellipse cx="78" cy="90" rx="14" ry="12" fill="white" />
            <ellipse cx="122" cy="90" rx="14" ry="12" fill="white" />
            
            {/* Pupils - animated reading */}
            <motion.ellipse 
              cx="78" 
              cy="90" 
              rx="7" 
              ry="8" 
              fill="hsl(30 50% 15%)"
              animate={isReading ? { cx: [75, 82, 75] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.ellipse 
              cx="122" 
              cy="90" 
              rx="7" 
              ry="8" 
              fill="hsl(30 50% 15%)"
              animate={isReading ? { cx: [119, 126, 119] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Eye highlights */}
            <circle cx="75" cy="87" r="3" fill="white" />
            <circle cx="119" cy="87" r="3" fill="white" />
          </g>

          {/* Nose */}
          <ellipse cx="100" cy="110" rx="10" ry="7" fill="hsl(350 30% 30%)" />
          <ellipse cx="100" cy="108" rx="4" ry="2" fill="hsl(350 30% 50%)" />

          {/* Mouth - smirking */}
          <path 
            d="M85 122 Q100 130 115 122" 
            stroke="hsl(350 30% 30%)" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            fill="none"
          />

          {/* Whiskers */}
          <g stroke="hsl(30 30% 40%)" strokeWidth="1.5" strokeLinecap="round">
            <line x1="55" y1="105" x2="35" y2="100" />
            <line x1="55" y1="110" x2="32" y2="112" />
            <line x1="55" y1="115" x2="35" y2="122" />
            <line x1="145" y1="105" x2="165" y2="100" />
            <line x1="145" y1="110" x2="168" y2="112" />
            <line x1="145" y1="115" x2="165" y2="122" />
          </g>

          {/* Glasses */}
          <g>
            {/* Frames */}
            <rect x="60" y="78" width="30" height="26" rx="4" fill="none" stroke="hsl(45 80% 50%)" strokeWidth="3" />
            <rect x="110" y="78" width="30" height="26" rx="4" fill="none" stroke="hsl(45 80% 50%)" strokeWidth="3" />
            
            {/* Bridge */}
            <path d="M90 88 Q100 85 110 88" stroke="hsl(45 80% 50%)" strokeWidth="2.5" fill="none" />
            
            {/* Temple arms */}
            <line x1="60" y1="85" x2="45" y2="80" stroke="hsl(45 80% 50%)" strokeWidth="2.5" />
            <line x1="140" y1="85" x2="155" y2="80" stroke="hsl(45 80% 50%)" strokeWidth="2.5" />
            
            {/* Lens glint */}
            <motion.rect
              x="65"
              y="82"
              width="8"
              height="3"
              rx="1"
              fill="white"
              opacity="0.6"
              animate={isReading ? { opacity: [0.3, 0.8, 0.3] } : { opacity: 0.4 }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </g>
        </motion.g>

        {/* Tail */}
        <motion.path
          d="M155 190 Q180 170 175 150 Q170 130 185 120"
          stroke="hsl(30 80% 55%)"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
          animate={isReading ? { 
            d: [
              "M155 190 Q180 170 175 150 Q170 130 185 120",
              "M155 190 Q175 175 180 155 Q185 135 170 125",
              "M155 190 Q180 170 175 150 Q170 130 185 120"
            ]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M155 190 Q180 170 175 150 Q170 130 185 120"
          stroke="hsl(30 60% 25%)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="10 15"
          fill="none"
          animate={isReading ? { 
            d: [
              "M155 190 Q180 170 175 150 Q170 130 185 120",
              "M155 190 Q175 175 180 155 Q185 135 170 125",
              "M155 190 Q180 170 175 150 Q170 130 185 120"
            ]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  );
};

export default TigerMascot;
