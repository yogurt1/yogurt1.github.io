const cssnext = require("postcss-cssnext")
const cssVariables = require("postcss-css-variables")

module.exports = ctx => ({
    plugins: [
        cssVariables(),
        cssnext({
            browsers: [
                "iOS 8",
                "opera 12",
                "ff 40",
                "chrome 40"
            ]
        })
    ]
})
