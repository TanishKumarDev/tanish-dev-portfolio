module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0A192F',  // Dark blue
        secondary: '#112240', // Slightly lighter blue
        accent: '#64FFDA',   // Cyan accent
        text: {
          primary: '#E6F1FF',  // White-ish
          secondary: '#8892B0', // Muted blue-gray
        },
        dark: {
          100: '#0A192F',
          200: '#112240',
          300: '#1E3A5F'
        }
      }
    }
  },
  plugins: [],
}