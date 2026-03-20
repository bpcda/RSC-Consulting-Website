import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { supabase } from "@/lib/supabase";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    const { error } = await supabase
      .from("contact_submissions")
      .insert({
        name: result.data.name,
        email: result.data.email,
        message: result.data.message,
      });

    setSubmitting(false);

    if (error) {
      setSubmitError("Something went wrong. Please try again later.");
      console.error("Supabase insert error:", error.message);
      return;
    }

    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-border px-0 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors duration-200";

  return (
    <section id="contact" className="py-32 px-6 bg-card">
      <div
        ref={ref}
        className={`container mx-auto max-w-lg transition-all duration-700 ${visible ? "animate-fade-up" : "opacity-0"}`}
      >
        <h2 className="text-3xl md:text-5xl font-display font-light text-foreground mb-4 tracking-tight text-center">
          Contact Us
        </h2>
        <p className="font-body text-sm text-muted-foreground text-center mb-12">
          We'd love to hear from you.
        </p>

        {submitted ? (
          <div className="text-center py-16 animate-fade-in opacity-0">
            <p className="font-display text-2xl text-foreground mb-2">Thank you</p>
            <p className="font-body text-sm text-muted-foreground">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            <div>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                maxLength={100}
                disabled={submitting}
              />
              {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                maxLength={255}
                disabled={submitting}
              />
              {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
            </div>
            <div>
              <textarea
                placeholder="Your message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className={`${inputClass} resize-none`}
                maxLength={2000}
                disabled={submitting}
              />
              {errors.message && <p className="text-destructive text-xs mt-1 font-body">{errors.message}</p>}
            </div>

            {submitError && (
              <p className="text-destructive text-sm font-body text-center">{submitError}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full font-body text-sm font-medium tracking-widest uppercase border border-foreground text-foreground py-3 hover:bg-foreground hover:text-background transition-all duration-300 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none"
            >
              {submitting ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
