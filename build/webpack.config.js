const webpack = require('webpack')
const path = require('path')

module.exports = {
  resolve: {
    extensions: ['', '.js', '.vue'],
    root: path.resolve('./'),
    alias: {
      vue: 'vue/dist/vue.js',
      components: path.resolve(__dirname, '../src/')
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?root=./docs/'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        query: {
          name: '/static/css/fonts/[name].[ext]',
          emitFile: false
        }
      },
      {
        test: /\.(jpe?g|png|gif|ico|tiff|bmp)$/,
        loader: 'file-loader',
        query: {
          name: '/static/css/icons/[name].[ext]',
          emitFile: false
        }
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  devtool: 'source-map'
}


if (process.env.NODE_ENV === 'production') {
  delete module.exports.devtool;
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
