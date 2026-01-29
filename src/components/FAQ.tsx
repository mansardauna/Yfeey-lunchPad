import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { DotsPattern } from "@/components/BackgroundPatterns";

const faqs = [
  {
    question: "What does Yfeey do?",
    answer:
      "Yfeey is a digital agency bridging the gap between current operations and the future of technology. We specialize in Software Development, Digital Transformation, and AI Automation to make your business efficient, scalable, and future-ready.",
  },
  {
    question: "Who do you work with?",
    answer:
      "We partner with startups, businesses, and individuals across various fields.",
  },
  {
    question: "How do you approach new projects?",
    answer:
      "We start with a discovery session to align on your goals, followed by a strategic roadmap with milestone check-ins. We provide full-lifecycle support, from initial design and development through to deployment and post-launch care.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <DotsPattern className="text-[hsl(var(--dark-section))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-10 md:mb-12">
          <span className="inline-block px-4 py-1 bg-[hsl(var(--dark-section))]/10 text-[hsl(var(--dark-section))] rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>
        
        <div className="max-w-3xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
                <div 
                  className={`border border-border rounded-xl overflow-hidden transition-all duration-300 bg-card/80 backdrop-blur-sm ${
                    openIndex === index ? 'border-[hsl(var(--dark-section))]/50 shadow-lg' : 'hover:border-[hsl(var(--dark-section))]/30'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  >
                    <span className="font-medium text-foreground text-base md:text-lg pr-4">
                      {faq.question}
                    </span>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      openIndex === index ? 'bg-[hsl(var(--dark-section))] text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      {openIndex === index ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
