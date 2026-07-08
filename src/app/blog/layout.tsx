import type { Metadata } from "next";
import BlogHeader from "@/components/BlogHeader";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore my blog posts about frontend, backend, and mobile development.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <BlogHeader />
      <div className="flex flex-col md:flex-row gap-8">
        <BlogSidebar />
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </section>
  );
}
