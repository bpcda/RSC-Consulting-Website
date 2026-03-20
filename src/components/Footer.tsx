const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-body text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} RSC Consulting Ltd. All rights reserved.
        </p>
        <a
          href="https://instagram.com/rscconsultinguk"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide flex items-center gap-2"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          @rscconsultinguk
        </a>
      </div>
    </footer>
  );
};

export default Footer;
