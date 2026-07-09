"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createStory } from "@/app/type/story";

export default function CreateStoryPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ authorName: "", content: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.authorName.trim() || !formData.content.trim()) {
      setError("Both fields are required.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await createStory(formData);
      setSuccess(true);
      setTimeout(() => {
        router.push("/stories");
      }, 1500);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const charCount = formData.content.length;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      {/* Header */}
      <section className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">
          Stories
        </p>
        <h1 className="text-4xl font-bold">Add a New Story</h1>
        <p className="text-base text-text-muted max-w-2xl mx-auto">
          Share your thoughts, experiences, or anything you&apos;d like others to
          read.
        </p>
      </section>

      {/* Success State */}
      {success && (
        <div className="glass-card p-8 text-center space-y-4 animate-fade-in">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-emerald-400">
            Story Published!
          </h2>
          <p className="text-sm text-text-muted">
            Redirecting you to all stories…
          </p>
        </div>
      )}

      {/* Form */}
      {!success && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="glass-card p-8 space-y-6">
            {/* Error Banner */}
            {error && (
              <div className="rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400 flex items-center gap-3">
                <svg
                  className="w-5 h-5 shrink-0"
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
                {error}
              </div>
            )}

            {/* Author Name */}
            <div className="space-y-2">
              <label
                htmlFor="authorName"
                className="block text-sm font-medium text-slate-300"
              >
                Author Name
              </label>
              <input
                id="authorName"
                name="authorName"
                type="text"
                placeholder="Enter your name"
                value={formData.authorName}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-600 bg-slate-800/60 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-slate-300"
                >
                  Your Story
                </label>
                <span className="text-xs text-slate-500">
                  {charCount} character{charCount !== 1 && "s"}
                </span>
              </div>
              <textarea
                id="content"
                name="content"
                rows={8}
                placeholder="Write your story here…"
                value={formData.content}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-600 bg-slate-800/60 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all duration-200 resize-y focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white text-center transition-all duration-200 hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting && (
                <svg
                  className="w-4 h-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              )}
              {isSubmitting ? "Publishing…" : "Publish Story"}
            </button>
            <Link
              href="/stories"
              className="rounded-xl border border-slate-600 px-8 py-3 text-sm font-semibold text-slate-300 text-center transition-all duration-200 hover:bg-slate-800 hover:border-slate-500"
            >
              Cancel
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}
