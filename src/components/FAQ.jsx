import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { faqs } from "../data/content";
import { SectionHeading } from "./Services";

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl glass overflow-hidden gradient-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base sm:text-lg font-medium text-fog">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-none text-cyan-soft"
        >
          <Plus size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="px-6 pb-6 text-sm sm:text-base text-mist leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, visible] = useReveal();

  return (
    <section id="faq" className="relative py-28 md:py-36 bg-depth">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Questions & Answers"
          title="Frequently asked questions"
          subtitle="Can't find what you're looking for? Reach out and we'll answer directly."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-14 space-y-4"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
