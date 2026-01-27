import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TextStrip from "@/components/TextStrip";
import ServicesPreview from "@/components/ServicesPreview";
import WeHandleSection from "@/components/WeHandleSection";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import StatsSection from "@/components/StatsSection";
import ScrollButtons from "@/components/ScrollButtons";
import Testimonials from "@/components/Testimonials";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AnimatedSection animation="fade-in-up">
        <ServicesPreview />
      </AnimatedSection>
      <WeHandleSection />
      <AnimatedSection animation="fade-in-up">
        <StatsSection />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-up">
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-up">
        <FAQ />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-up">
        <ContactSection />
      </AnimatedSection>
      <Footer />
      <ScrollButtons />
    </div>
  );
};

export default Index;
