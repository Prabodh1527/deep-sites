import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ChevronDown } from "lucide-react";
import DepthField from "./DepthField";

const stats = [
  { value: "01", label: "Consultation to launch, one clear path" },
  { value: "100%", label: "Custom-built, zero recycled templates" },
  { value: "24/7", label: "AI systems that never clock out" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-abyss" />
      <div className="absolute inset-0 bg-grad-radial-violet" />
      <div className="absolute inset-0 bg-grad-radial-cyan" />
      <DepthField />
      <div className="absolute inset-0 bg-noise" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-6xl px-6 text-center"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-8 font-mono text-xs tracking-wider text-cyan-soft"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
          Reason. Build. Scale.
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-semibold text-[2.6rem] leading-[1.08] sm:text-6xl md:text-7xl tracking-tight text-fog"
        >
          Building Modern Digital
          <br />
          <span className="text-gradient">Experiences</span> for Growing
          <br />
          Businesses.
        </motion.h1>

        <motion.p variants={item} className="mx-auto mt-7 max-w-2xl text-base sm:text-lg text-mist leading-relaxed">
          We help businesses establish a powerful online presence through beautiful websites,
          AI-powered automation, intelligent chatbots, appointment systems, and digital
          solutions tailored to their needs.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-grad-primary bg-[length:200%_200%] animate-gradient px-7 py-3.5 font-medium text-white shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#showcase"
            className="group inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 font-medium text-fog transition-colors duration-300 hover:border-violet-soft/60"
          >
            <PlayCircle size={18} className="text-cyan-soft" />
            View Our Work
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 rounded-2xl glass px-6 py-8 gradient-border"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="font-display text-3xl font-semibold text-gradient">{s.value}</div>
              <div className="mt-1 text-xs text-mist leading-snug">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-mist"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={26} />
      </motion.a>
    </section>
  );
}
