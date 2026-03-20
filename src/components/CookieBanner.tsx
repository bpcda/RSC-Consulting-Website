import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-up">
      <div className="container mx-auto max-w-2xl bg-card border border-border rounded-xl shadow-lg px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
          We use essential cookies to keep this site working.{" "}
          <Link to="/cookies" className="underline underline-offset-2 text-foreground hover:text-muted-foreground transition-colors">
            Learn more
          </Link>
        </p>
        <button
          onClick={accept}
          className="font-body text-sm font-medium tracking-wide px-5 py-2.5 rounded-lg bg-foreground text-background hover:bg-foreground/90 active:scale-[0.97] transition-all duration-150 whitespace-nowrap"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
