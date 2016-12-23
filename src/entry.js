import "./styles/index.css"
import Vue from "vue"
import Vuex from "vuex"
import VueRouter from "vue-router"
import App from "./components/App"
import Home from "./components/Home"
import About from "./components/About"
import configureStore from "./store"

Vue.use(Vuex)
Vue.use(VueRouter)

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

