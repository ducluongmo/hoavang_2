/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '93vh': '93.3vh',
        '100vh': '100vh',
        '94vh': '94vh'
      },
      backgroundImage: {
        'content-img': "url('./asset/image/anh-sang-phong-tho\ \(1\).png')"
      },
      spacing: {
        'w5': '169px',
        '76': '304px',
        '23': '23px'
      },
      bottom: {
        '5w': '212px',
      },
      width: {
        '5w': '508px',
        '4w': '475px'
      },
      screens: {
        'ip': {'max': '415px'},
      }
    },
  },
  plugins: [],
}