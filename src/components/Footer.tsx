const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-[hsl(var(--dark-section-foreground))]/40">
      <div className="container mx-auto px-4 py-6">
        <p className="text-xs md:text-sm text-[hsl(var(--dark-section-foreground))]/50 text-center">
          © {new Date().getFullYear()} Yfeey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
