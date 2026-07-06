// Simple brand glyphs (lucide-react no longer ships brand icons in this version)
const Instagram = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const Linkedin = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <line x1="8" y1="11" x2="8" y2="16" />
    <line x1="8" y1="8" x2="8" y2="8" />
    <path d="M12 16v-3.2c0-1.5 1-2.3 2.2-2.3 1.2 0 1.8.8 1.8 2.3V16" />
  </svg>
);
const Twitter = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
    <path d="M4 4l7.5 9.5L4.5 20H7l5.2-5.3L16.5 20H20l-7.8-9.9L19.5 4H17l-4.7 4.8L8 4z" />
  </svg>
);
const Facebook = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
    <path d="M15 4h-2a4 4 0 0 0-4 4v2H7v3h2v7h3v-7h2.5l.5-3H12V8a1 1 0 0 1 1-1h2z" />
  </svg>
);

const columns = [
  {
    title: "Quick Links",
    links: [
      { label: "About", href: "#about" },
      { label: "Process", href: "#process" },
      { label: "Showcase", href: "#showcase" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Website Development", href: "#services" },
      { label: "AI Automation", href: "#services" },
      { label: "AI Chatbots", href: "#services" },
      { label: "Appointment Systems", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Industries We Serve", href: "#industries" },
      { label: "Why Choose Us", href: "#why" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/dev_ratio/", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="relative bg-void border-t border-white/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg">
              <svg width="24" height="24" viewBox="0 0 64 64">
                <defs>
                  <linearGradient id="footGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#7C5CFF" />
                    <stop offset="1" stopColor="#22D3EE" />
                  </linearGradient>
                </defs>
                <path d="M16 40 L32 16 L48 40 L32 48 Z" fill="none" stroke="url(#footGrad)" strokeWidth="3" opacity="0.5" />
                <path d="M16 48 L32 28 L48 48 L32 56 Z" fill="url(#footGrad)" />
              </svg>
              <span className="text-fog">RATIO</span>
            </a>
            <p className="mt-5 text-sm text-mist leading-relaxed max-w-xs">
              Building modern digital experiences for growing businesses — websites,
              automation, and AI, tailored to how you actually work.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-mist hover:text-fog transition-colors"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-medium text-fog mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-mist hover:text-cyan-soft transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mist">
          <p>© {new Date().getFullYear()} RATIO. All rights reserved.</p>
          <p>Designed &amp; built with depth.</p>
        </div>
      </div>
    </footer>
  );
}
