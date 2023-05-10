const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack file configuration based on build-tools unit
module.exports = {
    // main react file where app resides
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
        
    },
    mode: 'development', // development mode, production mode for deployment
    module: {
        rules: [
            {
              test: /\.jsx?/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ],
                }
            }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader"
                ]
            },
            {
                // this is needed so that images will render to the page
                test: /\.(woff(2)?|ttf|eot|svg|png|jpe?g|gif)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
              },
        ],
      },
      plugins: [new HtmlWebpackPlugin({
        template: 'index.html' // points to our index.html file where root element will feed in react components.
      })],
      devServer: {
        static: {
          directory: path.join(__dirname, 'client/index.js'),
          publicPath: 'http://localhost:8080/',
        },
      },
    };
