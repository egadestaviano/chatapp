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
          <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.8" />
        </filter>

        <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FF41" />
          <stop offset="100%" stopColor="#2ECC71" />
        </linearGradient>
      </defs>

      {/* Dark Base */}
      <rect x="5" y="5" width="90" height="90" rx="4" fill="#0A0A0A" />
      
      {/* Background Frame (Thin Primary Line) */}
      <rect x="5" y="5" width="90" height="90" rx="4" stroke="#00FF41" strokeWidth="0.5" strokeOpacity="0.3" />

      {/* Bubble 1: Incoming (White Outline) - Positioned Left-Top */}
      <g filter="url(#bubbleShadow)">
        <path
          d="M20 25H65V55H32L20 67V25Z"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinejoin="miter"
          fill="#0A0A0A"
        />
        {/* Content lines */}
        <rect x="28" y="34" width="28" height="2.5" fill="#FFFFFF" fillOpacity="0.3" />
        <rect x="28" y="42" width="22" height="2.5" fill="#FFFFFF" fillOpacity="0.3" />
      </g>

      {/* Bubble 2: Outgoing (Green Solid) - Positioned Right-Bottom */}
      <g filter="url(#neonGlow)">
        <path
          d="M35 45H80V75L68 87V75H35V45Z"
          fill="url(#neonGradient)"
        />
        {/* Content lines (Negative space) */}
        <rect x="43" y="54" width="28" height="3" fill="#0A0A0A" />
        <rect x="43" y="64" width="18" height="3" fill="#0A0A0A" />
      </g>
      
      {/* Decorative Tech Corners */}
      <path d="M10 10V20M10 10H20" stroke="#00FF41" strokeWidth="1.5" strokeLinecap="square" />
      <path d="M90 90V80M90 90H80" stroke="#00FF41" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}
