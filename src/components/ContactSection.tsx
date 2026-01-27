import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "info@yfeey.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+44 123 456 7890",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Isle of Man, UK",
  },
];

const ContactSection = () => {
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
    <section id="contact" className="py-16 md:py-24 bg-black text-[hsl(var(--dark-section-foreground))] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-10 md:mb-12">
            <span className="inline-block px-4 py-1 bg-[hsl(var(--dark-section))]/20 text-white rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-[hsl(var(--dark-section-foreground))]/70 max-w-2xl mx-auto">
              We're excited to hear from you. Let's start something special together.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Contact Info */}
            <AnimatedSection className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/90 backdrop-blur-sm border border-[hsl(var(--dark-section-foreground))]/40">
                  <div className="h-12 w-12 rounded-xl bg-[hsl(var(--dark-section))] flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-black">{item.title}</h4>
                    <p className="text-black text-sm">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={200}>
              <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-2xl bg-[hsl(var(--dark-section-foreground))]/5 backdrop-blur-sm border border-[hsl(var(--dark-section-foreground))]/40">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/90 border-[hsl(var(--dark-section-foreground))]/20 text-black placeholder:text-[hsl(var(--dark-section))]"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/90 border-[hsl(var(--dark-section-foreground))]/20 text-black placeholder:text-[hsl(var(--dark-section))] "
                />
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-white/90 border-[hsl(var(--dark-section-foreground))]/20 text-black placeholder:text-[hsl(var(--dark-section))] resize-none"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[hsl(var(--dark-section))] text-white hover:bg-[hsl(var(--dark-section))]/60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
