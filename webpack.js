const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'production',
    entry: {
        main: ['./src/_bundle/scripts/main/main.js'],
        markdown: './src/_bundle/styles/markdown.css',
    },
    plugins: [new MiniCssExtractPlugin({ filename: "[name].bundle.css" })],
    output: {
        path: path.resolve(__dirname, 'dist', 'assets'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
          {
            test: /\.njk$/i,
            use: 'raw-loader',
          },
          {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: {
                                tailwindcss: {},
                                autoprefixer: {},
                                cssnano: {}
                            },
                        },
                    },
                }
            ]
          }
        ],
    },
};
