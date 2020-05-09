const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const withIstanbulLoader = !process.env.TEST_DEBUG && process.env.NODE_ENV === 'test'
const tsLoaderConf = {
  test: /\.tsx?/,
  exclude: /(node_modules|\.spec\.)/,
  use: [
    'babel-loader',
    'ts-loader'
  ]
}
const babelLoaderConf = {
  test: /\.jsx?/,
  exclude: /(node_modules|\.spec\.)/,
  use: [
    'babel-loader',
  ]
}
if(withIstanbulLoader){
  tsLoaderConf.use.unshift('@jsdevtools/coverage-istanbul-loader')
  babelLoaderConf.use.unshift('@jsdevtools/coverage-istanbul-loader')
}
module.exports = {
  mode: 'development',
  module: {
    rules: [
      tsLoaderConf,
      babelLoaderConf,
      {
        test: /\.spec\.tsx?/,
        include:[
          path.resolve(__dirname,'./test')
        ],
        use:[
          'babel-loader',
          'ts-loader'
        ]
      },
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