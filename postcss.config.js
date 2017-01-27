const cssnext = require("postcss-cssnext")
const utilities = require("postcss-utilities")
const responsiveFont = require("postcss-responsive-font")
const placehold = require("postcss-placehold")
const instagram = require("postcss-instagram")
const animation = require("postcss-animation")

module.exports = ctx => ({
    plugins: [
        animation(),
        placehold(),
        instagram(),
        responsiveFont(),
        utilities(),
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
