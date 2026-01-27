import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const JoinTeamSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Join Our Team
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Be the first to experience new product innovations from us straight in
          your inbox. Subscribe to our newsletter.
        </p>
        <Link to="/contact">
          <Button className="group">
            We're Hiring!
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default JoinTeamSection;
