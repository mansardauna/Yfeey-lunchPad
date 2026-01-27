import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Map from "@/components/Map";
import FAQ from "@/components/FAQ";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Zap,
  Bot,
  Youtube,
  GraduationCap,
  Code,
  Smartphone,
  Search,
  MessageSquare,
  FileText,
  Workflow,
  Video,
  Calendar,
  Lightbulb,
  BookOpen,
  Presentation,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import yemiPhoto from "@/assets/team/yemi-afolabi.jpg";
import funkePhoto from "@/assets/team/funke-adeyemi.jpg";
import chidiPhoto from "@/assets/team/chidi-okoro.jpg";
import amaraPhoto from "@/assets/team/amara-ibrahim.jpg";

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every solution we build is crafted with meticulous attention to detail, ensuring flawless execution and optimal performance.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description:
      "We stay at the forefront of AI and automation technologies to deliver cutting-edge solutions that give you a competitive advantage.",
  },
  {
    icon: Heart,
    title: "Client-Focused",
    description:
      "Your success is our success. We're genuinely invested in helping your business grow and achieve its full potential.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work alongside you as partners, not just service providers. Together we achieve more than we ever could alone.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "40+", label: "Happy Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const team = [
  {
    name: "Yemi Afolabi",
    role: "Founder & CEO",
    bio: "Visionary leader with 8+ years of expertise in AI, digital transformation and business strategy.",
    image: yemiPhoto,
  },
  {
    name: "Funke Adeyemi",
    role: "Lead Developer",
    bio: "Full-stack expert building scalable, AI-integrated solutions with modern technologies.",
    image: funkePhoto,
  },
  {
    name: "Chidi Okoro",
    role: "Project Manager",
    bio: "Ensuring every project is delivered on time with exceptional quality standards.",
    image: chidiPhoto,
  },
  {
    name: "Amara Ibrahim",
    role: "Client Success",
    bio: "Dedicated to maintaining strong client relationships and ensuring satisfaction.",
    image: amaraPhoto,
  },
];

// AI-Enhanced Digital Services
const aiServices = [
  {
    icon: FileText,
    title: "AI Content Creation",
    description: "Blogs, emails, research papers, video scripts, and custom GPT solutions."
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description: "Lead generation, customer service, and workflow management automation."
  },
  {
    icon: Bot,
    title: "Custom AI Tools",
    description: "Chatbots, prompt systems, and AI agents tailored to your business needs."
  },
  {
    icon: Lightbulb,
    title: "AI Strategy & Roadmaps",
    description: "Comprehensive audits and strategic plans for digital transformation."
  },
];

// Software & Product Development
const softwareServices = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Full websites and web applications from MVPs to full-scale enterprise systems."
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android."
  },
  {
    icon: Search,
    title: "SEO-Optimized Sites",
    description: "Blogs, affiliate sites, and revenue-generating tools optimized for search."
  },
  {
    icon: Code,
    title: "AI-Integrated Platforms",
    description: "Digital publishing and content delivery platforms powered by AI."
  },
];

// YouTube & Social Media Automation
const socialServices = [
  {
    icon: Video,
    title: "AI Video Production",
    description: "AI-generated YouTube videos with scripts and professional voiceovers."
  },
  {
    icon: Youtube,
    title: "Faceless Channels",
    description: "Running and scaling faceless YouTube channels for passive income."
  },
  {
    icon: Calendar,
    title: "Content Scheduling",
    description: "Automated content scheduling and publishing across all platforms."
  },
  {
    icon: MessageSquare,
    title: "Social Strategy",
    description: "Comprehensive social media strategies with automated content delivery."
  },
];

// Training & Consulting
const trainingServices = [
  {
    icon: GraduationCap,
    title: "AI Training Programs",
    description: "Hands-on training to help your team leverage AI tools effectively."
  },
  {
    icon: BookOpen,
    title: "Workshops & Courses",
    description: "Comprehensive workshops on automation, content creation, and digital marketing."
  },
  {
    icon: Presentation,
    title: "Consulting Sessions",
    description: "One-on-one strategic consulting for business growth and optimization."
  },
  {
    icon: Zap,
    title: "Implementation Support",
    description: "Ongoing support to ensure successful adoption of new systems and tools."
  },
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "info@yfeey.com",
    subContent: "support@yfeey.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+44 123 456 7890",
    subContent: "Mon - Fri: 9AM - 6PM",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Isle of Man",
    subContent: "United Kingdom",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Fri: 9AM - 6PM GMT",
    subContent: "Sat: 10AM - 2PM GMT",
  },
];

const trustedBrands = ["ValleyNest Global", "Slessor Healthcare", "More Clients..."];

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
        icon: <CheckCircle2 className="h-5 w-5 text-[hsl(var(--dark-section))]" />,
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const ServiceGrid = ({ services, title, description }: { services: typeof aiServices; title: string; description: string }) => (
    <div className="mb-16">
      <AnimatedSection className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <AnimatedSection key={index} delay={index * 100}>
            <Card className="bg-card border-border hover:shadow-lg hover:border-[hsl(var(--dark-section))]/50 transition-all duration-300 hover:-translate-y-1 h-full">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-[hsl(var(--dark-section))]/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-[hsl(var(--dark-section))]" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pb-24 bg-gradient-to-b from-[hsl(var(--dark-section))]/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1 bg-[hsl(var(--dark-section))]/10 text-[hsl(var(--dark-section))] rounded-full text-sm font-medium mb-4">
              About YGCL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              YFEEY GLOBAL CONCEPT<br />
              <span className="text-[hsl(var(--dark-section))]">(YGCL)</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              A software development and AI-powered digital services company based in the Isle of Man. 
              We help startups, entrepreneurs, and small businesses become more efficient and profitable 
              by using smart automation, content systems, and AI tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="group">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-6">Trusted by leading organizations:</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {trustedBrands.map((brand, index) => (
              <div key={index} className="h-10 w-32 bg-muted rounded flex items-center justify-center text-xs font-medium text-muted-foreground hover:bg-[hsl(var(--dark-section))]/10 hover:text-[hsl(var(--dark-section))] transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <Card className="h-full bg-card border-border hover:border-[hsl(var(--dark-section))]/50 transition-colors">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-xl bg-[hsl(var(--dark-section))]/10 flex items-center justify-center mb-6">
                    <Target className="h-6 w-6 text-[hsl(var(--dark-section))]" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower startups, entrepreneurs, and small businesses with cutting-edge AI technologies 
                    and smart automation solutions that drive efficiency, profitability, and sustainable growth. 
                    We believe every business deserves access to the same powerful tools that large enterprises use, 
                    delivered in an accessible and affordable way.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card className="h-full bg-card border-border hover:border-[hsl(var(--dark-section))]/50 transition-colors">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-xl bg-[hsl(var(--dark-section))]/10 flex items-center justify-center mb-6">
                    <Eye className="h-6 w-6 text-[hsl(var(--dark-section))]" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the world's most trusted AI-powered digital services partner for small businesses 
                    and entrepreneurs. We envision a future where every business can leverage AI to automate 
                    mundane tasks, create compelling content, and build scalable digital products that compete 
                    with industry giants.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Do - Service Pillars */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[hsl(var(--dark-section))]/10 text-[hsl(var(--dark-section))] rounded-full text-sm font-medium mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Service Pillars
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI-powered solutions designed to transform your business operations and accelerate growth.
            </p>
          </AnimatedSection>

          <ServiceGrid 
            services={aiServices} 
            title="AI-Enhanced Digital Services" 
            description="Leveraging cutting-edge AI technologies (like GPT) to automate and enhance your business operations."
          />

          <ServiceGrid 
            services={softwareServices} 
            title="Software & Product Development" 
            description="Building digital products and platforms from concept to launch."
          />

          <ServiceGrid 
            services={socialServices} 
            title="YouTube & Social Media Automation" 
            description="Content automation for online creators and businesses."
          />

          <ServiceGrid 
            services={trainingServices} 
            title="Training & Consulting" 
            description="Empowering your team with the knowledge and skills to leverage AI and automation."
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-[hsl(var(--dark-section))] text-[hsl(var(--dark-section))]-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI-Powered Solutions<br />
                for Modern Businesses.
              </h2>
              <p className="text-[hsl(var(--dark-section))]-foreground/80 leading-relaxed mb-6">
                At YFEEY, we combine cutting-edge AI technologies with proven software development 
                practices to deliver solutions that truly transform businesses. Whether you're a 
                startup looking to automate operations, an entrepreneur building your digital presence, 
                or a small business seeking to scale—we have the tools and expertise to help.
              </p>
              <p className="text-[hsl(var(--dark-section))]-foreground/80 leading-relaxed">
                Our track record speaks for itself—from AI-powered content systems to fully automated 
                YouTube channels, we've helped dozens of clients achieve their digital transformation goals.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="text-center p-6 rounded-xl bg-[hsl(var(--dark-section))]-foreground/10 hover:bg-[hsl(var(--dark-section))]-foreground/15 transition-colors">
                    <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                    <p className="text-sm text-[hsl(var(--dark-section))]-foreground/70 uppercase tracking-wide">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[hsl(var(--dark-section))]/10 text-[hsl(var(--dark-section))] rounded-full text-sm font-medium mb-4">
              Our Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="bg-card border-border text-center hover:shadow-lg hover:border-[hsl(var(--dark-section))]/50 transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-[hsl(var(--dark-section))]/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-[hsl(var(--dark-section))]" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[hsl(var(--dark-section))]/10 text-[hsl(var(--dark-section))] rounded-full text-sm font-medium mb-4">
              Our People
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The talented individuals driving your digital success forward.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="group bg-card border-border overflow-hidden h-full hover:shadow-lg hover:border-[hsl(var(--dark-section))]/50 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm text-[hsl(var(--dark-section))] font-medium mb-2">{member.role}</p>
                      <p className="text-xs text-muted-foreground">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[hsl(var(--dark-section))]/10 text-[hsl(var(--dark-section))] rounded-full text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Start a Conversation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question or ready to start your AI-powered digital transformation? We'd love to hear from you.
            </p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              {contactInfo.map((info, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <Card className="bg-card border-border hover:border-[hsl(var(--dark-section))]/50 transition-colors">
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-[hsl(var(--dark-section))]/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-[hsl(var(--dark-section))]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{info.title}</h4>
                        <p className="text-sm text-muted-foreground">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.subContent}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={200}>
                <Card className="bg-card border-border">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-foreground mb-6">
                      Send Us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="How can we help?"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project and how we can help..."
                          rows={6}
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full md:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-6">
            <h3 className="text-xl font-bold text-foreground mb-2">Find Us</h3>
            <p className="text-sm text-muted-foreground">Based in the Isle of Man, serving clients worldwide</p>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto h-80 rounded-xl overflow-hidden border border-border">
            <Map />
          </div>
        </div>
      </section>

      <FAQ />

      <Footer />
    </div>
  );
};

export default About;
