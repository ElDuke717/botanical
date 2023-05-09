const path = require('path');

// webpack file configuration based on build-tools unit
module.exports = {
    // main react file where app resides
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
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
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader"
                ]
            }
        ],
      },
      plugins: [new HtmlWebpackPlugin({
        template: 'index.html'
      })],
      devServer: {
        static: {
          directory: path.join(__dirname, 'client/index.js'),
          publicPath: 'http://localhost:8080/',
        },
      },
    };
