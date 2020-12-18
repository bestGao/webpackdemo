const Path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: () => {
        return new Promise((resolve) => {
            resolve({
                a: './src/app.js',
                b: './src/app2.js',
                c: "./src/app3.js"
            })
        })
    },
    // context: Path.resolve(__dirname, "src"),
    output: {
        // filename: 'bundle.js',
        path: Path.resolve(__dirname, './dist')
    },
    devServer: {
        contentBase: Path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
                // use: ['style-loader','css-loader?minimize']
            }
        ]
    },
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json'],
        alias: {
            components: Path.resolve(__dirname, "src/components"),
            "@": Path.resolve(__dirname, "src")
        }
    },
    plugins: [new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'Development',
    }),
    ],
}