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

const TSLINT_LOADER = {
    loader: 'tslint-loader',
    options: {
        emitErrors: true
    }
};

module.exports = {
    CSS_LOADER,
    LESS_LOADER,
    AWESOME_TS_LOADER,
    TSLINT_LOADER
}