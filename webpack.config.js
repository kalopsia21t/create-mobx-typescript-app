const path = require('path');
const { CSS_LOADER, LESS_LOADER, AWESOME_TS_LOADER } = require('./webpack/loaders'); 
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
            { test: /\.(css)$/, use: [{ loader: 'style-loader' }, CSS_LOADER] },            
            { test: /\.(less)$/, use: [{ loader: 'style-loader' }, CSS_LOADER, LESS_LOADER] }
        ]
    },
    
    resolve: {
        extensions: ['*', '.ts', '.tsx', ".js", ".jsx"]
    },

    plugins: PLUGINS
};