import logoDark from "@/assets/logo-dark.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logoDark} alt="RSC Consulting Ltd." className="h-10 w-10 rounded-full" />
          <span className="font-body text-sm font-medium tracking-widest uppercase text-foreground">
            RSC Consulting
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200">
            About
          </a>
          <a href="#contact" className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
