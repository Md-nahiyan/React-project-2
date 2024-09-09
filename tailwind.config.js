/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
        },
        animation: {
            'infinite-scroll': 'infinite-scroll 25s linear infinite',
        },
        keyframes: {
            'infinite-scroll': {
                from: { transform: 'translateX(0)' },
                to: { transform: 'translateX(-100%)' },
            }
        }                    
      },
    },
  plugins: [
    require('daisyui'),
    flowbite.plugin(),
  ],
}

