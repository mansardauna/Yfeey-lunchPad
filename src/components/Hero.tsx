import HeroSVG from "@/components/HeroSVG";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-black text-[hsl(var(--dark-section))] pt-24 pb-16 md:pt-32 md:pb-24 min-h-[80vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Hero Text - Centered on mobile, left-aligned on desktop */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in">
              We Love a Good Challenge.
            </h1>
            <p className="text-xl md:text-2xl text-[hsl(var(--dark-section-foreground))]/90 mb-6 font-medium animate-fade-in" style={{ animationDelay: '100ms' }}>
              Transforming Ideas into Scalable Systems
            </p>
            <p className="text-base md:text-lg text-[hsl(var(--dark-section-foreground))]/70 leading-relaxed max-w-xl mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
             Yfeey empowers startups, businesses, and individuals to maximize efficiency and impact through people, technology, AI, and smart automation.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="text-base px-8 py-6 animate-fade-in bg-[hsl(var(--dark-section))] text-white hover:bg-white/90"
              style={{ animationDelay: '300ms' }}
            >
              Get Started
            </Button>
          </div>

          {/* Hero SVG - Right */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '200ms' }}>
            <img src="/hero.jpeg" alt="Hero Illustration" className="w-[100%] max-w-lg lg:max-w-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
