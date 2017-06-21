/**
 * Created by root on 6/21/17.
 */
var path = require("path");

module.exports = {
    entry : "./js/dialog.js",
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : "bundle.js",
        publicPath: "/dist"
    },
    module : {
        rules : [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
};