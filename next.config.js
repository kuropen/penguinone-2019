const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withCSS(withImages({
    webpack: function(config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });
        return config
    },
    target: 'serverless',
}));
