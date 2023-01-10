module.exports = {
  theme: {
    screens: {
      // Standard Breakpoints
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      // Custom breakpoints that offer greater flexibility when styling
      bp400: "400px",
      bp500: "500px",
      bp600: "600px",
      bp700: "700px",
      bp800: "800px",
      bp900: "900px",
      bp1000: "1000px",
      bp1100: "1100px",
      bp1200: "1200px",
      bp1300: "1300px",
      bp1400: "1400px",
      bp1500: "1500px",
      bp1600: "1600px",
    },
    colors: {
      blue: "#3257f3", // buttons
      lightBlue: "#2585fc", // breakdown text
      yellow: "#ffd134", // flags
      gray: "#bcbcc4", // actions drop down and column titles
      lightGray: "#dce4e4", // tabs component
      darkGray: "#f3f6fc", // background color
      red: "#e65261", // ready payouts text
      green: "#00c27c", // revenue generated text
      white: "#FFFFFF",
      // One off: checkbox blue #006bf8
    },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  // Install tailwind elements
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [require("tw-elements/dist/plugin")],
};
