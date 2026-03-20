import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <p className="font-body text-sm text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="prose prose-sm max-w-none space-y-8 font-body text-muted-foreground leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">1. Who we are</h2>
              <p>
                RSC Consulting Ltd. (company number 14578626) is the data controller responsible for your personal data. 
                Our registered office is 27 Old Gloucester Street, London, WC1N 3AX, United Kingdom. 
                We are registered in England.
              </p>
              <p>
                If you have questions about this policy or your data, contact us at{" "}
                <a href="mailto:info@rscconsulting.co.uk" className="text-foreground underline underline-offset-2 hover:text-muted-foreground transition-colors">
                  info@rscconsulting.co.uk
                </a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">2. What data we collect</h2>
              <p>We may collect the following personal data when you interact with our website:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-foreground">Contact form submissions:</strong> your name, email address, and message content.</li>
                <li><strong className="text-foreground">Technical data:</strong> IP address, browser type and version, time zone, operating system, and pages visited — collected automatically via cookies and server logs.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">3. How we use your data</h2>
              <p>We process your personal data for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>To respond to enquiries submitted through our contact form (legal basis: legitimate interest).</li>
                <li>To operate, maintain, and improve our website (legal basis: legitimate interest).</li>
                <li>To comply with legal obligations where applicable.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">4. Data sharing</h2>
              <p>
                We do not sell your personal data. We may share data with third-party service providers who assist us 
                in operating our website or conducting business, provided they agree to keep your information confidential. 
                We may also disclose data where required by law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">5. Data retention</h2>
              <p>
                We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, 
                or as required by law. Contact form submissions are retained for up to 24 months, after which they are securely deleted.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">6. Your rights</h2>
              <p>Under the UK GDPR and the EU GDPR (where applicable), you have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data.</li>
                <li>Object to or restrict processing of your data.</li>
                <li>Request data portability.</li>
                <li>Withdraw consent at any time (where processing is based on consent).</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:info@rscconsulting.co.uk" className="text-foreground underline underline-offset-2 hover:text-muted-foreground transition-colors">
                  info@rscconsulting.co.uk
                </a>. 
                You also have the right to lodge a complaint with the{" "}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2 hover:text-muted-foreground transition-colors">
                  Information Commissioner's Office (ICO)
                </a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">7. International transfers</h2>
              <p>
                Where data is transferred outside the UK or EEA, we ensure appropriate safeguards are in place 
                in accordance with data protection law, such as standard contractual clauses or adequacy decisions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">8. Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal data 
                against unauthorised access, loss, or destruction.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl text-foreground">9. Changes to this policy</h2>
              <p>
                We may update this policy from time to time. Any changes will be posted on this page 
                with a revised "last updated" date.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
