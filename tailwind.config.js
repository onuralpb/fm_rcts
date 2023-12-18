/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
    },
  },
  plugins: [],
  darkMode: "class",
};
