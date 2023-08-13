module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f1f2f4",
          200: "#eaeaea",
          300: "#e0e0e0",
          500: "#9e9e9e",
          700: "#666666",
          900: "#212121",
          "900_01": "#111112",
          "100_01": "#f0f2f5",
          "500_01": "#a9a9a9",
        },
        blue: { "800_cc": "#1c41d6cc" },
        green: { 600: "#2ca24c" },
        amber: { A400: "#ffc200" },
        black: { 900: "#000000", "900_1e": "#0000001e" },
        indigo: { A700: "#2a55e5" },
        blue_gray: { 900: "#333333" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { productsans: "Product Sans", inter: "Inter" },
      boxShadow: { bs: "0px 1px  4px 0px #0000001e" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
