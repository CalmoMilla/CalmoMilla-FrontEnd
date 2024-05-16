/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      calistoga : ["var(--font-calistoga)"],
      nunito: ["var(--font-nunito)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
      }
    },
  },
  plugins: [],
};
