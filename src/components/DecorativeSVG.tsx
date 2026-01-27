const DecorativeSVG = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Wavy line pattern */}
      <path
        d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        className="opacity-60"
      />
      {/* Dots */}
      <circle cx="0" cy="10" r="3" fill="currentColor" className="opacity-80" />
      <circle cx="50" cy="10" r="2" fill="currentColor" className="opacity-60" />
      <circle cx="100" cy="10" r="3" fill="currentColor" className="opacity-80" />
      <circle cx="150" cy="10" r="2" fill="currentColor" className="opacity-60" />
      <circle cx="200" cy="10" r="3" fill="currentColor" className="opacity-80" />
    </svg>
  );
};

export default DecorativeSVG;
