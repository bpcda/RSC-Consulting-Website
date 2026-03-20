import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <Link
            to="/"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1 mb-8"
          >
            ← Back to home
          </Link>

          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4 leading-tight">
            Cookie Policy
          </h1>
          <p className="font-body text-sm text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="prose prose-sm max-w-none space-y-8 font-body text-muted-foreground leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">What are cookies?</h2>
              <p>
                Cookies are small text files placed on your device when you visit a website. 
                They are widely used to make websites work efficiently and to provide information to site owners.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">How we use cookies</h2>
              <p>Our website uses only strictly necessary cookies required for the website to function. We do not use advertising, tracking, or analytics cookies.</p>

              <div className="border border-border rounded-lg overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="px-4 py-3 font-medium text-foreground">Cookie</th>
                      <th className="px-4 py-3 font-medium text-foreground">Purpose</th>
                      <th className="px-4 py-3 font-medium text-foreground">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="px-4 py-3 font-mono text-xs">cookie_consent</td>
                      <td className="px-4 py-3">Remembers your cookie preference</td>
                      <td className="px-4 py-3">12 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">Your choices</h2>
              <p>
                You can control cookies through your browser settings. Most browsers allow you to refuse or delete cookies. 
                Please note that disabling cookies may affect the functionality of this website.
              </p>
              <p>For more information about cookies and how to manage them, visit{" "}
                <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2 hover:text-muted-foreground transition-colors">
                  allaboutcookies.org
                </a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">Your rights</h2>
              <p>
                Under the UK GDPR, the EU GDPR, and the Privacy and Electronic Communications Regulations (PECR), 
                you have the right to control the use of cookies on your device. For further details, 
                see our{" "}
                <Link to="/privacy" className="text-foreground underline underline-offset-2 hover:text-muted-foreground transition-colors">
                  Privacy Policy
                </Link>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">Contact</h2>
              <p>
                If you have questions about our use of cookies, contact us at{" "}
                <a href="mailto:info@rscconsulting.co.uk" className="text-foreground underline underline-offset-2 hover:text-muted-foreground transition-colors">
                  info@rscconsulting.co.uk
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
