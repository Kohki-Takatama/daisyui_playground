/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
module.exports = {
  content: ['./src/*.{html,js,ejs}', './views/*.{html,js,ejs}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
