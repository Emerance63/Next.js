"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogSidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/blog", label: "📋 All Posts" },
    { href: "/blog/frontend", label: "🎨 Frontend" },
    { href: "/blog/backend", label: "⚙️ Backend" },
    { href: "/blog/mobile", label: "📱 Mobile Dev" },
  ];

  return (
    <aside className="w-full md:w-56 shrink-0">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 className="text-xs font-semibold text-slate-400 uppercase mb-4">
          Categories
        </h3>
        <ul className="flex flex-col gap-1">
          {links.map((link) => {
            const isActive =
              link.href === "/blog"
                ? pathname === "/blog"
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium ${
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
      </div>
    </aside>
  );
}
