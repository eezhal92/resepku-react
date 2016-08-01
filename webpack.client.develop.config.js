var webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3000,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      }, {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [ new webpack.HotModuleReplacementPlugin()]
}
