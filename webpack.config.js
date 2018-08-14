const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './source/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'web',
    watch: true,
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 100
    },

    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader' },
            { test: /\.less/, use: [{ loader: 'style-loader' }, { loader: 'css-loader'}, { loader: 'less-loader' }] }
        ]
    },
    
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};