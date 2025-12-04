// <CHANGE> Added autoprefixer for better CSS compatibility in production
/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
