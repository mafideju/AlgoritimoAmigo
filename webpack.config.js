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
        use: [
          {
            loader: 'style-loader' // inject CSS to page
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS modules
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function() {
                // post css plugins, can be exported to postcss.config.js
                return [require('precss'), require('autoprefixer')];
              }
            }
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      // {
      //   test: /\.s?css$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true // webpack@2.x and newer
            }
          }
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
