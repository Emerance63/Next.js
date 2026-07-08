import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Blog",
  description: "A short frontend blog page with minimal details.",
};

export default function FrontendBlogPage() {
  const posts = [
    { title: "Next.js App Router", date: "July 5, 2025" },
    { title: "CSS Layout Basics", date: "June 24, 2025" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">
          Frontend
        </p>
        <h1 className="text-4xl font-bold">Frontend Notes</h1>
        <p className="text-base text-text-muted max-w-2xl">
          Short posts about React, styling, and frontend tools.
        </p>
      </section>

      <section className="space-y-4">
        {posts.map((post) => (
          <div key={post.title} className="glass-card p-6">
            <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
            <p className="text-xs text-text-muted">{post.date}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
