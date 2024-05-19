/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "primary-color": "#7650E3",
      // "primary-color": "#9a97ff",
      "secondary-color": "#F8F8FF",
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#003554",
          secondary: "#006494",
          accent: "#37cdbe",
          neutral: "#f6d860",
          "base-100": "white",
        },
      },
      "light",
      "dark",
    ],
  },

  plugins: [require("daisyui")],
};
