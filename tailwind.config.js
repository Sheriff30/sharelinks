/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        activeShadow: "0 0 32px 0 rgba(99, 60, 255, 0.25)",
      },
      width: {
        full: "100dvw",
      },
      height: {
        full: "100dvh",
      },
      colors: {
        primary: {
          default: "#633CFF",
          light: "#BEADFF",
          extraLight: "#EFEBFF",
        },
        neutral: {
          dark: "#333333",
          medium: "#737373",
          light: "#D9D9D9",
          extraLight: "#FAFAFA",
        },
        offwhite: "#EEEEEE",
        white: "#FFFFFF",
        error: "#FF3939",
      },
    },
  },
  plugins: [],
};
