import React from 'react';

// Rock Icon (looks like 🪨)
export const RockIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 45L18 25L32 20L48 28L54 42L45 52L25 54L10 45Z" fill="#8B7355"/>
    <path d="M18 25L32 20L48 28L54 42L50 48L35 50L20 48L18 25Z" fill="#A0826D"/>
    <ellipse cx="28" cy="35" rx="3" ry="2" fill="#6B5A4D" opacity="0.3"/>
    <ellipse cx="40" cy="38" rx="2" ry="1.5" fill="#6B5A4D" opacity="0.3"/>
    <path d="M22 30L28 32L30 28" stroke="#6B5A4D" strokeWidth="1.5" opacity="0.4"/>
    <circle cx="24" cy="40" r="1" fill="#5A4A3D"/>
    <circle cx="38" cy="32" r="1.5" fill="#5A4A3D"/>
  </svg>
);

// Mine/Bomb Icon (looks like 💣)
export const MineIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Fuse */}
    <path d="M38 8L42 4L44 6L40 10" stroke="#8B4513" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="43" cy="5" r="2" fill="#FF6B35"/>
    <circle cx="43" cy="5" r="1.5" fill="#FFD700" opacity="0.8"/>
    
    {/* Bomb body */}
    <circle cx="32" cy="38" r="18" fill="#2C2C2C"/>
    <circle cx="32" cy="38" r="18" fill="url(#bombGradient)"/>
    
    {/* Shine effect */}
    <ellipse cx="26" cy="30" rx="6" ry="8" fill="#4A4A4A" opacity="0.6"/>
    <ellipse cx="24" cy="28" rx="3" ry="4" fill="#FFFFFF" opacity="0.3"/>
    
    {/* Spikes */}
    <circle cx="32" cy="20" r="2" fill="#2C2C2C"/>
    <circle cx="32" cy="56" r="2" fill="#2C2C2C"/>
    <circle cx="14" cy="38" r="2" fill="#2C2C2C"/>
    <circle cx="50" cy="38" r="2" fill="#2C2C2C"/>
    <circle cx="20" cy="26" r="1.5" fill="#2C2C2C"/>
    <circle cx="44" cy="26" r="1.5" fill="#2C2C2C"/>
    <circle cx="20" cy="50" r="1.5" fill="#2C2C2C"/>
    <circle cx="44" cy="50" r="1.5" fill="#2C2C2C"/>
    
    <defs>
      <radialGradient id="bombGradient" cx="0.3" cy="0.3" r="1">
        <stop offset="0%" stopColor="#3A3A3A"/>
        <stop offset="100%" stopColor="#1A1A1A"/>
      </radialGradient>
    </defs>
  </svg>
);

// Target/Bullseye Icon (looks like 🎯)
export const TargetIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2"/>
    <circle cx="32" cy="32" r="24" fill="#E74C3C"/>
    <circle cx="32" cy="32" r="18" fill="#FFFFFF"/>
    <circle cx="32" cy="32" r="12" fill="#E74C3C"/>
    <circle cx="32" cy="32" r="6" fill="#C0392B"/>
    <circle cx="32" cy="32" r="3" fill="#FFEB3B"/>
  </svg>
);

// Chart/Stats Icon (looks like 📊)
export const ChartIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="48" height="48" rx="4" fill="#4A90E2" opacity="0.2"/>
    <rect x="8" y="8" width="48" height="48" rx="4" stroke="#4A90E2" strokeWidth="2"/>
    
    {/* Bars */}
    <rect x="14" y="38" width="8" height="14" rx="2" fill="#E74C3C"/>
    <rect x="26" y="28" width="8" height="24" rx="2" fill="#3498DB"/>
    <rect x="38" y="20" width="8" height="32" rx="2" fill="#2ECC71"/>
    
    {/* Grid lines */}
    <line x1="12" y1="24" x2="52" y2="24" stroke="#BDC3C7" strokeWidth="1" opacity="0.3"/>
    <line x1="12" y1="36" x2="52" y2="36" stroke="#BDC3C7" strokeWidth="1" opacity="0.3"/>
    <line x1="12" y1="48" x2="52" y2="48" stroke="#BDC3C7" strokeWidth="1" opacity="0.3"/>
  </svg>
);

// Trophy Icon (looks like 🏆)
export const TrophyIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Base */}
    <rect x="20" y="52" width="24" height="6" rx="2" fill="#B8860B"/>
    <rect x="28" y="46" width="8" height="6" fill="#DAA520"/>
    
    {/* Cup body */}
    <path d="M18 12C18 12 16 32 32 36C48 32 46 12 46 12H18Z" fill="url(#trophyGradient)"/>
    
    {/* Handles */}
    <path d="M16 14C12 14 10 16 10 20C10 24 12 26 16 26" stroke="#DAA520" strokeWidth="3" fill="none"/>
    <path d="M48 14C52 14 54 16 54 20C54 24 52 26 48 26" stroke="#DAA520" strokeWidth="3" fill="none"/>
    
    {/* Rim */}
    <ellipse cx="32" cy="12" rx="14" ry="3" fill="#FFD700"/>
    
    {/* Shine */}
    <ellipse cx="26" cy="18" rx="4" ry="8" fill="#FFFFFF" opacity="0.4"/>
    
    <defs>
      <linearGradient id="trophyGradient" x1="32" y1="12" x2="32" y2="36">
        <stop offset="0%" stopColor="#FFD700"/>
        <stop offset="100%" stopColor="#DAA520"/>
      </linearGradient>
    </defs>
  </svg>
);

// Lightning/Zap Icon (looks like ⚡)
export const LightningIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 4L20 32H32L26 60L48 28H36L38 4Z" fill="url(#lightningGradient)" stroke="#F39C12" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M38 4L20 32H32L26 60L48 28H36L38 4Z" fill="#FFFFFF" opacity="0.3"/>
    
    <defs>
      <linearGradient id="lightningGradient" x1="32" y1="4" x2="32" y2="60">
        <stop offset="0%" stopColor="#FFF176"/>
        <stop offset="100%" stopColor="#FFD54F"/>
      </linearGradient>
    </defs>
  </svg>
);

// Sparkle Icon (looks like ✨)
export const SparkleIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main star */}
    <path d="M32 8L36 24L52 28L36 32L32 48L28 32L12 28L28 24L32 8Z" fill="url(#sparkleGradient)"/>
    
    {/* Small stars */}
    <path d="M48 12L50 16L54 18L50 20L48 24L46 20L42 18L46 16L48 12Z" fill="#FFD700"/>
    <path d="M16 40L18 44L22 46L18 48L16 52L14 48L10 46L14 44L16 40Z" fill="#FFD700"/>
    
    {/* Glow effect */}
    <circle cx="32" cy="28" r="12" fill="#FFEB3B" opacity="0.3"/>
    
    <defs>
      <radialGradient id="sparkleGradient" cx="32" cy="28" r="20">
        <stop offset="0%" stopColor="#FFFFFF"/>
        <stop offset="50%" stopColor="#FFD700"/>
        <stop offset="100%" stopColor="#FFA000"/>
      </radialGradient>
    </defs>
  </svg>
);
