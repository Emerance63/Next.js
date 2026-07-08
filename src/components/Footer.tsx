export default function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-lg font-bold text-primary-light mb-2">MyJourney</p>
        <p className="text-slate-400 text-sm mb-4">
          Documenting my learning journey in web development.
        </p>
        <p className="text-slate-500 text-xs">
          © {new Date().getFullYear()} MyJourney. Built with Next.js &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
