import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Youtube, 
  GraduationCap,
  Users,
  Bot,
  Palette
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { GridPattern, GradientOrb } from "@/components/BackgroundPatterns";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    icon: Bot,
    title: "AI-Powered Digital Solutions",
    description: "Leverage cutting-edge AI to automate content creation, lead generation, and customer service. Build custom chatbots, streamline workflows, and implement intelligent automation to transform your business operations.",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Full websites, mobile apps, and AI-integrated platforms from MVPs to enterprise-scale systems.",
  },
  {
    icon: Youtube,
    title: "YouTube & Social Content Automation",
    description: "AI-generated videos, faceless YouTube channels, automated social media, and content built for organic growth, lead generation, and paid advertising.",
  },
  {
    icon: Users,
    title: "Tech Team Building & Staff Augmentation",
    description: "Top-tier developers, designers, and technical specialists to augment your team and accelerate project delivery with seamless integration.",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Professional logo design, brand guidelines, and marketing materials to build a cohesive visual identity system for your business.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Training programs, executive development, and AI workshops designed to bridge the skill gap and empower your team.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => (
  <Card className="group bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
    <CardContent className="p-5 md:p-6">
      {/* Icon */}
      <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <service.icon className="h-6 w-6 md:h-7 md:w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      
      {/* Title */}
      <h3 className="font-semibold text-foreground text-base md:text-lg mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {service.description}
      </p>
    </CardContent>
  </Card>
);

const ServicesPreview = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <GridPattern className="text-foreground" />
      <GradientOrb position="top-right" />
      <GradientOrb position="bottom-left" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Services
            </h2>
          </div>
        </AnimatedSection>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 basis-[85%]">
                  <ServiceCard service={service} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2" />
            <CarouselNext className="right-0 translate-x-1/2" />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
              <ServiceCard service={service} index={index} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
