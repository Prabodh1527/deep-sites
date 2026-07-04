import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" ref={ref} className="relative py-28 md:py-36 bg-abyss overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-xs tracking-[0.3em] text-cyan-soft uppercase">Who We Are</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-fog leading-tight">
            A studio built for businesses that are still writing their story.
          </h2>
          <p className="mt-6 text-mist leading-relaxed">
            Deep Sites exists for the businesses in motion — the ones opening their first
            location, launching a new service, or finally ready to look as good online as
            they do in person. We combine considered design with practical automation, so
            your website doesn't just look impressive, it actually does work for you.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl glass p-6 gradient-border">
              <Eye className="text-violet-soft" size={22} />
              <h3 className="mt-4 font-display font-medium text-fog">Our Vision</h3>
              <p className="mt-2 text-sm text-mist leading-relaxed">
                A future where every growing business has a digital presence as capable
                and considered as any global brand.
              </p>
            </div>
            <div className="rounded-2xl glass p-6 gradient-border">
              <Target className="text-cyan-soft" size={22} />
              <h3 className="mt-4 font-display font-medium text-fog">Our Mission</h3>
              <p className="mt-2 text-sm text-mist leading-relaxed">
                To design and build digital experiences and automation that are genuinely
                tailored — never generic, never templated.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[420px]"
        >
          <AboutIllustration />
        </motion.div>
      </div>
    </section>
  );
}

function AboutIllustration() {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="absolute h-72 w-72 rounded-full bg-violet/20 blur-3xl animate-float-slow" />
      <div className="absolute h-56 w-56 rounded-full bg-cyan/20 blur-3xl animate-float" style={{ right: "10%", bottom: "5%" }} />
      <svg viewBox="0 0 400 400" className="relative w-full max-w-md">
        <defs>
          <linearGradient id="aboutGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7C5CFF" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={80 + i * 18}
            y={70 + i * 26}
            width={240 - i * 36}
            height={150 - i * 12}
            rx="16"
            fill="none"
            stroke="url(#aboutGrad)"
            strokeWidth="1.4"
            opacity={0.9 - i * 0.18}
          />
        ))}
        <circle cx="200" cy="200" r="6" fill="url(#aboutGrad)" />
      </svg>
    </div>
  );
}
