import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  MessageSquare,
  Settings,
  Building2,
  Code,
  Zap,
  Plus,
} from "lucide-react";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    category: "development",
    description:
      "Professional, responsive websites tailored to your brand identity and business goals. From landing pages to complex web applications.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Performance",
      "Custom CMS",
    ],
  },
  {
    icon: MessageSquare,
    title: "Messaging Automation",
    category: "automation",
    description:
      "Automate your customer communications with intelligent messaging systems that work 24/7 to engage and convert leads.",
    features: [
      "WhatsApp Automation",
      "Email Sequences",
      "Chatbot Integration",
      "Lead Nurturing",
    ],
  },
  {
    icon: Settings,
    title: "CRM & Workflow Automation",
    category: "automation",
    description:
      "Streamline your business operations with custom CRM solutions and automated workflows that eliminate manual friction.",
    features: [
      "Custom CRM Systems",
      "Task Automation",
      "Pipeline Management",
      "Integration Setup",
    ],
  },
  {
    icon: Building2,
    title: "Custom Corporate Solutions",
    category: "development",
    description:
      "Enterprise-grade software solutions designed specifically for your organization's unique requirements and processes.",
    features: [
      "ERP Systems",
      "Internal Tools",
      "Data Management",
      "Custom Portals",
    ],
  },
  {
    icon: Code,
    title: "AI Integration",
    category: "development",
    description:
      "Leverage the power of artificial intelligence to enhance your business processes and customer experiences.",
    features: [
      "AI Chatbots",
      "Process Automation",
      "Data Analysis",
      "Smart Recommendations",
    ],
  },
  {
    icon: Zap,
    title: "Maintenance & Support",
    category: "support",
    description:
      "Ongoing maintenance, updates, and technical support to keep your digital assets running smoothly.",
    features: [
      "24/7 Monitoring",
      "Regular Updates",
      "Security Patches",
      "Performance Optimization",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pb-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <p className="text-sm text-muted-foreground mb-2">Home → Services</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Services
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-8 bg-[hsl(var(--dark-section))]" />
                <span className="text-sm text-[hsl(var(--dark-section))] font-medium">DIGITAL SOLUTIONS</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                <span className="text-[hsl(var(--dark-section))]">Tailored solutions</span> that simplify complex operations and drive measurable growth.
              </h2>
            </div>
            
            {/* Right Content */}
            <div className="lg:w-1/2">
              <h3 className="font-semibold text-foreground mb-4">Our Approach</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At YGCL, we don't believe in one-size-fits-all solutions. Every business is 
                unique, and your digital presence should reflect that. We work closely with 
                you to understand your specific needs and create solutions that truly work 
                for your business.
              </p>
              <div>
                <h4 className="font-semibold text-foreground mb-3">What We Handle</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["Development", "Automation", "AI Integration", "Scalability", "SEO", "Maintenance"].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Plus className="h-4 w-4 text-[hsl(var(--dark-section))]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Images Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img src={caseStudy1} alt="Our work" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img src={caseStudy2} alt="Our work" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Work Process Content */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-[hsl(var(--dark-section))]" />
              <span className="text-sm text-[hsl(var(--dark-section))] font-medium uppercase tracking-wide">Our Process</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              How we <span className="text-[hsl(var(--dark-section))]">transform your ideas</span> into powerful digital solutions.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We follow a proven methodology that ensures every project is delivered on time,
              within budget, and exceeds expectations. From discovery to deployment, we keep
              you involved at every step.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { number: "1", title: "Discovery", description: "We start by understanding your business, goals, and challenges through in-depth consultation sessions." },
              { number: "2", title: "Design & Build", description: "Our team designs and develops your solution, keeping you updated with regular progress reports." },
              { number: "3", title: "Launch & Support", description: "We deploy your solution and provide ongoing support to ensure continued success." },
            ].map((step, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-lg bg-[hsl(var(--dark-section))] text-[hsl(var(--dark-section))]-foreground flex items-center justify-center font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to transform your business.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card
                  className="group bg-card border-border hover:border-[hsl(var(--dark-section))]/50 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <CardContent className="p-6">
                    <span className="text-xs font-medium uppercase tracking-wider text-[hsl(var(--dark-section))] mb-2 inline-block">
                      {service.category}
                    </span>
                    <div className="h-12 w-12 rounded-xl bg-[hsl(var(--dark-section))]/10 flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--dark-section))] transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-[hsl(var(--dark-section))] group-hover:text-[hsl(var(--dark-section))]-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--dark-section))]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to work with us?"
        description="Let's discuss how our digital solutions can help transform your business."
        buttonText="Let's Talk"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default Services;
