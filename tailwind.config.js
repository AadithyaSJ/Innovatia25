export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kavoon: ["Kavoon", "cursive"],
        oi: ["Oi", "cursive"],
        righteous: ["Righteous", "cursive"],
        spicy: ["Spicy Rice", "cursive"],
        vt323: ["VT323", "monospace"],
        gloria: ["Gloria Hallelujah", "cursive"],
        rye: ["Rye", "cursive"],
      },
      colors: {
        neon: {
          orange: "#ff7b54",
          amber: "#ff9b54",
          cyan: "#67e8f9",
          lime: "#bef264",
        },
        base: {
          bg: "#0b0e13",
          panel: "#171b22",
        },
      },
      boxShadow: {
        neon: "0 0 10px rgba(255,123,84,.8), 0 0 20px rgba(255,94,47,.6)",
        cyan: "0 0 10px rgba(103,232,249,.8), 0 0 20px rgba(103,232,249,.6)",
      },
      keyframes: {
        flicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: 1 },
          "20%, 24%, 55%": { opacity: 0.6 },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        flicker: "flicker 2.5s infinite",
        scan: "scan 5s linear infinite",
      },
    },
  },
  plugins: [],
};