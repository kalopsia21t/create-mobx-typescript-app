const BABEL_LOADER = {
    loader: 'babel-loader',
    options: {
        babelrc: false,
        presets: [ require('babel-preset-react') ]
    }
}

const AWESOME_TS_LOADER = {
    loader: 'awesome-typescript-loader',
    options: {
        useCache: true,
    }
}

module.exports = {
    BABEL_LOADER,
    AWESOME_TS_LOADER
}