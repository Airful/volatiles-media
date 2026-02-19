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
        gold: {
          DEFAULT: "#C9A962",
          light: "#D4B97A",
          dark: "#B8962F",
          muted: "#8B7340",
          pale: "#C9A96280",
        },
        charcoal: {
          DEFAULT: "#111111",
          light: "#1A1A1A",
          card: "#141414",
        },
        silver: {
          DEFAULT: "#B3B3B3",
          light: "#D0D0D0",
          dark: "#808080",
          muted: "#666666",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Jost", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
        widest3: "0.5em",
      },
      maxWidth: {
        site: "1440px",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease forwards",
        "fade-up": "fadeUp 0.8s ease forwards",
        "scroll-bounce": "scrollBounce 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
