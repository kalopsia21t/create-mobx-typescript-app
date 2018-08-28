const CSS_LOADER = {
    loader: 'css-loader',
    options: {
        modules: true,
        localIdentName: '[name]__[local]--[hash:base64:5]'
    }
};

const LESS_LOADER = {
    loader: 'less-loader'
};

const AWESOME_TS_LOADER = {
    loader: 'awesome-typescript-loader',
    options: {
        useCache: true,
        forceIsolatedModules: true,
    }
}

module.exports = {
    CSS_LOADER,
    LESS_LOADER,
    AWESOME_TS_LOADER
}