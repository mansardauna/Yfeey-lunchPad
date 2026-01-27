export const GridPattern = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute inset-0 w-full h-full ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="grid-pattern"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="opacity-[0.03]"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
  </svg>
);

export const DotsPattern = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute inset-0 w-full h-full ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="dots-pattern"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="1" fill="currentColor" className="opacity-[0.07]" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots-pattern)" />
  </svg>
);

export const CirclesPattern = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    {/* Top right circle */}
    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
    {/* Bottom left circle */}
    <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
  </div>
);

export const WavePattern = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute bottom-0 left-0 w-full ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
  >
    <path
      fill="currentColor"
      className="opacity-[0.03]"
      d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
    />
  </svg>
);

export const GradientOrb = ({ className = "", position = "top-right" }: { className?: string; position?: string }) => {
  const positionClasses = {
    "top-right": "-top-32 -right-32",
    "top-left": "-top-32 -left-32",
    "bottom-right": "-bottom-32 -right-32",
    "bottom-left": "-bottom-32 -left-32",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div 
      className={`absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-3xl pointer-events-none ${positionClasses[position as keyof typeof positionClasses] || positionClasses["top-right"]} ${className}`}
    />
  );
};
