import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto space-y-8">
        {/* Top row: social */}
        <div className="flex justify-center">
          <a
            href="https://instagram.com/rscconsultinguk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @rscconsultinguk
          </a>
        </div>

        {/* Legal information */}
        <div className="border-t border-border pt-8 text-center space-y-1">
          <p className="font-body text-xs text-muted-foreground tracking-wide">
            RSC Consulting Ltd. · Company number 14578626
          </p>
          <p className="font-body text-xs text-muted-foreground tracking-wide">Registered in England</p>
          <p className="font-body text-xs text-muted-foreground tracking-wide">
            Registered office: 27 Old Gloucester Street, London, WC1N 3AX, United Kingdom
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Link to="/privacy" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide underline underline-offset-2">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide underline underline-offset-2">
              Cookie Policy
            </Link>
          </div>
          <p className="font-body text-xs text-muted-foreground tracking-wide mt-4">
            © {new Date().getFullYear()} RSC Consulting Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
