import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Send, MapPin, CheckCircle2 } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { contacts } from "../data/content";
import { SectionHeading } from "./Services";

export default function Contact() {
  const [ref, visible] = useReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-abyss overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-violet/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something that fits your business"
          subtitle="Tell us a little about what you need — we'll follow up with next steps."
        />

        <div ref={ref} className="mt-16 grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 rounded-2xl glass-strong p-7 sm:p-9 gradient-border"
          >
            {submitted ? (
              <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={48} className="text-cyan-soft" />
                <h3 className="mt-5 font-display text-xl font-medium text-fog">Message sent</h3>
                <p className="mt-2 text-mist max-w-sm">
                  Thanks for reaching out. We'll get back to you shortly to talk through your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" placeholder="Your name" required />
                  <Field label="Phone Number" placeholder="Your number" type="tel" required />
                </div>
                <Field label="Email Address" placeholder="you@business.com" type="email" required />
                <Field label="Tell us about your project" placeholder="What are you looking to build?" textarea required />
                <button
                  type="submit"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-grad-primary px-7 py-3.5 font-medium text-white shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Send Message
                  <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="rounded-2xl glass p-7 gradient-border">
              <h3 className="font-display text-lg font-medium text-fog mb-5">Reach us directly</h3>
              <div className="space-y-5">
                {contacts.map((c) => (
                  <div key={c.phone} className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm text-fog font-medium">{c.name}</p>
                      <p className="text-xs text-mist font-mono mt-0.5">+91 {c.phone}</p>
                    </div>
                    <div className="flex gap-2 flex-none">
                      <a
                        href={`tel:+91${c.phone}`}
                        aria-label={`Call ${c.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-cyan-soft hover:text-fog transition-colors"
                      >
                        <Phone size={16} />
                      </a>
                      <a
                        href={`https://wa.me/91${c.phone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`WhatsApp ${c.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-violet-soft hover:text-fog transition-colors"
                      >
                        <MessageCircle size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex-1 min-h-[200px] rounded-2xl glass overflow-hidden gradient-border flex items-center justify-center">
              <div className="absolute inset-0 opacity-30 bg-grad-radial-violet" />
              <div className="relative flex flex-col items-center text-mist">
                <MapPin size={28} className="text-cyan-soft" />
                <span className="mt-2 text-sm">Map location available on request</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text", textarea = false, required = false }) {
  const Comp = textarea ? "textarea" : "input";
  return (
    <label className="block">
      <span className="text-xs text-mist mb-2 block">{label}</span>
      <Comp
        type={textarea ? undefined : type}
        placeholder={placeholder}
        required={required}
        rows={textarea ? 4 : undefined}
        className="w-full rounded-xl bg-surface/60 border border-white/10 px-4 py-3 text-sm text-fog placeholder:text-mist/60 outline-none focus:border-violet-soft/60 transition-colors resize-none"
      />
    </label>
  );
}
