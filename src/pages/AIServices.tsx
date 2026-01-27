import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Bot,
  FileText,
  MessageSquare,
  Workflow,
  Lightbulb,
  Zap,
  Brain,
  Sparkles,
  Target,
  Users,
  TrendingUp,
  CheckCircle2,
  Mail,
  PenTool,
  Search,
  Video,
  Mic,
  Globe,
  Shield,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const aiCapabilities = [
  {
    icon: FileText,
    title: "AI Content Creation",
    description: "High-quality written content generated automatically",
    features: [
      "Blog posts and articles",
      "Email marketing campaigns",
      "Research papers and reports",
      "Video scripts and storyboards",
      "Custom GPT solutions"
    ]
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description: "Streamline operations with intelligent automation",
    features: [
      "Lead generation systems",
      "Customer service automation",
      "Workflow management",
      "Data processing pipelines",
      "Task scheduling and alerts"
    ]
  },
  {
    icon: Bot,
    title: "Custom AI Tools",
    description: "Tailored AI solutions for your unique needs",
    features: [
      "Intelligent chatbots",
      "Custom prompt systems",
      "AI agents and assistants",
      "Natural language interfaces",
      "Knowledge base systems"
    ]
  },
  {
    icon: Lightbulb,
    title: "AI Strategy & Roadmaps",
    description: "Strategic planning for digital transformation",
    features: [
      "AI readiness assessment",
      "Technology audits",
      "Implementation roadmaps",
      "ROI projections",
      "Change management plans"
    ]
  }
];

const contentServices = [
  {
    icon: PenTool,
    title: "Blog & Article Writing",
    description: "SEO-optimized articles that drive traffic and engagement."
  },
  {
    icon: Mail,
    title: "Email Campaigns",
    description: "Personalized email sequences that convert subscribers to customers."
  },
  {
    icon: Search,
    title: "Research & Reports",
    description: "In-depth research papers and market analysis reports."
  },
  {
    icon: Video,
    title: "Video Scripts",
    description: "Engaging scripts for YouTube, ads, and promotional content."
  },
  {
    icon: Mic,
    title: "AI Voiceovers",
    description: "Natural-sounding voiceovers for videos and podcasts."
  },
  {
    icon: Bot,
    title: "Custom GPTs",
    description: "Purpose-built GPT models trained on your data and brand voice."
  }
];

const automationBenefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate repetitive tasks and free up your team for strategic work.",
    stat: "80%",
    statLabel: "Time Saved"
  },
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    description: "Generate more leads and convert them faster with AI-powered systems.",
    stat: "3x",
    statLabel: "Lead Generation"
  },
  {
    icon: Shield,
    title: "Reduce Errors",
    description: "Eliminate human error with consistent, automated processes.",
    stat: "99%",
    statLabel: "Accuracy"
  },
  {
    icon: Globe,
    title: "Scale Globally",
    description: "Serve customers 24/7 across all time zones without additional staff.",
    stat: "24/7",
    statLabel: "Availability"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We analyze your business processes, identify automation opportunities, and understand your goals."
  },
  {
    step: "02",
    title: "Strategy",
    description: "Our team develops a comprehensive AI roadmap tailored to your specific needs and budget."
  },
  {
    step: "03",
    title: "Implementation",
    description: "We build and deploy your custom AI solutions with minimal disruption to your operations."
  },
  {
    step: "04",
    title: "Optimization",
    description: "Continuous monitoring and refinement to ensure maximum ROI from your AI investments."
  }
];

const AIServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pb-24 bg-gradient-to-b from-[hsl(var(--dark-section))]/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[hsl(var(--dark-section))]/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--dark-section))]/10 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-[hsl(var(--dark-section))]" />
              <span className="text-sm font-medium text-[hsl(var(--dark-section))]">AI-Powered Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Transform Your Business with{" "}
              <span className="text-[hsl(var(--dark-section))]">Artificial Intelligence</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Leverage cutting-edge AI technologies to automate operations, create compelling content, 
              and build intelligent systems that drive growth. We help startups and small businesses 
              harness the power of AI without the enterprise price tag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about#contact">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  View All Services
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* AI Capabilities Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[hsl(var(--dark-section))]/10 text-[hsl(var(--dark-section))] rounded-full text-sm font-medium mb-4">
              Our AI Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI-Enhanced Digital Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We leverage cutting-edge AI technologies like GPT to help you work smarter, not harder.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="h-full bg-card border-border hover:border-[hsl(var(--dark-section))]/50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-14 w-14 rounded-xl bg-[hsl(var(--dark-section))]/10 flex items-center justify-center flex-shrink-0">
                        <capability.icon className="h-7 w-7 text-[hsl(var(--dark-section))]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{capability.title}</h3>
                        <p className="text-muted-foreground">{capability.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {capability.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[hsl(var(--dark-section))] flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
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

      {/* Content Creation Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[hsl(var(--dark-section))]/10 text-[hsl(var(--dark-section))] rounded-full text-sm font-medium mb-4">
              Content Creation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI-Powered Content at Scale
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Create high-quality content automatically—from blogs and emails to video scripts and custom GPTs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentServices.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="h-full bg-card border-border hover:border-[hsl(var(--dark-section))]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-xl bg-[hsl(var(--dark-section))]/10 flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-6 w-6 text-[hsl(var(--dark-section))]" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Benefits */}
      <section className="py-16 md:py-24 bg-[hsl(var(--dark-section))] text-[hsl(var(--dark-section))]-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Automate with AI?
            </h2>
            <p className="text-[hsl(var(--dark-section))]-foreground/80 max-w-2xl mx-auto">
              Our AI automation solutions deliver measurable results that transform your business operations.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationBenefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center p-6 rounded-xl bg-[hsl(var(--dark-section))]-foreground/10 hover:bg-[hsl(var(--dark-section))]-foreground/15 transition-colors">
                  <div className="h-12 w-12 rounded-xl bg-[hsl(var(--dark-section))]-foreground/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <p className="text-4xl font-bold mb-1">{benefit.stat}</p>
                  <p className="text-sm text-[hsl(var(--dark-section))]-foreground/70 uppercase tracking-wide mb-3">{benefit.statLabel}</p>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-[hsl(var(--dark-section))]-foreground/70">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[hsl(var(--dark-section))]/10 text-[hsl(var(--dark-section))] rounded-full text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Implement AI Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology to transform your business with AI—from discovery to deployment.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="relative">
                  <div className="text-6xl font-bold text-[hsl(var(--dark-section))]/10 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-0.5 bg-[hsl(var(--dark-section))]/20" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1 bg-[hsl(var(--dark-section))]/10 text-[hsl(var(--dark-section))] rounded-full text-sm font-medium mb-4">
                Use Cases
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                AI Solutions for Every Business Need
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[hsl(var(--dark-section))]/10 flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-[hsl(var(--dark-section))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Lead Generation</h3>
                    <p className="text-sm text-muted-foreground">
                      Automatically identify, qualify, and nurture leads with AI-powered systems that work 24/7.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[hsl(var(--dark-section))]/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-[hsl(var(--dark-section))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Customer Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Deploy intelligent chatbots that handle customer inquiries and escalate complex issues.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[hsl(var(--dark-section))]/10 flex items-center justify-center flex-shrink-0">
                    <Brain className="h-5 w-5 text-[hsl(var(--dark-section))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Data Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Extract insights from your data with AI that identifies patterns and trends automatically.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[hsl(var(--dark-section))]/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-[hsl(var(--dark-section))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Personalization</h3>
                    <p className="text-sm text-muted-foreground">
                      Deliver personalized experiences to each customer based on their behavior and preferences.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="bg-card border-border p-8">
                <div className="text-center mb-6">
                  <Brain className="h-16 w-16 text-[hsl(var(--dark-section))] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Ready to Get Started?</h3>
                  <p className="text-muted-foreground">
                    Book a free consultation to discover how AI can transform your business.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(var(--dark-section))]" />
                    <span className="text-sm text-muted-foreground">Free AI readiness assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(var(--dark-section))]" />
                    <span className="text-sm text-muted-foreground">Custom implementation roadmap</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(var(--dark-section))]" />
                    <span className="text-sm text-muted-foreground">ROI projections for your business</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(var(--dark-section))]" />
                    <span className="text-sm text-muted-foreground">No commitment required</span>
                  </div>
                </div>
                <Link to="/about#contact" className="block mt-6">
                  <Button size="lg" className="w-full group">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Embrace AI?"
        description="Let's discuss how AI-powered solutions can transform your business operations and drive growth."
        buttonText="Get in Touch"
        buttonLink="/about#contact"
      />

      <Footer />
    </div>
  );
};

export default AIServices;
