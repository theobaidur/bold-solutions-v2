/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    // Gradient from colors
    'from-primary',
    'from-purple-600',
    'from-blue-600',
    'from-cyan-600',
    'from-emerald-600',
    'from-teal-600',
    'from-orange-600',
    'from-amber-600',
    'from-red-600',
    'from-pink-600',
    // Gradient to colors
    'to-purple-600',
    'to-cyan-600',
    'to-blue-600',
    'to-teal-600',
    'to-amber-600',
    'to-pink-600',
    // Accent colors with opacity
    'from-primary/20',
    'from-blue-500/20',
    'from-cyan-500/20',
    'from-emerald-500/20',
    'from-orange-500/20',
    'from-red-500/20',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d4145a',
        secondary: '#1e293b',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
