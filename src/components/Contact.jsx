
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { contacts } from "../data/content";
import { SectionHeading } from "./Services";

export default function Contact() {
  const [ref, visible] = useReveal();


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
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-3xl font-semibold text-fog">
                  Let's discuss your next project
                </h3>

                <p className="mt-5 text-mist leading-8">
                  Whether you need a business website, AI automation, chatbot,
                  appointment booking system, or a completely custom digital solution,
                  we're here to help.
                </p>

                <p className="mt-4 text-mist leading-8">
                  Share your requirements with us through a phone call, WhatsApp or
                  email. We'll understand your needs, discuss possible solutions, and
                  provide a free sample or consultation before moving ahead.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="rounded-xl bg-surface/50 border border-white/10 p-5">
                  <h4 className="text-fog font-semibold text-lg">
                    📞 Call Us
                  </h4>
                  <p className="text-mist text-sm mt-2">
                    Speak directly with our team regarding your project.
                  </p>
                </div>

                <div className="rounded-xl bg-surface/50 border border-white/10 p-5">
                  <h4 className="text-fog font-semibold text-lg">
                    💬 WhatsApp
                  </h4>
                  <p className="text-mist text-sm mt-2">
                    Get quick responses and discuss your ideas instantly.
                  </p>
                </div>

                <div className="rounded-xl bg-surface/50 border border-white/10 p-5">
                  <h4 className="text-fog font-semibold text-lg">
                    📧 Email
                  </h4>

                  <p className="text-mist text-sm mt-3 break-all">
                    gprabodhchandra@gmail.com
                  </p>

                  <p className="text-mist text-sm break-all">
                    diptipatra75588@gmail.com
                  </p>
                </div>

                <div className="rounded-xl bg-surface/50 border border-white/10 p-5">
                  <h4 className="text-fog font-semibold text-lg">
                    ⏰ Availability
                  </h4>

                  <p className="text-mist text-sm mt-2">
                    Monday – Saturday
                  </p>

                  <p className="text-mist text-sm">
                    10:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>
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

                <div className="relative flex flex-col items-center justify-center text-center px-8">
                  <MapPin size={30} className="text-cyan-soft" />

                  <h3 className="mt-4 text-fog font-display text-xl">
                    Serving Clients Across India
                  </h3>

                  <p className="mt-3 text-mist leading-7">
                    We work completely online and collaborate remotely with businesses,
                    startups, professionals and organizations across India to build modern
                    websites, AI automations and digital solutions.
                  </p>
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
