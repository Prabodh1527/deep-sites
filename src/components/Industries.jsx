import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { industries } from "../data/content";
import { SectionHeading } from "./Services";

export default function Industries() {
  const [ref, visible] = useReveal();

  return (
    <section id="industries" className="relative py-28 md:py-36 bg-abyss">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Who We Work With"
          title="Built for businesses at every stage"
          subtitle="Whatever category you fall into, the approach stays the same: understand the business first, design second."
        />

        <div ref={ref} className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl glass px-5 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-violet-soft transition-colors duration-300 group-hover:text-cyan-soft">
                <ind.icon size={20} />
              </div>
              <span className="text-sm text-mist group-hover:text-fog transition-colors">{ind.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
