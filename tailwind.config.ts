import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#05060a",
          800: "#0a0d16",
          700: "#11151f",
          600: "#1a1f2e",
        },
        electric: "#3b6bff",
        neon: "#a855f7",
        cyan: "#22d3ee",
        glow: "#7c9bff",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glass: "inset 0 1px 0 0 rgba(255,255,255,0.06), 0 20px 60px -20px rgba(59,107,255,0.35)",
        neon: "0 0 0 1px rgba(124,155,255,0.25), 0 0 40px -8px rgba(124,155,255,0.45)",
      },
      backgroundImage: {
        "aurora": "radial-gradient(60% 60% at 20% 10%, rgba(59,107,255,0.25), transparent 60%), radial-gradient(50% 50% at 85% 20%, rgba(168,85,247,0.22), transparent 60%), radial-gradient(60% 60% at 50% 100%, rgba(34,211,238,0.18), transparent 60%)",
        "grid": "linear-gradient(rgba(124,155,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,155,255,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
