import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home — My Learning Journey",
  description:
    "A short homepage for my learning journey, with links to the about page and blog.",
};

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      <section className="space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">
          Welcome
        </p>
        <h1 className="text-4xl font-bold">My Learning Journey</h1>
        <p className="text-base text-text-muted max-w-2xl mx-auto">
          A simple site that shares what I&apos;m learning, the goals I&apos;m
          working toward, and the topics I care about most.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-card p-6 text-center">
          <h2 className="text-lg font-semibold mb-2">Learn</h2>
          <p className="text-sm text-text-muted">
            I explore web development topics step by step.
          </p>
        </div>
        <div className="glass-card p-6 text-center">
          <h2 className="text-lg font-semibold mb-2">Build</h2>
          <p className="text-sm text-text-muted">
            I practice by building small projects and improving each one.
          </p>
        </div>
        <div className="glass-card p-6 text-center">
          <h2 className="text-lg font-semibold mb-2">Share</h2>
          <p className="text-sm text-text-muted">
            I write about what I learn and keep the site easy to read.
          </p>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/about"
          className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white text-center"
        >
          About Me
        </Link>
        <Link
          href="/blog"
          className="rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground text-center"
        >
          Blog
        </Link>
      </section>
    </div>
  );
}
