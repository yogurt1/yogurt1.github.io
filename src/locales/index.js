import Vue from "vue"
import VueI18n from "vue-i18n"

Vue.use(VueI18n)
Vue.config.lang = "ru"

const setupLocales = () => {
    const context = require.context("./", false, /\.json$/)

    for (const key of context.keys()) {
        const locale = key.match(/\.\/(\w+)\.json/)[1]
        Vue.locale(locale, context(key))
    }

    return context
}

const context = setupLocales()

if (module.hot) module.hot.accept(context.keys(), () => {
    setupLocales()
})
