import { useEffect, useRef } from "react";
import logoLight from "@/assets/logo-light.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) el.classList.add("animate-fade-up");
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div ref={ref} className="text-center opacity-0 max-w-2xl">
        <img
          src={logoLight}
          alt="RSC Consulting Ltd."
          className="w-32 h-32 rounded-full mx-auto mb-10 shadow-lg"
        />
        <h1 className="text-5xl md:text-7xl font-display font-light tracking-tight leading-[1.1] text-foreground mb-6">
          Excellence in Consulting
        </h1>
        <p className="font-body text-lg text-muted-foreground font-light max-w-md mx-auto mb-10 text-pretty">
          Strategic guidance and tailored solutions to help your business thrive.
        </p>
        <a
          href="#contact"
          className="inline-block font-body text-sm font-medium tracking-widest uppercase border border-foreground text-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-300 active:scale-[0.97]"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
