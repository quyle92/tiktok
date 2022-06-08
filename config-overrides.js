/* eslint-disable no-undef */
const { override, useBabelRc, addWebpackPlugin } = require('customize-cra');
const webpack = require('webpack');

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
    addWebpackPlugin(
        new webpack.DefinePlugin({
            process: { env: {} },
        }),
    ), //this is to solve solve the "Uncaught ReferenceError: process is not defined". Ref: https://stackoverflow.com/a/71151846/11297747
);
