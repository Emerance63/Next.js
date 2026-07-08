import Link from "next/link";

export default function BlogPage() {
  const categories = [
    {
      title: "Frontend",
      href: "/blog/frontend",
      description: "Short notes about UI and React.",
    },
    {
      title: "Backend",
      href: "/blog/backend",
      description: "Simple backend ideas and API basics.",
    },
    {
      title: "Mobile",
      href: "/blog/mobile",
      description: "Mobile development thoughts and small guides.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      <section className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">
          Blog
        </p>
        <h1 className="text-4xl font-bold">Topics I Write About</h1>
        <p className="text-base text-text-muted max-w-2xl mx-auto">
          A simple list of my blog categories and the ideas I am exploring.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="glass-card p-6 block"
          >
            <h2 className="text-lg font-semibold mb-2">{category.title}</h2>
            <p className="text-sm text-text-muted">{category.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
