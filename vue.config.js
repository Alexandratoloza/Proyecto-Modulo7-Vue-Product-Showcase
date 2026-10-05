/* const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/Proyecto-Modulo7-Vue-Product-Showcase/'
      : '/'
}) */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Proyecto-Modulo7-Vue-Product-Showcase/'   // nombre exacto del repo
    : '/'
}
