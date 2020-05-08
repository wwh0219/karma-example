const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const withIstanbulLoader = !process.env.TEST_DEBUG && process.env.NODE_ENV === 'test'
const tsLoaderConf = {
  test: /\.ts?/,
  exclude: /(node_modules|\.spec\..*$)/,
  use: [
    'babel-loader',
    'ts-loader'
  ]
}
const babelLoaderConf = {
  test: /\.js?/,
  exclude: /(node_modules|\.spec\..*$)/,
  use: [
    'babel-loader',
  ]
}
if(withIstanbulLoader){
  tsLoaderConf.use.unshift('@jsdevtools/coverage-istanbul-loader')
  babelLoaderConf.use.unshift('@jsdevtools/coverage-istanbul-loader')
}
console.log(tsLoaderConf)
module.exports = {
  mode: 'development',
  module: {
    rules: [
      tsLoaderConf,
      babelLoaderConf,
      {
        test: /\.vue$/,
        loader: [
          'vue-loader'
        ]
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", '.js', '.jsx', '.vue']
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devtool: 'inline-source-map'
}