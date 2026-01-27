import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, Calendar } from "lucide-react";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const caseStudies = [
  {
    id: 1,
    title: "TechFlow Africa",
    subtitle: "E-commerce Platform Revolution",
    image: caseStudy1,
    category: "E-commerce",
    description: "TechFlow Africa came to us with a vision to revolutionize online shopping in West Africa.",
    challenge: "TechFlow struggled with customer acquisition costs and low conversion rates.",
    solution: "We implemented AI-powered product recommendations, predictive inventory management, and automated customer segmentation.",
    results: [
      { label: "Revenue Growth", value: "340%", icon: TrendingUp },
      { label: "New Customers", value: "50,000+", icon: Users },
      { label: "Funding Raised", value: "$2.5M", icon: DollarSign },
      { label: "Timeline", value: "8 months", icon: Calendar },
    ],
    testimonial: { quote: "YGCL transformed our approach to e-commerce.", author: "Adebayo Johnson", role: "Founder & CEO" },
  },
  {
    id: 2,
    title: "FinBridge",
    subtitle: "Digital Banking for the Underserved",
    image: caseStudy2,
    category: "Fintech",
    description: "FinBridge aimed to provide accessible banking services to millions of unbanked Nigerians.",
    challenge: "Building trust in digital banking among populations with limited tech exposure.",
    solution: "We developed an AI-based fraud detection system and voice-enabled banking features.",
    results: [
      { label: "Active Users", value: "200,000+", icon: Users },
      { label: "Transaction Volume", value: "$15M/month", icon: DollarSign },
      { label: "Fraud Reduction", value: "95%", icon: TrendingUp },
      { label: "Timeline", value: "12 months", icon: Calendar },
    ],
    testimonial: { quote: "The team at YGCL understood the unique challenges of fintech in Africa.", author: "Michael Eze", role: "Co-founder" },
  },
  {
    id: 3,
    title: "HealthTech Solutions",
    subtitle: "AI-Powered Diagnostic Platform",
    image: caseStudy3,
    category: "Healthcare",
    description: "HealthTech Solutions wanted to bring AI-assisted diagnostics to underserved communities.",
    challenge: "Limited access to specialist doctors in rural areas and high misdiagnosis rates.",
    solution: "We built an AI diagnostic assistant trained on diverse African medical data.",
    results: [
      { label: "Patients Served", value: "75,000+", icon: Users },
      { label: "Diagnostic Accuracy", value: "94%", icon: TrendingUp },
      { label: "Funding Raised", value: "$5M", icon: DollarSign },
      { label: "Timeline", value: "18 months", icon: Calendar },
    ],
    testimonial: { quote: "YGCL helped us navigate the complex intersection of AI and healthcare.", author: "Amina Bello", role: "Director" },
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 md:pb-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 bg-[hsl(var(--dark-section))]/10 text-[hsl(var(--dark-section))] rounded-full text-sm font-medium mb-4">Case Studies</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Success Stories That Inspire</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Discover how we've helped startups across Africa transform their ideas into successful, AI-powered businesses.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-24">
          {caseStudies.map((study, index) => (
            <div key={study.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative">
                  <img src={study.image} alt={study.title} className="rounded-2xl shadow-xl w-full aspect-video object-cover" />
                  <Badge className="absolute top-4 left-4 bg-[hsl(var(--dark-section))] text-[hsl(var(--dark-section))]-foreground">{study.category}</Badge>
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{study.title}</h2>
                <p className="text-lg text-[hsl(var(--dark-section))] mb-4">{study.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{study.description}</p>
                <div className="space-y-4 mb-6">
                  <div><h4 className="font-semibold text-foreground mb-1">The Challenge</h4><p className="text-sm text-muted-foreground">{study.challenge}</p></div>
                  <div><h4 className="font-semibold text-foreground mb-1">Our Solution</h4><p className="text-sm text-muted-foreground">{study.solution}</p></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {study.results.map((result, i) => (
                    <Card key={i} className="bg-muted/50 border-border">
                      <CardContent className="p-4 text-center">
                        <result.icon className="h-5 w-5 text-[hsl(var(--dark-section))] mx-auto mb-2" />
                        <p className="text-lg font-bold text-foreground">{result.value}</p>
                        <p className="text-xs text-muted-foreground">{result.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Card className="bg-[hsl(var(--dark-section))]/5 border-[hsl(var(--dark-section))]/20">
                  <CardContent className="p-4">
                    <p className="text-sm text-foreground italic mb-2">"{study.testimonial.quote}"</p>
                    <p className="text-sm font-medium text-[hsl(var(--dark-section))]">{study.testimonial.author}, <span className="text-muted-foreground font-normal">{study.testimonial.role}</span></p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Ready to Write Your Success Story?" description="Join the ranks of successful startups that have transformed their businesses with our AI-powered solutions." buttonText="Start Your Journey" buttonLink="/contact" />
      <Footer />
    </div>
  );
};

export default CaseStudies;
