/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "modal-fallback": "rgba(0,0,0,0.15)",
        "color-border": "#888",
        "modal-shadow": "rgba(0,0,0,0.19)",
      },
      keyframes: {
        "modal-slide": {
          // slide top
          from: { top: "100%", opacity: 0 },
          to: { top: "50%", opacity: 1 },
        },
      },
      animation: {
        "modal-slide": "modal-slide 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
