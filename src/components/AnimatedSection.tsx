import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up" | "scale-in" | "slide-in-right";
  delay?: number;
}

const AnimatedSection = ({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animationClasses = {
    "fade-in": "opacity-0 transition-opacity duration-700",
    "fade-in-up": "opacity-0 translate-y-8 transition-all duration-700",
    "scale-in": "opacity-0 scale-95 transition-all duration-500",
    "slide-in-right": "opacity-0 translate-x-8 transition-all duration-700",
  };

  const visibleClasses = {
    "fade-in": "opacity-100",
    "fade-in-up": "opacity-100 translate-y-0",
    "scale-in": "opacity-100 scale-100",
    "slide-in-right": "opacity-100 translate-x-0",
  };

  return (
    <div
      ref={ref}
      className={cn(
        animationClasses[animation],
        isVisible && visibleClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
