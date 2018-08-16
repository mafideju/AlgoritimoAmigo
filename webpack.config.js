const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // arquivo central js que vai receber todos os outros
  // arquivos js - esse é o Controller do MVC
  // Arquivos para onde convergem todos os outros arquivos javascript
  entry: ['babel-polyfill', './src/index.js'],

  // caminho de saida e nome do aquivo bundle
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    // mostra qual pasta alimentará o devServer
    contentBase: './public'
  },
  plugins: [
    // fazer o stream de um arquivo da src para um arquivo public
    new HtmlWebpackPlugin({
      // saida publica = filename
      filename: 'index.html',
      // entrada, de onde os dados srão resgatados
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
