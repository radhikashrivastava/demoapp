/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{js,ts,jsx,tsx,html}"], // adjust to where your files are
    theme: {
      extend: {
        colors: {
          foreground: "#111827",          // main text color
          "muted-foreground": "#6B7280",  // secondary/muted text
        },
      },
    },
    plugins: [],
  };
  