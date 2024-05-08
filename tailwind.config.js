/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("flowbite/plugin")
],
  theme: {
    transitionDuration: {
      DEFAULT: '250ms'
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      desktop: "1200px",
    },
    fontSize: {
      sm: '0.8rem',
      md:['14px', '150%'],
      base: '1rem',
      "h3": ['24px', '34px'],
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    container: {
      center: true,
    },
    colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      tertiary: {
        DEFAULT: 'rgb(var(--t)/var(--tw-bg-opacity))!important;',
        content: 'rgb(var(--tc)/var(--tw-text-opacity))'
      },
      base: {
        DEFAULT: '#fff',
        100: 'rgb(var(--b1) / <alpha-value>)',
        content: {
          300: 'rgb(var(--bc3)/var(--tw-text-opacity))',
        },
        overlay: {
          "30":'rgb(var(--bo)/.3)'
        }
      },
      'promotion': {
        DEFAULT : ' rgb(var(--color-pbg)/var(--tw-bg-opacity))',
      },
    },
    extend: {
      backgroundImage: {
        "promotion-gradient": "linear-gradient(270deg,#f93920 -3.47%,#fe3464)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    // ...
    require('flowbite/plugin'),
  ],
};
