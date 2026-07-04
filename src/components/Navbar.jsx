import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#showcase" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-depth" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight">
            <svg width="26" height="26" viewBox="0 0 64 64">
              <defs>
                <linearGradient id="navGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#7C5CFF" />
                  <stop offset="1" stopColor="#22D3EE" />
                </linearGradient>
              </defs>
              <path d="M16 40 L32 16 L48 40 L32 48 Z" fill="none" stroke="url(#navGrad)" strokeWidth="3" opacity="0.5" />
              <path d="M16 48 L32 28 L48 48 L32 56 Z" fill="url(#navGrad)" />
            </svg>
            <span className="text-fog">Deep<span className="text-gradient">Sites</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-mist hover:text-fog transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-violet to-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative inline-flex items-center px-5 py-2.5 rounded-xl bg-grad-primary text-sm font-medium text-white shadow-glow hover:shadow-glow-cyan transition-shadow duration-300"
            >
              Start a Project
            </a>
          </div>

          <button
            className="md:hidden text-fog"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-6 mt-2 rounded-2xl glass-strong px-6 py-6 flex flex-col gap-4"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-mist hover:text-fog text-sm">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-5 py-2.5 rounded-xl bg-grad-primary text-sm font-medium text-white"
            >
              Start a Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
