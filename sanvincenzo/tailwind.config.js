import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      lg: '1024px',        // Tablet orizzontale (1024px)
      pc: '1200px',        // Desktop personalizzato (nuovo breakpoint)
      xl: '1280px',        // Desktop extra large
      '2xl': '1536px',     // Monitor molto grandi
    },
    extend: {
      fontFamily: {
        sans: ['Oswald', 'sans-serif'], // Aggiungi il tuo font
      },
    },
  },
  plugins: [],
});

