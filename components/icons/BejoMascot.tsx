import React from 'react';

interface BejoMascotProps {
  className?: string;
  animationState?: 'idle' | 'correct' | 'incorrect';
}

const BejoMascot = ({ className, animationState = 'idle' }: BejoMascotProps) => {
  const headTilt = animationState === 'incorrect' ? 'rotate(-7deg)' : 'rotate(0deg)';
  const mouthPath = animationState === 'incorrect' ? "M 40 52 L 60 52" : "M 40 50 Q 50 55 60 50";
  const leftArmTransform = animationState === 'correct' ? 'rotate(-135deg)' : 'rotate(20deg)';
  const rightArmTransform = animationState === 'correct' ? 'rotate(135deg)' : 'rotate(-20deg)';

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <style>
        {`
          .bejo-antenna-light {
            animation: ${animationState === 'correct' ? 'glow 0.5s ease-in-out infinite alternate' : 'none'};
          }
          .bejo-arm-left, .bejo-arm-right {
            transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Bouncy transition */
          }
          .bejo-head {
             transform-origin: 50% 60%;
             transition: transform 0.4s ease-in-out;
          }
           .bejo-mouth {
             transition: d 0.4s ease-in-out;
           }
          @keyframes glow {
            from {
              fill: #f6e05e;
              filter: drop-shadow(0 0 2px #f6e05e);
            }
            to {
              fill: #fefcbf;
              filter: drop-shadow(0 0 6px #fefcbf);
            }
          }
        `}
      </style>
      
      {/* Arms */}
      <g style={{ transform: leftArmTransform, transformOrigin: '25px 65px' }} className="bejo-arm-left">
        <rect x="15" y="60" width="10" height="25" rx="5" ry="5" fill="#4299e1" />
      </g>
      <g style={{ transform: rightArmTransform, transformOrigin: '75px 65px' }} className="bejo-arm-right">
        <rect x="75" y="60" width="10" height="25" rx="5" ry="5" fill="#4299e1" />
      </g>
      
      {/* Body */}
      <rect x="20" y="60" width="60" height="30" rx="5" ry="5" fill="#63b3ed" />
      <rect x="35" y="65" width="30" height="20" rx="3" ry="3" fill="#2c5282" />
      <polygon points="50,68 52.5,73 58,73 54,76.5 55.5,82 50,79 44.5,82 46,76.5 42,73 47.5,73" fill="#f6e05e" />

      {/* Head Group for tilting */}
      <g className="bejo-head" style={{ transform: headTilt }}>
        <rect x="25" y="20" width="50" height="40" rx="10" ry="10" fill="#4299e1" />
        <line x1="50" y1="20" x2="50" y2="10" stroke="#63b3ed" strokeWidth="3" />
        <circle cx="50" cy="8" r="4" fill="#f6e05e" className="bejo-antenna-light" />
        <circle cx="40" cy="40" r="7" fill="white" />
        <circle cx="40" cy="40" r="3" fill="black" />
        <circle cx="60" cy="40" r="7" fill="white" />
        <circle cx="60" cy="40" r="3" fill="black" />
        <path d={mouthPath} stroke="white" strokeWidth="2" fill="none" className="bejo-mouth" />
      </g>
      
      {/* Legs */}
      <rect x="30" y="90" width="10" height="10" fill="#4299e1" />
      <rect x="60" y="90" width="10" height="10" fill="#4299e1" />
    </svg>
  );
};

export default BejoMascot;