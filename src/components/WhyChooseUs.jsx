import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { whyChooseUs } from "../data/content";
import { SectionHeading } from "./Services";

export default function WhyChooseUs() {
  const [ref, visible] = useReveal();

  return (
    <section className="relative py-28 md:py-36 bg-depth overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-violet/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Deep Sites"
          title="The difference is in how we work"
          subtitle="Not just what we build, but how we get there with you."
        />

        <div ref={ref} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChooseUs.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl glass-strong p-6 transition-all duration-300 hover:-translate-y-1.5"
            >
              <w.icon size={20} className="text-cyan-soft" />
              <h3 className="mt-4 font-display text-base font-medium text-fog">{w.title}</h3>
              <p className="mt-2 text-sm text-mist leading-relaxed">{w.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
