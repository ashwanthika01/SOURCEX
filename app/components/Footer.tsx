export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div>© {new Date().getFullYear()} SourceX Technologies.</div>
        <div className="flex gap-4">
          <a href="#top" className="hover:text-emerald-300">
            Back to top
          </a>
          <span className="hidden sm:inline">·</span>
          <a href="#" className="hover:text-emerald-300">
            Imprint
          </a>
          <a href="#" className="hover:text-emerald-300">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
