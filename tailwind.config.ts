import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0B4FA2",
          navy: "#102A56",
          lightBg: "#F8FAFC",
          altBg: "#F1F5F9",
          border: "#E2E8F0",
        },
        category: {
          personal: "#DC2626", // Red
          car: "#159447",      // Green
          business: "#EAB308", // Yellow/Gold
          transfer: "#0B4FA2", // Blue
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        handwriting: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(16, 42, 86, 0.04)",
        card: "0 4px 20px rgba(16, 42, 86, 0.06)",
        cardHover: "0 12px 30px rgba(11, 79, 162, 0.12)",
        floating: "0 20px 40px rgba(16, 42, 86, 0.14)",
      },
      borderRadius: {
        custom: "14px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        pulseSlow: "pulseSlow 3s ease-in-out infinite",
        marquee: "marquee 35s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
