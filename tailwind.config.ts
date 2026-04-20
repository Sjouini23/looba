import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#080b14",
        panel: "#101726",
        accent: "#8b5cf6",
        accent2: "#22d3ee"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139, 92, 246, 0.3), 0 10px 30px rgba(3,7,18,0.6)"
      },
      animation: {
        pulseSoft: "pulseSoft 1s ease-in-out infinite"
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.03)", opacity: "0.85" }
        }
      }
    }
  },
  plugins: []
};

export default config;
