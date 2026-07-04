import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { showcase } from "../data/content";
import { SectionHeading } from "./Services";

const palettes = [
  ["#7C5CFF", "#22D3EE"],
  ["#22D3EE", "#7C5CFF"],
  ["#A78BFA", "#67E8F9"],
  ["#7C5CFF", "#67E8F9"],
  ["#67E8F9", "#5B3FE0"],
  ["#22D3EE", "#A78BFA"],
  ["#7C5CFF", "#22D3EE"],
];

function Mockup({ index }) {
  const [c1, c2] = palettes[index % palettes.length];
  const gid = `mockGrad${index}`;
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} stopOpacity="0.7" />
          <stop offset="1" stopColor={c2} stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" rx="14" fill="#0F1629" />
      <rect x="0" y="0" width="400" height="28" rx="14" fill="#131B33" />
      <circle cx="18" cy="14" r="3.5" fill="#7C5CFF" opacity="0.6" />
      <circle cx="30" cy="14" r="3.5" fill="#22D3EE" opacity="0.6" />
      <circle cx="42" cy="14" r="3.5" fill="#67E8F9" opacity="0.6" />
      <rect x="24" y="44" width="180" height="14" rx="4" fill={`url(#${gid})`} />
      <rect x="24" y="66" width="130" height="8" rx="4" fill="#8B93A8" opacity="0.4" />
      <rect x="24" y="90" width="90" height="26" rx="8" fill={`url(#${gid})`} />
      <rect x="24" y="140" width="110" height="80" rx="10" fill="#1A2340" />
      <rect x="145" y="140" width="110" height="80" rx="10" fill="#1A2340" />
      <rect x="266" y="140" width="110" height="80" rx="10" fill="#1A2340" />
      <rect x="34" y="150" width="90" height="8" rx="4" fill={`url(#${gid})`} opacity="0.8" />
      <rect x="155" y="150" width="90" height="8" rx="4" fill={`url(#${gid})`} opacity="0.8" />
      <rect x="276" y="150" width="90" height="8" rx="4" fill={`url(#${gid})`} opacity="0.8" />
    </svg>
  );
}

export default function Showcase() {
  const [ref, visible] = useReveal();

  return (
    <section id="showcase" className="relative py-28 md:py-36 bg-depth">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="OUR PORTFOLIO"
          title="Our work is just getting started"
          subtitle="This section will soon showcase real projects we've delivered."
        />

        <div
          ref={ref}
          className="mt-16 flex justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl rounded-3xl glass gradient-border p-12 text-center"
          >
            <h3 className="font-display text-3xl text-fog">
              🚀 Exciting Projects Coming Soon
            </h3>

            <p className="mt-6 text-mist leading-8">
              We're currently working with our first clients to build premium websites,
              AI automations, appointment systems, chatbots and business solutions.
              As each project is completed and approved by our clients, it will be
              showcased here.
            </p>

            <div className="mt-10 inline-flex rounded-full bg-grad-primary px-8 py-3 text-white font-medium">
              Portfolio Updates Coming Soon
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
