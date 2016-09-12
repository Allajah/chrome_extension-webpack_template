var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path')
var plugins = [];

module.exports = {
 entry: __dirname + '/src/scripts/main.js',
 output: {
  path: path.join(__dirname, 'dist'),
  filename: 'bundle.js'
 },
 module: {
  loaders: [
  {
   loader: 'babel-loader',
   include: [
    path.resolve(__dirname, 'src/scripts')
   ],
   query: {
    presets: ['es2015']
   },
   exclude: [
    path.resolve(__dirname, 'node_modules')
   ]
  },
  {
   test: /\.pug$/,
   loader: 'pug'
  },
  {
   test: /\.scss$/,
   loaders: ['style', 'css', 'sass']
  }
  ]
 },
 resolve: {
  modulesDirectories: ['node_modules']
 },
 plugins: [
  new CopyWebpackPlugin([
    {from: __dirname + '/src/manifest.json', to:__dirname + '/dist/manifest.json'},
    {from: __dirname + '/src/img', to: __dirname + '/dist/img'}
  ]),
  new HtmlWebpackPlugin(
    {filename: 'popup.html', template: __dirname + '/src/popup.pug'}
  )
 ]
}

