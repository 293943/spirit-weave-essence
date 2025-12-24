import { motion } from 'framer-motion';

export function WoodSpiritAvatar() {
  return (
    <div className="relative w-full aspect-[3/4] max-w-xs mx-auto">
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(150 45% 45% / 0.2) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Sacred geometry background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg
          viewBox="0 0 200 200"
          className="w-3/4 h-3/4 opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          {/* Octagon */}
          <polygon
            points="100,10 170,40 190,100 170,160 100,190 30,160 10,100 30,40"
            fill="none"
            stroke="hsl(150 45% 50%)"
            strokeWidth="0.5"
          />
          {/* Inner circles */}
          <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(150 40% 45%)" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="hsl(42 80% 55%)" strokeWidth="0.3" />
        </motion.svg>
      </div>

      {/* Main avatar container */}
      <motion.div
        className="relative z-10 w-full h-full flex items-center justify-center"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Spirit silhouette placeholder */}
        <div className="relative">
          {/* Body glow */}
          <div
            className="absolute inset-0 blur-2xl"
            style={{
              background: 'radial-gradient(ellipse at center, hsl(150 50% 50% / 0.4) 0%, transparent 70%)',
              transform: 'scale(1.5)',
            }}
          />
          
          {/* Spirit figure */}
          <svg
            viewBox="0 0 120 180"
            className="w-40 h-60 relative z-10"
            fill="none"
          >
            {/* Ethereal body shape */}
            <defs>
              <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(150 50% 60%)" stopOpacity="0.9" />
                <stop offset="50%" stopColor="hsl(150 45% 45%)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="hsl(150 40% 30%)" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(42 80% 60%)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(42 70% 40%)" stopOpacity="0.2" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Flowing robe/body */}
            <motion.path
              d="M60 30 Q80 40 85 60 Q90 100 95 140 Q97 160 80 175 L40 175 Q23 160 25 140 Q30 100 35 60 Q40 40 60 30"
              fill="url(#bodyGradient)"
              filter="url(#glow)"
              animate={{
                d: [
                  "M60 30 Q80 40 85 60 Q90 100 95 140 Q97 160 80 175 L40 175 Q23 160 25 140 Q30 100 35 60 Q40 40 60 30",
                  "M60 30 Q82 42 87 62 Q92 102 93 142 Q95 162 78 175 L42 175 Q25 162 27 142 Q28 102 33 62 Q38 42 60 30",
                  "M60 30 Q80 40 85 60 Q90 100 95 140 Q97 160 80 175 L40 175 Q23 160 25 140 Q30 100 35 60 Q40 40 60 30",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Head with inner glow */}
            <circle cx="60" cy="25" r="18" fill="url(#bodyGradient)" filter="url(#glow)" />
            
            {/* Third eye / forehead symbol */}
            <motion.circle
              cx="60"
              cy="20"
              r="3"
              fill="url(#glowGradient)"
              animate={{
                opacity: [0.5, 1, 0.5],
                r: [2.5, 3.5, 2.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Wood element vines */}
            <motion.path
              d="M45 80 Q35 90 30 110 Q28 130 35 145"
              stroke="hsl(150 60% 50%)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.path
              d="M75 80 Q85 90 90 110 Q92 130 85 145"
              stroke="hsl(150 60% 50%)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />

            {/* Floating leaves */}
            <motion.ellipse
              cx="25"
              cy="60"
              rx="6"
              ry="3"
              fill="hsl(150 50% 50%)"
              opacity="0.5"
              animate={{
                y: [-5, 5, -5],
                rotate: [-10, 10, -10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.ellipse
              cx="95"
              cy="70"
              rx="5"
              ry="2.5"
              fill="hsl(150 50% 55%)"
              opacity="0.4"
              animate={{
                y: [5, -5, 5],
                rotate: [10, -10, 10],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </svg>

          {/* Floating runes around the figure */}
          <motion.div
            className="absolute -left-8 top-1/3 text-primary/40 font-serif text-2xl"
            animate={{
              y: [-5, 5, -5],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            木
          </motion.div>
          <motion.div
            className="absolute -right-8 top-1/2 text-accent/40 font-serif text-xl"
            animate={{
              y: [5, -5, 5],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            乙
          </motion.div>
        </div>
      </motion.div>

      {/* Ground mist */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{
          background: 'linear-gradient(to top, hsl(150 30% 25% / 0.3) 0%, transparent 100%)',
        }}
      />
    </div>
  );
}
