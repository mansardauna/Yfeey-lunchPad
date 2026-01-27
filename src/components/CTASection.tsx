import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  showContactForm?: boolean;
}

const CTASection = ({ 
  title = "Have Any Project on Your Mind?", 
  description = "Great! We're excited to hear from you and let's start something special together.",
  buttonText = "Let's Talk",
  buttonLink = "/contact",
  showContactForm = true 
}: CTASectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 md:py-28 bg-[hsl(var(--dark-section))] text-[hsl(var(--dark-section-foreground))]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {title}
              </h2>
              <p className="text-[hsl(var(--dark-section-foreground))]/70 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Right Content - Contact Form */}
            {showContactForm ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-[hsl(var(--dark-section-foreground))]/10 border-[hsl(var(--dark-section-foreground))]/20 text-[hsl(var(--dark-section-foreground))] placeholder:text-[hsl(var(--dark-section-foreground))]/50"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-[hsl(var(--dark-section-foreground))]/10 border-[hsl(var(--dark-section-foreground))]/20 text-[hsl(var(--dark-section-foreground))] placeholder:text-[hsl(var(--dark-section-foreground))]/50"
                />
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-[hsl(var(--dark-section-foreground))]/10 border-[hsl(var(--dark-section-foreground))]/20 text-[hsl(var(--dark-section-foreground))] placeholder:text-[hsl(var(--dark-section-foreground))]/50 resize-none"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-end">
                <Link to={buttonLink}>
                  <Button size="lg" className="group">
                    {buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
