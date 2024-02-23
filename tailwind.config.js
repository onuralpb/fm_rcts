/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        //Dark Blue (Dark Mode Elements)
        darkBlue: "hsl(209, 23%, 22%)",

        //Very Dark Blue (Dark Mode Background)
        veryDarkBlue: "hsl(207, 26%, 17%)",

        //Very Dark Blue (Light Mode Text)
        veryDarkBlue2: "hsl(200, 15%, 8%)",

        //Dark Gray (Light Mode Input)
        darkGray: "hsl(0, 0%, 52%)",

        //Very Light Gray (Light Mode Background)
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        sans: ["var(--font-nunito)"],
      },
      boxShadow: {
        "3xl": "0px 4px 12px rgba(0, 0, 0, 0.1)",
        "4xl": "0px 2px 8px 0px rgba(99, 99, 99, 0.2)",
        "5xl": "0px 2px 8px 0px  rgb(37 37 37)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "25px",
        sm: "20px",
      },
    },
  },

  plugins: [],
  darkMode: "class",
};
