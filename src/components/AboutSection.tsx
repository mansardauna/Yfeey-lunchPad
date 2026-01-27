import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { CirclesPattern, DotsPattern } from "@/components/BackgroundPatterns";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <CirclesPattern />
      <DotsPattern className="text-[hsl(var(--dark-section))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-[hsl(var(--dark-section))]/10 text-[hsl(var(--dark-section))] rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who We Are
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Yfeey Global Concept is a software development and AI-powered digital services company 
            based in the Isle of Man. We help startups, entrepreneurs, and small businesses become 
            more efficient and profitable through smart automation, content systems, and AI tools.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection>
            <Card className="h-full bg-card/80 backdrop-blur-sm border-border hover:border-[hsl(var(--dark-section))]/50 transition-colors shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="h-12 w-12 rounded-xl bg-[hsl(var(--dark-section))]/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-[hsl(var(--dark-section))]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  To empower startups, entrepreneurs, and small businesses with cutting-edge AI 
                  technologies and smart automation solutions that drive efficiency, profitability, 
                  and sustainable growth.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <Card className="h-full bg-card/80 backdrop-blur-sm border-border hover:border-[hsl(var(--dark-section))]/50 transition-colors shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="h-12 w-12 rounded-xl bg-[hsl(var(--dark-section))]/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-[hsl(var(--dark-section))]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  To become the world's most trusted AI-powered digital services partner for small 
                  businesses and entrepreneurs, enabling them to compete with industry giants.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
