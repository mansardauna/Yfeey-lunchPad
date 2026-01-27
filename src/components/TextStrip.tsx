const TextStrip = () => {
  const words = ["Build", "Grow", "Scale", "Innovate", "Transform", "Automate"];
  
  return (
    <section className="bg-background py-6 overflow-hidden border-y border-border">
      <div className="relative flex">
        {/* First scroll group */}
        <div className="animate-scroll flex items-center gap-8 whitespace-nowrap">
          {words.map((word, index) => (
            <div key={`first-${index}`} className="flex items-center gap-8">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                {word}
              </span>
              <span className="text-[hsl(var(--dark-section))] text-2xl md:text-3xl">✦</span>
            </div>
          ))}
        </div>
        
        {/* Duplicate for seamless loop */}
        <div className="animate-scroll flex items-center gap-8 whitespace-nowrap" aria-hidden="true">
          {words.map((word, index) => (
            <div key={`second-${index}`} className="flex items-center gap-8">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                {word}
              </span>
              <span className="text-[hsl(var(--dark-section))] text-2xl md:text-3xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextStrip;
