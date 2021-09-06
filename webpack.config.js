const path = require("path");

module.exports = {
    mode: "development",

    entry: {
        index: "./scripts/index.js",
    },

    output: {
        path: path.resolve("dist"),
        publicPath: "/",
        filename: "[name].js",
    },
};
