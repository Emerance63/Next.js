import { getStories } from "@/app/type/story";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Read stories shared by others — thoughts, experiences, and more.",
};

export default async function StoriesPage() {
  let stories: { id: string; authorName: string; content: string }[] = [];
  let fetchError = false;

  try {
    stories = await getStories();
  } catch {
    fetchError = true;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      {/* Header */}
      <section className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">
          Community
        </p>
        <h1 className="text-4xl font-bold">Stories</h1>
        <p className="text-base text-text-muted max-w-2xl mx-auto">
          Read stories shared by the community — thoughts, experiences, and
          lessons learned along the way.
        </p>
      </section>

      {/* Error State */}
      {fetchError && (
        <div className="glass-card p-8 text-center space-y-3">
          <div className="w-14 h-14 mx-auto rounded-full bg-red-500/15 flex items-center justify-center">
            <svg
              className="w-7 h-7 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-sm text-slate-400">
            Could not load stories right now. Please try again later.
          </p>
        </div>
      )}

      {/* Empty State */}
      {!fetchError && stories.length === 0 && (
        <div className="glass-card p-12 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-primary-light"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
          <h2 className="text-lg font-semibold">No stories yet</h2>
          <p className="text-sm text-text-muted">
            Be the first to share a story with the community.
          </p>
          <Link
            href="/stories/create-story"
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-light"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Write the First Story
          </Link>
        </div>
      )}

      {/* Stories Grid */}
      {!fetchError && stories.length > 0 && (
        <section className="grid gap-6">
          {stories.map((story) => (
            <article
              key={story.id}
              className="glass-card p-6 space-y-4 transition-all duration-200 hover:border-slate-600 group"
            >
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                  {story.authorName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    {story.authorName}
                  </p>
                </div>
              </div>

              {/* Content Preview */}
              <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                {story.content}
              </p>

              {/* Read More */}
              <Link
                href={`/stories/${story.id}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary-light transition-colors hover:text-primary group-hover:underline"
              >
                Read full story
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}
