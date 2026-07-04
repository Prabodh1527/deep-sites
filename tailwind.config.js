/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#05070D",
        abyss: "#0A0E1A",
        depth: "#0F1629",
        surface: "#131B33",
        mist: "#8B93A8",
        fog: "#F3F5FC",
        violet: {
          DEFAULT: "#7C5CFF",
          soft: "#A78BFA",
          deep: "#5B3FE0",
        },
        cyan: {
          DEFAULT: "#22D3EE",
          soft: "#67E8F9",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Manrope'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #7C5CFF 0%, #22D3EE 100%)",
        "grad-radial-violet": "radial-gradient(circle at 30% 20%, rgba(124,92,255,0.35), transparent 60%)",
        "grad-radial-cyan": "radial-gradient(circle at 70% 80%, rgba(34,211,238,0.25), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124,92,255,0.35)",
        "glow-cyan": "0 0 40px rgba(34,211,238,0.3)",
        depth: "0 20px 60px -15px rgba(0,0,0,0.6)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 14s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        gradient: "gradient 8s ease infinite",
        blob: "blob 12s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-24px) translateX(10px)" },
        },
        gradient: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blob: {
          "0%,100%": { borderRadius: "42% 58% 65% 35% / 45% 40% 60% 55%" },
          "50%": { borderRadius: "60% 40% 35% 65% / 55% 60% 40% 45%" },
        },
      },
    },
  },
  plugins: [],
};
