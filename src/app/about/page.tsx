import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "A short description of who I am and what I am learning.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      <section className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">
          About
        </p>
        <h1 className="text-4xl font-bold">A Simple Introduction</h1>
        <p className="text-base text-text-muted max-w-2xl mx-auto">
          I am learning web development through practice, projects, and short
          notes that keep things easy to follow.
        </p>
      </section>

      <section className="glass-card p-8 space-y-4">
        <p className="text-sm text-text-muted">
          I build small apps, try new tools, and focus on writing clear,
          practical code. This page is a quick snapshot of what I care about.
        </p>
        <ul className="space-y-2 text-sm text-foreground">
          <li>• Learning frontend and backend development.</li>
          <li>• Building simple web projects.</li>
          <li>• Improving with each new page.</li>
        </ul>
      </section>
    </div>
  );
}
