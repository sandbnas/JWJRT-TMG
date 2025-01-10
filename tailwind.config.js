/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: 'var(--beige)',
        gold: 'var(--gold)',
        carmine: 'var(--carmine)',
        orange: 'var(--orange)',
        brown: 'var(--brown)',
        'off-white': 'var(--off-white)',
        'light-gold': 'var(--light-gold)',
      },
    },
  },
  plugins: [],
}

