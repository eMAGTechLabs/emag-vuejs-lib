const config = require('./webpack.config.js')

config.entry = {
  'emag-vuejs-lib': './src/components/components.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'EmagVueLib',
  libraryTarget: 'umd'
}

module.exports = config