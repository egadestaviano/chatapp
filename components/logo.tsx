import React from "react";

export function Logo({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Neon Glow Filter */}
        <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* Subtle drop shadow for depth between bubbles */}
        <filter id="bubbleShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.6" />
        </filter>

        <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>

      {/* Dark Base with smoother border radius */}
      <rect x="2" y="2" width="96" height="96" rx="24" fill="#09090b" />
      
      {/* Background Frame */}
      <rect x="2" y="2" width="96" height="96" rx="24" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.2" />

      {/* Bubble 1: Incoming (White Outline) - Smoother */}
      <g filter="url(#bubbleShadow)">
        <path
          d="M30 25 C24.5 25 20 29.5 20 35 V45 C20 48.5 21.8 51.5 24.5 53.2 L18 62 L28 55 C28.6 55 29.3 55 30 55 H55 C60.5 55 65 50.5 65 45 V35 C65 29.5 60.5 25 55 25 Z"
          stroke="#fafafa"
          strokeWidth="2.5"
          strokeLinejoin="round"
          fill="#09090b"
        />
        {/* Content lines */}
        <rect x="28" y="34" width="26" height="2.5" rx="1.25" fill="#fafafa" fillOpacity="0.4" />
        <rect x="28" y="42" width="18" height="2.5" rx="1.25" fill="#fafafa" fillOpacity="0.4" />
      </g>

      {/* Bubble 2: Outgoing (Green Solid) - Smoother */}
      <g filter="url(#neonGlow)">
        <path
          d="M45 45 C39.5 45 35 49.5 35 55 V65 C35 70.5 39.5 75 45 75 H72 L82 82 L75.5 73.2 C78.2 71.5 80 68.5 80 65 V55 C80 49.5 75.5 45 70 45 Z"
          fill="url(#neonGradient)"
        />
        {/* Content lines (Negative space) */}
        <rect x="43" y="54" width="26" height="2.5" rx="1.25" fill="#09090b" fillOpacity="0.8" />
        <rect x="43" y="62" width="18" height="2.5" rx="1.25" fill="#09090b" fillOpacity="0.8" />
      </g>
      
      {/* Decorative Tech Corners - Smoother and smaller */}
      <path d="M12 24 V12 H24" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
      <path d="M88 76 V88 H76" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
    </svg>
  );
}
