import { motion } from "framer-motion";
import { Eye, ShieldCheck, HandCoins, UserCheck } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { SectionHeading } from "./Services";

const pillars = [
  { icon: Eye, title: "Full Transparency", description: "You see exactly what you're paying for, before work begins." },
  { icon: HandCoins, title: "Reasonable Pricing", description: "Scoped sensibly for growing businesses, not enterprise budgets." },
  { icon: ShieldCheck, title: "No Hidden Charges", description: "What's agreed is what's billed. Nothing added later." },
  { icon: UserCheck, title: "Client-First Approach", description: "Every quote starts with your goals, not a fixed package." },
];

export default function PricingPhilosophy() {
  const [ref, visible] = useReveal();

  return (
    <section className="relative py-28 md:py-36 bg-abyss">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Our Pricing Philosophy"
          title="Every project is different, so every quote is too"
          subtitle="We don't publish fixed prices, because a landing page and a full booking system aren't the same job. Tell us what you need, and we'll give you a clear, honest number."
        />

        <div ref={ref} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl glass p-6 text-center gradient-border"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-grad-primary/20 border border-violet/30 text-violet-soft">
                <p.icon size={20} />
              </div>
              <h3 className="mt-5 font-display font-medium text-fog">{p.title}</h3>
              <p className="mt-2 text-sm text-mist leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
