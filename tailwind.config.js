/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: '420px',  
      xm:'480px',
      xs: '540px',
      sm: '640px',
      cz: '664px',
      md: '768px',
      cs:'953px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
    },
  },
  plugins: [],
}

