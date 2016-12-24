import "./styles/index.css"
import "es6-promise/dist/es6-promise.auto.min.js"
import Vue from "vue"
import Vuex from "vuex"
import VueRouter from "vue-router"
import VueI18N from "vue-i18n"
import App from "./components/App"
import Home from "./components/Home"
import About from "./components/About"
import configureStore from "./store"
import locale from "./locale"

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueI18N)
Vue.config.lang = "ru"
Object.keys(locale).forEach(l =>
    Vue.locale(l, locale[l]))

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    }
]
const store = configureStore()
const router = new VueRouter({
    routes,
    mode: "history"
})

new Vue({
    router,
    store,
    el: "#app",
    render: h => h(App)
})

if (module.hot) module.hot.accept()

