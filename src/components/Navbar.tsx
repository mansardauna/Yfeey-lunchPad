import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import yfeeyLogo from "@/assets/yfeey-logo.png";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("#")} 
            className="flex items-center gap-2"
          >
            <img src={yfeeyLogo} alt="Yfeey" className="h-10 w-10 md:h-12 md:w-12 bg-white rounded-full p-1" />
            <span className="font-bold text-xl md:text-2xl text-[hsl(var(--dark-section))] tracking-tight">Yfeey</span>
          </button>

          {/* Desktop Navigation - Right aligned with CTA */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium tracking-wide transition-colors hover:text-[hsl(var(--dark-section))] text-[hsl(var(--dark-section-foreground))]"
              >
                {link.name}
              </button>
            ))}
            <Button className="rounded-lg bg-[hsl(259_43%_47%)] hover:bg-[hsl(259_43%_40%)] text-[hsl(var(--dark-section-foreground))]" asChild>
              <a href="mailto:info@yfeey.com">Let's Talk</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              className="p-2 text-[hsl(var(--dark-section-foreground))]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden p-4 border-t border-[hsl(var(--dark-section-foreground))]/10 animate-fade-in bg-white backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium tracking-wide transition-colors hover:text-[hsl(var(--dark-section))] py-2 text-[hsl(var(--dark-section-foreground))] text-black text-left"
                >
                  {link.name}
                </button>
              ))}
              <Button className="w-full mt-2 bg-[hsl(259,27%,28%)] hover:bg-[hsl(259_43%_40%)] text-[hsl(var(--dark-section-foreground))] shadow-md" asChild>
                <a href="mailto:info@yfeey.com">Let's Talk</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
