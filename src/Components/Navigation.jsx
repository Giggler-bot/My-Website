import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* ── Main nav bar ── */}
      <nav className="w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm">
        <div className="w-full px-6 lg:px-16 xl:px-24 py-4 flex items-center justify-between">
          <a
            href="#"
            className="text-gray-900 dark:text-white text-lg sm:text-xl md:text-2xl font-bold tracking-tight"
          >
            Obed
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex space-x-8 text-gray-600 dark:text-gray-300 font-medium items-center">
            <li><a href="#about"className="hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors">About</a></li>
            <li><a href="#portfolio"className="hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors">Portfolio</a></li>
            <li><a href="#skills"className="hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors">Skills</a></li>
            <li><a href="#contact"className="hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-600 dark:text-slate-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div className="md:hidden">
        {/* Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 top-13 bg-black/30 dark:bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Drawer panel */}
        <div
          className={[
            "relative z-50 w-full dark:bg-gray-900 shadow-lg",
            "border-t border-gray-100 dark:border-gray-800",
            "transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0 pointer-events-none",
          ].join(" ")}
        >
          <div className="flex flex-col px-6 py-5 space-y-5 text-gray-600 dark:text-gray-300 font-medium text-lg">
            <a href="#about"onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#portfolio"onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="#skills"onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact"onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}