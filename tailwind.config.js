module.exports = {
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#3257f3", // buttons
      yellow: "#ffd134", // flags
      gray: "#bcbcc4", // actions drop down and column titles
      darkGray: "#f3f6fc", // background color
      red: "#e65261", // ready payouts text
      green: "#00c27c", // revenue generated text
      lightBlue: "#2585fc", // breakdown text
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
};
