/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bh-burgundy': '#6B1D3E',
        'bh-gold': '#C4A55A',
        'bh-cream': '#F5F0E8',
        'bh-charcoal': '#2A2A2A',
        'bh-slate': '#4A4A4A',
        'robin-navy': '#0D1B2A',
        'robin-accent': '#D4A853',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
