/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {},
};
module.exports = {
  plugins: {
      tailwindcss: {},
      autoprefixer: {},
  },
};
