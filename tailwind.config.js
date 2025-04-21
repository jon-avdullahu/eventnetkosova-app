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
        primary: {
          50: "#e6f5ff",
          100: "#ccebff",
          200: "#99d6ff",
          300: "#66c2ff",
          400: "#33adff",
          500: "#0099ff", // primary color
          600: "#007acc",
          700: "#005c99",
          800: "#003d66",
          900: "#001f33",
        },
        secondary: {
          50: "#fbf5ff",
          100: "#f7ebff",
          200: "#efd7ff",
          300: "#e7c3ff",
          400: "#dfafff",
          500: "#d79bff", // secondary color
          600: "#ac7ccc",
          700: "#815d99",
          800: "#563e66",
          900: "#2b1f33",
        },
        accent: {
          50: "#e6fff5",
          100: "#ccffeb",
          200: "#99ffd7",
          300: "#66ffc2",
          400: "#33ffae",
          500: "#00ff9a", // accent color
          600: "#00cc7a",
          700: "#00995c",
          800: "#00663d",
          900: "#00331f",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}; 