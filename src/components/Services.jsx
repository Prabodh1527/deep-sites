import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { services } from "../data/content";

export default function Services() {
  const [ref, visible] = useReveal();

  return (
    <section id="services" className="relative py-28 md:py-36 bg-depth">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Services engineered for real business outcomes"
          subtitle="Every service is a building block — combine what you need, skip what you don't."
        />

        <div ref={ref} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl glass p-8 gradient-border transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-grad-primary/20 border border-violet/30 text-violet-soft transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-soft">
                <s.icon size={22} />
              </div>
              <h3 className="mt-6 font-display text-lg font-medium text-fog">{s.title}</h3>
              <p className="mt-3 text-sm text-mist leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs tracking-[0.3em] text-cyan-soft uppercase"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-fog leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-mist leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
