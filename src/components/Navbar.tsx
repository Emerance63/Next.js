"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/stories", label: "Stories" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-slate-800 border-b border-slate-700 relative z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary-light">
          MyJourney
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <ul className="flex items-center gap-2">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-slate-400 hover:text-white hover:bg-slate-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Add Story Button */}
          <Link
            href="/stories/create-story"
            className="ml-2 flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
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
            Add Story
          </Link>
        </div>

        {/* Mobile: Add Story + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/stories/create-story"
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-r from-primary to-secondary text-white transition-all duration-200 hover:opacity-90"
            aria-label="Add Story"
          >
            <svg
              className="w-5 h-5"
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
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors duration-200"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {/* Animated hamburger / X icon */}
            <div className="relative w-5 h-5">
              <span
                className={`absolute left-0 block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "top-[9px] rotate-45"
                    : "top-[3px] rotate-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
              />
              <span
                className={`absolute left-0 block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "top-[9px] -rotate-45"
                    : "top-[15px] rotate-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-16 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`absolute left-0 right-0 top-16 bg-slate-800 border-b border-slate-700 shadow-2xl shadow-black/30 transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-slate-400 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}

          {/* Mobile Add Story */}
          <li className="mt-2 pt-3 border-t border-slate-700">
            <Link
              href="/stories/create-story"
              className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
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
              Add Story
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
