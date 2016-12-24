import Vue from "vue"
import VueI18n from "vue-i18n"
Vue.use(VueI18n)

export const getContext = () =>
    require.context("./", false, /\.json$/)

export const getLocales = context => {
    const locales = {}

    for (const key of context.keys()) {
        const locale = key.match(/\.\/(\w+)\.json/)[1]
        locales[locale] = context(key)
    }

    return locales
}

export const setupLocales = locales => {
    for (const locale in locales) {
        Vue.locale(locale, locales[locale])
    }
}

export const setup = () => setupLocales(getLocales(getContext))

const context = getContext()
const locales = getLocales(context)
setupLocales(locales)

if (module.hot) module.hot.accept(context.keys(), () => {
    const nextContext = getContext()
    const nextLocales = getLocales(nextContext)
    setupLocales(nextLocales)
})
