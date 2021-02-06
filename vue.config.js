const jsonImporter = require('node-sass-json-importer');

module.exports = {
    configureWebpack : {

    },
    css : {
        loaderOptions : {
            sass : {
                sassOptions : {
                    importer : jsonImporter({
                        convertCase : true,
                    }),
                },
                prependData : '@import "./src/lib/styles/global.scss";',
            },
        },
    },
};
