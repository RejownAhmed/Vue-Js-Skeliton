/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.blade.php",
    "./src/**/*.js",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        danger: 'rgb(var(--color-danger) / <alpha-value>)',
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        'gray-default': 'rgb(var(--color-gray) / <alpha-value>)', // Components bg
        body: 'rgb(var(--color-body) / <alpha-value>)', // Body bg
        card: 'rgb(var(--color-card) / <alpha-value>)', // Components bg
        info: 'rgb(var(--color-info) / <alpha-value>)', // Components bg
        'gray-border': 'rgb(var(--color-border) / <alpha-value>)',
        'light-gray': 'rgb(var(--color-light-gray) / <alpha-value>)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'default': '12px',
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        default: "0 5px 20px 0 rgba(0,0,0,0.1)",
        primary:'0 10px 20px -10px var(--primary)',
        success:'0 10px 20px -10px var(--success)',
        secondary:'0 10px 20px -10px var(--secondary)',
        warning:'0 10px 20px -10px var(--warning)',
        danger:'0 10px 20px -10px var(--danger)',
      },
    },
    fontFamily: {
      sans: "var(--font-sans)",
    },
  },
  plugins: [
    // require('preline/plugin'),
  ],
};
