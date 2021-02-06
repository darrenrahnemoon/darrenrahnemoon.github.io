const StyleLintPlugin = require('stylelint-webpack-plugin');
module.exports = {
    configureWebpack : {

    },
    css : {
        loaderOptions : {
            sass : {
                prependData : '@import "./src/lib/styles/global.scss";',
            },
        },
    },
};
