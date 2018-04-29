const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(env, options) {
    const isProduction = options.mode === "production";

    const config = {
        context: path.join(__dirname, "src"),
        entry: "./",
        mode: isProduction ? "production" : "development",
        devtool: isProduction ? "none" : "source-map",

        resolve: {
            extensions: [".js", ".jsx", ".css", ".scss"]
        },

        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        name: "commons",
                        chunks: "all",
                        minSize: 0,
                        minChunks: 2
                    }
                }
            }
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                    query: {
                        presets:['react']
                    }
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                      fallback: "style-loader",
                      use: "css-loader"
                    })
                },
                {
                    test: /\.(jpg|png|svg)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 25000,
                    },
                },
                {
                    test: /\.(scss)$/,
                    use: [{
                        loader: 'style-loader', // inject CSS to page
                    }, {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                    }, {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            plugins: function () { // post css plugins, can be exported to postcss.config.js
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }, {
                        loader: 'sass-loader' // compiles Sass to CSS
                    }]
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                title: "App",
                hash: true,
                template: path.resolve(__dirname, "./index.html")
            }),

            new ExtractTextPlugin("[name].css")
        ],

        devServer: {
            contentBase: "./dist"
        }
    };

    return config;
};
