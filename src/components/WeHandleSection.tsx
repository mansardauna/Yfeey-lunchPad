const capabilities = [
  "Development",
  "Automation",
  "Scalability",
  "AI Integration",
  "Custom Solutions",
  "Consulting",
  "SEO",
  "Maintenance",
];

const techStack = [
  "Mobile",
  "Software",
  "Frontend",
  "Backend",
  "Cloud",
  "AI",
  "Security",
  "Maintenance",
];

const WeHandleSection = () => {
  return (
    <section className="overflow-hidden">
      {/* Dark row - scrolling right */}
      <div className="bg-[hsl(var(--dark-section))] py-5">
        <div className="flex animate-scroll">
          {[...capabilities, ...capabilities, ...capabilities, ...capabilities].map((item, index) => (
            <div key={index} className="flex items-center gap-6 px-6 whitespace-nowrap">
              <span className="text-lg font-medium text-[hsl(var(--dark-section-foreground))]">{item}</span>
              <span className="text-[hsl(var(--dark-section-foreground))]/30">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Light row - scrolling left */}
      <div className="bg-muted py-5">
        <div className="flex animate-scroll-reverse">
          {[...techStack, ...techStack, ...techStack, ...techStack].map((item, index) => (
            <div key={index} className="flex items-center gap-6 px-6 whitespace-nowrap">
              <span className="text-lg font-medium text-foreground">{item}</span>
              <span className="text-foreground/30">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeHandleSection;
