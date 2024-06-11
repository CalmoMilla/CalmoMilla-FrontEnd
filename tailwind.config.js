/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      calistoga: ["var(--font-calistoga)"],
      nunito: ["var(--font-nunito)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "login-gradient":
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(227,227,227,1) 30%)",
      },
      colors: {
        amarelo1: "#FFCE55",
        amarelo2: "#F5AF00",
        branco: "#FFFFFF",
        roxo: "#8766A1",
        verde1: "#D4F47B",
        verde2: "#8ECD48",
        verdeagua: "#61B8AB",
        preto: "#000000",
      },
    },
    keyframes: {
      toCadastro: {
        "0%": {
          opacity: "1",
          transform: "translateX(0)",
        },
        "100%": {
          opacity: "0",
          transform: "translateX(200px)",
        },
      },
      toLogin: {
        "0%": {
          opacity: "1",
          transform: "translateX(0)",
        },
        "100%": {
          opacity: "0",
          transform: "translateX(-200px)",
        },
      },
    },
    animation: {
      toLogin: "toLogin 1s ease-in-out 0.1s ",
      toCadastro: "toCadastro 1s ease-in-out 0.1s", // Duração de 1 segundo, ease-in-out, e forwards
    },
  },
  plugins: [],
};
