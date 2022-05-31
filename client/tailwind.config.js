module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkGray": "#222831",
        "lightGray": "#393E46",
        "lightBlue": "#00ADB5",
        "darkWhite": "#DDDDDD"
      },
      screens: {
        "ssm": "319px",
        "extraSM": "370px",
      },
      fontFamily: {
        "pers": ["Noto Serif", "serif"]
      }
    },
  },
  plugins: [],
}
