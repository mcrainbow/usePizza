/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          main: "#0C0D07",
        },
        text: {
          primary: "#CFCFEA",
          secondary: "#E1CE7A",
          accent: "#EE6352",
          danger: "#B20D30",
        },
        buttons: {
          "bg-main": `#F0DF93`,
          "bg-success": "#70EE9C",
          "bg-danger": "#D00000",
        },
      },
    },
  },
  plugins: [],
};
