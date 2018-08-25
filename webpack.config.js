const path = require('path');
const { BABEL_LOADER, AWESOME_TS_LOADER } = require('./webpack/loaders'); 
const { PLUGINS } = require('./webpack/plugins');

module.exports = {
    mode: 'development',
    entry: './source/index.tsx',
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
    devtool: 'source-map',
    module: {
        rules: [
            { 
                test: /\.(tsx)$/,
                exclude: /node_modules/,
                use:[ AWESOME_TS_LOADER ]
            },
            
            { test: /\.less/, use: [{ loader: 'style-loader' }, { loader: 'css-loader'}, { loader: 'less-loader' }] }
        ]
    },
    
    resolve: {
        extensions: ['*', '.ts', '.tsx', ".js", ".jsx"]
    },

    plugins: PLUGINS
};