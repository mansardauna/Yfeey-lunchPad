import { useEffect, useState, useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  {
    value: 2,
    suffix: "",
    label: "Projects Delivered",
    sublabel: "Custom web platforms and automation systems",
  },
  {
    value: 2,
    suffix: "",
    label: "Happy Clients",
    sublabel: "Firms trusting our digital solutions",
  },
  {
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    sublabel: "Based on project delivery and support",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support Available",
    sublabel: "Round-the-clock technical assistance",
  },
];

const useCountUp = (end: number, duration: number = 2000, startCounting: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
};

const StatItem = ({ stat, isVisible }: { stat: (typeof stats)[0]; isVisible: boolean }) => {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div className="text-center p-4 md:p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
        {count}
        {stat.suffix}
      </div>
      <p className="text-sm font-semibold text-foreground mb-1 uppercase tracking-wide">{stat.label}</p>
      <p className="text-xs md:text-sm text-muted-foreground">{stat.sublabel}</p>
    </div>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 md:w-64 md:h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <AnimatedSection animation="fade-in-up" className="text-center mb-10 md:mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A New Approach to Digital Solutions
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We're a passionate team dedicated to delivering impactful digital solutions that drive measurable growth for your business.
          </p>
        </AnimatedSection>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
              <StatItem stat={stat} isVisible={isVisible} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
