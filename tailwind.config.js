/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: "#89491F",
          dark: "#5E3115",
          darker: "#3E2010",
        },
        cream: {
          DEFAULT: "#FEF5E7",
          soft: "#F7EAD4",
        },
        orange: {
          DEFAULT: "#FAA73D",
          dark: "#E08F26",
        },
        line: "#E2CBAA",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.96) translateY(8px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        riseIn: "riseIn 0.7s cubic-bezier(0.22,1,0.36,1) both",
        popIn: "popIn 0.35s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};
