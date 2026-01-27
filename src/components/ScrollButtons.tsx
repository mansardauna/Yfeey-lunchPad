import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollButtons = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const [showBottomButton, setShowBottomButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // Show top button after scrolling down 300px
      setShowTopButton(scrollTop > 300);
      
      // Hide bottom button when near the bottom
      setShowBottomButton(scrollTop < scrollHeight - clientHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: "smooth" 
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
      {showTopButton && (
        <Button
          size="icon"
          onClick={scrollToTop}
          className="h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      )}
      {showBottomButton && (
        <Button
          size="icon"
          variant="outline"
          onClick={scrollToBottom}
          className="h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg bg-card animate-fade-in"
          aria-label="Scroll to bottom"
        >
          <ArrowDown className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      )}
    </div>
  );
};

export default ScrollButtons;
