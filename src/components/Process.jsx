import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { process } from "../data/content";
import { SectionHeading } from "./Services";

export default function Process() {
  const [ref, visible] = useReveal({ threshold: 0.05 });

  return (
    <section id="process" className="relative py-28 md:py-36 bg-abyss">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="How We Work"
          title="A clear, seven-step path from idea to launch"
          subtitle="You'll always know exactly what stage your project is at."
        />

        <div ref={ref} className="mt-20 relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-violet via-cyan to-transparent opacity-40 sm:left-[31px]" />

          {process.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -24 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex gap-6 sm:gap-8 pb-12 last:pb-0"
            >
              <div className="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 flex-none items-center justify-center rounded-2xl glass-strong font-display font-semibold text-gradient text-lg gradient-border">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="pt-2">
                <h3 className="font-display text-lg sm:text-xl font-medium text-fog">{step.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-mist leading-relaxed max-w-xl">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
