import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "A short contact page with simple contact details.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      <section className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">
          Contact
        </p>
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-base text-text-muted max-w-2xl mx-auto">
          Send a short note to the email below if you want to connect.
        </p>
      </section>

      <section className="glass-card p-8 space-y-4">
        <p className="text-sm text-text-muted">
          Email: <span className="text-foreground">hello@myjourney.dev</span>
        </p>
        
      </section>
    </div>
  );
}
