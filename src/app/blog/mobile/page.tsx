import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Dev Blog",
  description: "A short mobile blog page with minimal details.",
};

export default function MobileBlogPage() {
  const posts = [
    { title: "React Native Starter", date: "June 28, 2025" },
    { title: "Mobile UI Tips", date: "June 5, 2025" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">
          Mobile
        </p>
        <h1 className="text-4xl font-bold">Mobile Notes</h1>
        <p className="text-base text-text-muted max-w-2xl">
          Short entries about mobile development and app interfaces.
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
