/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        default: "0.5rem",
      },
    },
    extend: {
      colors: {
        primary: "#1C5D99",
        secondary: "#639FAB",
        third: "#BBCDE5",
        "custom-black": "#222222",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#3EC3DC",
          "primary-focus": "#05ABCA",
          "primary-content": "#FFFFFF",
          secondary: "#2761BA",
          "secondary-focus": "#234B88",
          "secondary-content": "#EAF0FB",
          accent: "#E55E19",
          "accent-focus": "#C75216",
          "accent-content": "#FCEFE8",
        },
      },
    ],
  },
};
