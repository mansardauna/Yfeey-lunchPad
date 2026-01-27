const HeroSVG = () => {
  return (
    <svg
      viewBox="0 0 400 500"
      className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>
        {`
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          @keyframes pulse-core {
            0%, 100% { opacity: 0.9; r: 15; }
            50% { opacity: 1; r: 18; }
          }
          @keyframes ray-pulse {
            0%, 100% { opacity: 0.3; stroke-width: 2; }
            50% { opacity: 0.7; stroke-width: 3; }
          }
          @keyframes circuit-pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
          }
          @keyframes filament-glow {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
          .pulse-core { animation: pulse-core 1.5s ease-in-out infinite; }
          .ray-pulse { animation: ray-pulse 2s ease-in-out infinite; }
          .circuit-pulse { animation: circuit-pulse 3s ease-in-out infinite; }
          .filament-glow { animation: filament-glow 1.5s ease-in-out infinite; }
        `}
      </style>
      
      {/* Outer glow ring */}
      <ellipse
        cx="200"
        cy="180"
        rx="140"
        ry="160"
        fill="url(#outerGlow)"
        opacity="0.3"
        className="pulse-glow"
      />
      
      {/* Lightbulb glass */}
      <ellipse
        cx="200"
        cy="180"
        rx="120"
        ry="140"
        fill="url(#glassGradient)"
        opacity="0.9"
      />
      <ellipse
        cx="200"
        cy="180"
        rx="100"
        ry="120"
        fill="url(#innerGlow)"
        opacity="0.6"
        className="pulse-glow"
      />
      
      {/* Filament glow */}
      <ellipse
        cx="200"
        cy="180"
        rx="40"
        ry="50"
        fill="url(#filamentGlow)"
        opacity="0.8"
        className="pulse-glow"
      />
      
      {/* Filament structure */}
      <path
        d="M180 140 Q170 180 180 220 M220 140 Q230 180 220 220"
        stroke="hsl(45, 100%, 70%)"
        strokeWidth="3"
        fill="none"
        className="filament-glow"
      />
      <path
        d="M185 150 Q175 180 185 210 M215 150 Q225 180 215 210"
        stroke="hsl(45, 100%, 80%)"
        strokeWidth="2"
        fill="none"
        className="filament-glow"
      />
      
      {/* Central bright spot */}
      <circle cx="200" cy="180" r="15" fill="hsl(45, 100%, 95%)" className="pulse-core" />
      <circle cx="200" cy="180" r="8" fill="white" opacity="1" />
      
      {/* Glass reflections */}
      <ellipse
        cx="160"
        cy="130"
        rx="25"
        ry="40"
        fill="white"
        opacity="0.15"
        transform="rotate(-20, 160, 130)"
      />
      <ellipse
        cx="240"
        cy="140"
        rx="15"
        ry="25"
        fill="white"
        opacity="0.1"
        transform="rotate(20, 240, 140)"
      />
      
      {/* Bulb neck */}
      <path
        d="M160 290 L160 320 Q160 340 180 340 L220 340 Q240 340 240 320 L240 290"
        fill="url(#neckGradient)"
        stroke="hsl(0, 0%, 60%)"
        strokeWidth="1"
      />
      
      {/* Screw base */}
      <rect x="170" y="340" width="60" height="15" rx="2" fill="hsl(35, 30%, 35%)" />
      <rect x="168" y="355" width="64" height="12" rx="2" fill="hsl(35, 25%, 30%)" />
      <rect x="172" y="367" width="56" height="12" rx="2" fill="hsl(35, 30%, 35%)" />
      <rect x="168" y="379" width="64" height="12" rx="2" fill="hsl(35, 25%, 30%)" />
      <rect x="172" y="391" width="56" height="12" rx="2" fill="hsl(35, 30%, 35%)" />
      <ellipse cx="200" cy="408" rx="28" ry="8" fill="hsl(35, 20%, 25%)" />
      
      {/* Screw threads detail */}
      <line x1="168" y1="360" x2="232" y2="360" stroke="hsl(35, 20%, 25%)" strokeWidth="1" opacity="0.5" />
      <line x1="172" y1="372" x2="228" y2="372" stroke="hsl(35, 20%, 40%)" strokeWidth="1" opacity="0.5" />
      <line x1="168" y1="384" x2="232" y2="384" stroke="hsl(35, 20%, 25%)" strokeWidth="1" opacity="0.5" />
      <line x1="172" y1="396" x2="228" y2="396" stroke="hsl(35, 20%, 40%)" strokeWidth="1" opacity="0.5" />
      
      {/* Circuit/tech elements around bulb */}
      <g className="circuit-pulse">
        {/* Left circuit lines */}
        <path d="M60 150 L100 150 L100 180 L80 180" stroke="hsl(270, 50%, 80%)" strokeWidth="2" fill="none" />
        <circle cx="60" cy="150" r="4" fill="hsl(270, 50%, 80%)" />
        <circle cx="80" cy="180" r="3" fill="hsl(270, 50%, 80%)" />
        
        <path d="M50 220 L90 220 L90 250" stroke="hsl(270, 50%, 80%)" strokeWidth="2" fill="none" />
        <circle cx="50" cy="220" r="4" fill="hsl(270, 50%, 80%)" />
        <rect x="85" y="250" width="10" height="10" rx="2" fill="hsl(270, 50%, 80%)" />
        
        {/* Right circuit lines */}
        <path d="M340 150 L300 150 L300 180 L320 180" stroke="hsl(270, 50%, 80%)" strokeWidth="2" fill="none" />
        <circle cx="340" cy="150" r="4" fill="hsl(270, 50%, 80%)" />
        <circle cx="320" cy="180" r="3" fill="hsl(270, 50%, 80%)" />
        
        <path d="M350 220 L310 220 L310 250" stroke="hsl(270, 50%, 80%)" strokeWidth="2" fill="none" />
        <circle cx="350" cy="220" r="4" fill="hsl(270, 50%, 80%)" />
        <rect x="305" y="250" width="10" height="10" rx="2" fill="hsl(270, 50%, 80%)" />
        
        {/* Top elements */}
        <path d="M150 50 L150 80 L170 80" stroke="hsl(270, 50%, 80%)" strokeWidth="2" fill="none" />
        <circle cx="150" cy="50" r="4" fill="hsl(270, 50%, 80%)" />
        
        <path d="M250 50 L250 80 L230 80" stroke="hsl(270, 50%, 80%)" strokeWidth="2" fill="none" />
        <circle cx="250" cy="50" r="4" fill="hsl(270, 50%, 80%)" />
        
        {/* Floating dots */}
        <circle cx="70" cy="280" r="3" fill="hsl(270, 50%, 80%)" />
        <circle cx="330" cy="280" r="3" fill="hsl(270, 50%, 80%)" />
        <circle cx="120" cy="60" r="2" fill="hsl(270, 50%, 80%)" />
        <circle cx="280" cy="60" r="2" fill="hsl(270, 50%, 80%)" />
      </g>
      
      {/* Gear elements */}
      <g opacity="0.5" className="circuit-pulse">
        <circle cx="55" cy="320" r="20" stroke="hsl(270, 40%, 70%)" strokeWidth="2" fill="none" />
        <circle cx="55" cy="320" r="8" fill="hsl(270, 40%, 70%)" />
        
        <circle cx="345" cy="320" r="25" stroke="hsl(270, 40%, 70%)" strokeWidth="2" fill="none" />
        <circle cx="345" cy="320" r="10" fill="hsl(270, 40%, 70%)" />
      </g>
      
      {/* Light rays - animated */}
      <g className="ray-pulse">
        <line x1="200" y1="20" x2="200" y2="45" stroke="hsl(45, 100%, 80%)" strokeWidth="3" strokeLinecap="round" />
        <line x1="290" y1="70" x2="310" y2="50" stroke="hsl(45, 100%, 80%)" strokeWidth="3" strokeLinecap="round" />
        <line x1="110" y1="70" x2="90" y2="50" stroke="hsl(45, 100%, 80%)" strokeWidth="3" strokeLinecap="round" />
        <line x1="330" y1="180" x2="355" y2="180" stroke="hsl(45, 100%, 80%)" strokeWidth="3" strokeLinecap="round" />
        <line x1="70" y1="180" x2="45" y2="180" stroke="hsl(45, 100%, 80%)" strokeWidth="3" strokeLinecap="round" />
        <line x1="270" y1="60" x2="285" y2="45" stroke="hsl(45, 100%, 80%)" strokeWidth="2" strokeLinecap="round" />
        <line x1="130" y1="60" x2="115" y2="45" stroke="hsl(45, 100%, 80%)" strokeWidth="2" strokeLinecap="round" />
      </g>
      
      <defs>
        <radialGradient id="outerGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="hsl(45, 100%, 90%)" />
          <stop offset="100%" stopColor="hsl(45, 100%, 70%)" stopOpacity="0" />
        </radialGradient>
        
        <radialGradient id="glassGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="hsl(200, 30%, 95%)" />
          <stop offset="50%" stopColor="hsl(200, 20%, 85%)" />
          <stop offset="100%" stopColor="hsl(200, 15%, 75%)" />
        </radialGradient>
        
        <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(45, 100%, 90%)" />
          <stop offset="100%" stopColor="hsl(45, 80%, 70%)" stopOpacity="0" />
        </radialGradient>
        
        <radialGradient id="filamentGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(45, 100%, 95%)" />
          <stop offset="50%" stopColor="hsl(45, 100%, 80%)" />
          <stop offset="100%" stopColor="hsl(45, 100%, 60%)" stopOpacity="0" />
        </radialGradient>
        
        <linearGradient id="neckGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(200, 10%, 80%)" />
          <stop offset="100%" stopColor="hsl(200, 10%, 60%)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HeroSVG;
