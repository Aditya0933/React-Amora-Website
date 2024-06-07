/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue: '#0066FE',
        buttonBackColor: '#0240DA',
      },height: {
        'custom-h': 'calc(100vh - 44px)',
      },
      boxShadow: {
        
        'custom': '0px 12px 38px, #0240DA 0px 15px 12px;',
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
