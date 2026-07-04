import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            <svg width="72" height="72" viewBox="0 0 64 64">
              <defs>
                <linearGradient id="loaderGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#7C5CFF" />
                  <stop offset="1" stopColor="#22D3EE" />
                </linearGradient>
              </defs>
              {[0, 1, 2].map((i) => (
                <motion.path
                  key={i}
                  d={`M16 ${40 - i * 4} L32 ${16 - i * 4 + i * 4} L48 ${40 - i * 4} L32 ${48 - i * 4} Z`}
                  fill="none"
                  stroke="url(#loaderGrad)"
                  strokeWidth="2.5"
                  initial={{ opacity: 0.15, scale: 0.85 }}
                  animate={{ opacity: [0.15, 1, 0.15], scale: [0.85, 1, 0.85] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                />
              ))}
            </svg>
            <motion.p
              className="font-mono text-xs tracking-[0.35em] text-mist uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Deep Sites
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
