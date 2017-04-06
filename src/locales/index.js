import Vue from "vue"
import * as R from "ramda"

const context = require.context("./", false, /\.json$/)
const setupLocales = R.forEach(key => {
    const [,locale] = key.match(/\.\/(\w+)\.json/)
    Vue.locale(locale, context(key))
})

setupLocales(context)

if (module.hot) {
    module.hot.accept(context.keys(), () => {
        setupLocales(context)
    })
}


