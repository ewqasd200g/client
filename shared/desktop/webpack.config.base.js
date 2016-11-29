// @flow
const fs = require('fs')
const webpack = require('webpack')
const path = require('path')
const getenv = require('getenv')

const babelConfig = JSON.parse(fs.readFileSync('./.babelrc', 'utf8'))

const defines = {
  '__HOT__': JSON.stringify(getenv.boolish('HOT', false)),
}

console.warn('Injecting defines: ', defines)

module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /(node_modules|\/dist\/)/,
      query: Object.assign({cacheDirectory: true}, babelConfig),
    }, {
      test: /\.json?$/,
      loader: 'json',
    }, {
      test: /\.(gif|png)$/,
      loader: 'null',
    }],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['', '.desktop.js', '.js', '.jsx', '.json', '.flow'],
  },
  plugins: [
    new webpack.DefinePlugin(defines),
  ],
  node: {
    __dirname: true,
  },
  entry: {
    index: ['./desktop/renderer/index.js'],
    main: ['./desktop/app/index.js'],
    launcher: ['./desktop/renderer/launcher.js'],
    'remote-component-loader': ['./desktop/renderer/remote-component-loader.js'],
  },
}
