/* eslint-disable @typescript-eslint/no-var-requires */
const jsonImporter = require('node-sass-json-importer');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
    configureWebpack : {
        resolve : {
            plugins : [ new TsconfigPathsPlugin() ],
        },
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
