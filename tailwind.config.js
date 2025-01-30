// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind looks in your source files
  ],
  theme: {
    extend: {
      animation: {
        "fade-in-left": "fadeInLeft 1s ease-in-out forwards",
        "typing": "typing 3s steps(30, end) 1 normal forwards",
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};  