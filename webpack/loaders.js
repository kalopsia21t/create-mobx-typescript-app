const { BABEL_PRESETS } = require('../babel/babel-presets');

const CSS_LOADER = {
    loader: 'css-loader',
    options: {
        modules: true,
        localIdentName: '[name]__[local]--[hash:base64:5]'
    }
};

const CSS_LOADER_WITH_TYPES = {
    loader: 'typings-for-css-modules-loader',
    options: {
        modules: true,
        namedExport: true
    }
}

const LESS_LOADER = {
    loader: 'less-loader'
};

const BABEL_LOADER = {
    loader: 'babel-loader',
    options: {
        babelrc: false,
        presets: BABEL_PRESETS
    }
}

const AWESOME_TS_LOADER = {
    loader: 'awesome-typescript-loader',
    options: {
        useCache: true,
        useBabel: true,
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
    CSS_LOADER_WITH_TYPES,
    LESS_LOADER,
    BABEL_LOADER,
    AWESOME_TS_LOADER,
    TSLINT_LOADER
}