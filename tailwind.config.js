/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F3F5F0",
          dim: "#EAEDE5",
        },
        ink: {
          DEFAULT: "#132420",
          soft: "#3C4B46",
        },
        core: {
          50: "#EAF2F0",
          100: "#CFE2DD",
          200: "#9FC5BB",
          300: "#6BA598",
          400: "#3D8375",
          500: "#1C4D46",
          600: "#173F3A",
          700: "#12312D",
          800: "#0D2320",
          900: "#081613",
        },
        move: {
          DEFAULT: "#E1592E",
          light: "#F0895F",
          dark: "#B8431F",
        },
        stone: {
          DEFAULT: "#8A8F86",
          light: "#C7CCC2",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      boxShadow: {
        card: "0 2px 24px -8px rgba(19, 36, 32, 0.18)",
        lift: "0 18px 40px -12px rgba(19, 36, 32, 0.28)",
      },
      borderRadius: {
        blob: "63% 37% 54% 46% / 55% 48% 52% 45%",
      },
      keyframes: {
        draw: {
          to: { strokeDashoffset: 0 },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.5, transform: "scale(1.4)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
