'use client';

import React from 'react';

interface ButterflyProps {
  delay: number;
  duration: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: number;
  color: string;
}

const Butterfly: React.FC<ButterflyProps> = ({
  delay,
  duration,
  startX,
  startY,
  endX,
  endY,
  size,
  color
}) => {
  return (
    <div
      className="absolute pointer-events-none z-10"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        animation: `fly ${duration}s ease-in-out ${delay}s infinite`,
        animationDirection: 'alternate',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="opacity-70"
      >
        {/* Butterfly body */}
        <ellipse
          cx="50"
          cy="50"
          rx="3"
          ry="20"
          fill="#8B4513"
          transform="rotate(45 50 50)"
        />
        
        {/* Upper wings */}
        <ellipse
          cx="35"
          cy="35"
          rx="15"
          ry="25"
          fill={color}
          opacity="0.8"
          transform="rotate(-20 35 35)"
        />
        <ellipse
          cx="65"
          cy="35"
          rx="15"
          ry="25"
          fill={color}
          opacity="0.8"
          transform="rotate(20 65 35)"
        />
        
        {/* Lower wings */}
        <ellipse
          cx="30"
          cy="65"
          rx="12"
          ry="20"
          fill={color}
          opacity="0.6"
          transform="rotate(-10 30 65)"
        />
        <ellipse
          cx="70"
          cy="65"
          rx="12"
          ry="20"
          fill={color}
          opacity="0.6"
          transform="rotate(10 70 65)"
        />
        
        {/* Wing patterns */}
        <circle cx="40" cy="30" r="3" fill="#FFD700" opacity="0.7" />
        <circle cx="60" cy="30" r="3" fill="#FFD700" opacity="0.7" />
        <circle cx="35" cy="60" r="2" fill="#FFD700" opacity="0.5" />
        <circle cx="65" cy="60" r="2" fill="#FFD700" opacity="0.5" />
      </svg>
    </div>
  );
};

const ButterflyAnimation: React.FC = () => {
  const butterflies = [
    {
      delay: 0,
      duration: 8,
      startX: 10,
      startY: 20,
      endX: 90,
      endY: 30,
      size: 30,
      color: '#8B0000' // Burgundy
    },
    {
      delay: 2,
      duration: 10,
      startX: 85,
      startY: 15,
      endX: 15,
      endY: 25,
      size: 25,
      color: '#DAA520' // Gold
    },
    {
      delay: 4,
      duration: 12,
      startX: 5,
      startY: 70,
      endX: 95,
      endY: 80,
      size: 35,
      color: '#8B0000' // Burgundy
    },
    {
      delay: 1,
      duration: 9,
      startX: 90,
      startY: 75,
      endX: 10,
      endY: 85,
      size: 28,
      color: '#DAA520' // Gold
    },
    {
      delay: 3,
      duration: 11,
      startX: 20,
      startY: 40,
      endX: 80,
      endY: 50,
      size: 32,
      color: '#8B0000' // Burgundy
    },
    {
      delay: 5,
      duration: 7,
      startX: 75,
      startY: 45,
      endX: 25,
      endY: 55,
      size: 26,
      color: '#DAA520' // Gold
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {butterflies.map((butterfly, index) => (
        <Butterfly
          key={index}
          delay={butterfly.delay}
          duration={butterfly.duration}
          startX={butterfly.startX}
          startY={butterfly.startY}
          endX={butterfly.endX}
          endY={butterfly.endY}
          size={butterfly.size}
          color={butterfly.color}
        />
      ))}
      
      <style jsx>{`
        @keyframes fly {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20%, -10%) rotate(5deg);
          }
          50% {
            transform: translate(40%, 5%) rotate(-3deg);
          }
          75% {
            transform: translate(60%, -8%) rotate(4deg);
          }
          100% {
            transform: translate(80%, 0%) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ButterflyAnimation;
