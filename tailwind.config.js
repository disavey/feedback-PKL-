/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {},
    screens: {
      ssl: "300px",
      max: "710px",
      ssm: "500px"
    },
  },
  plugins: [],
}

