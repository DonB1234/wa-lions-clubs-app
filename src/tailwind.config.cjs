/** @type {import('tailwindcss').Config} */
module.exports = {
  // ⚡ Specify all files that may contain Tailwind class names
  content: [
    "./index.html",               // Your root HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // All JS/TS/JSX/TSX files in src
  ],
  theme: {
    extend: {
      // You can extend the default Tailwind theme here if needed
      // For example, custom colors, fonts, spacing, etc.
    },
  },
  plugins: [
    // You can add Tailwind plugins here if needed
    // Example: require('@tailwindcss/forms'),
  ],
};
