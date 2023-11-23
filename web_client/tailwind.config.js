/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: "var(--logo-font-family)",
        regular: "var(--regular-font-family)",
      },
    },
  },
  plugins: [],
}
