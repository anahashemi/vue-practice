const path = require("path");

module.exports = {
    mode: "development",

    entry: {
        index: "./scripts/index.js",
        about: "./scripts/about.js",
        samples: "./scripts/samples.js",
    },

    output: {
        path: path.resolve("dist"),
        publicPath: "/",
        filename: "[name].js",
    },
};
