import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "ValleyNest Global Resources",
    role: "UK-based Consulting Firm",
    content:
      "Yfeey delivered a professional website that perfectly represents our brand. Their attention to detail and understanding of our business needs was exceptional. The site has significantly improved our online presence.",
    avatar: "VN",
  },
  {
    name: "Slessor Healthcare",
    role: "Healthcare Provider, UK",
    content:
      "The team at Yfeey built us a robust platform that streamlined our patient communication. Their automation solutions have saved us countless hours of manual work.",
    avatar: "SH",
  },
  {
    name: "Tech Startup Founder",
    role: "Lagos, Nigeria",
    content:
      "Working with Yfeey was the best decision for our digital transformation. They understood our vision and delivered a custom CRM solution that perfectly fits our workflow.",
    avatar: "TS",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What our clients<br />
            say about us
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="relative max-w-4xl">
          {/* Large Quote Mark */}
          <div className="absolute -top-4 right-0 text-primary/20">
            <Quote className="h-32 w-32" strokeWidth={1} />
          </div>

          <div className="relative z-10">
            {/* Quote Text */}
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              " {currentTestimonial.content} "
            </blockquote>

            {/* Author & Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {currentTestimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-2">
                <button 
                  onClick={prevSlide}
                  className="h-12 w-12 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-foreground" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="h-12 w-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
