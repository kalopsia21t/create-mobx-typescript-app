const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const PLUGINS = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.WatchIgnorePlugin([
        /css\.d\.ts$/
    ]),
    new CheckerPlugin(),
    new HardSourceWebpackPlugin()
]

module.exports = {
    PLUGINS
}