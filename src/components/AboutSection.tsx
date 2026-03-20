import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 px-6">
      <div
        ref={ref}
        className={`container mx-auto max-w-2xl text-center transition-all duration-700 ${visible ? "animate-fade-up" : "opacity-0"}`}
      >
        <h2 className="text-3xl md:text-5xl font-display font-light text-foreground mb-8 tracking-tight">
          Who We Are
        </h2>
        <div className="w-12 h-px bg-accent mx-auto mb-8" />
        <p className="font-body text-base text-muted-foreground leading-relaxed font-light mb-6">
          RSC Consulting Ltd. provides expert consulting services across industries. 
          We partner with organisations to identify opportunities, solve complex challenges, 
          and deliver measurable results.
        </p>
        <p className="font-body text-base text-muted-foreground leading-relaxed font-light">
          Our approach combines deep industry knowledge with practical strategies, 
          ensuring every engagement creates lasting value for our clients.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
