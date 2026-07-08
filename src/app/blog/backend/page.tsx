import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backend Blog",
  description: "A small selection of backend posts with minimal detail.",
};

export default function BackendBlogPage() {
  const posts = [
    { title: "REST API Basics", date: "July 2, 2025" },
    { title: "Node.js Server Setup", date: "June 20, 2025" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">
          Backend
        </p>
        <h1 className="text-4xl font-bold">Simple Backend Notes</h1>
        <p className="text-base text-text-muted max-w-2xl">
          Short posts about backend concepts and server-side development.
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
