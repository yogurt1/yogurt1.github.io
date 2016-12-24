import "./styles/index.css"
import "es6-promise/auto"
import Vue from "vue"
import App from "./components/App"
import store from "./store"
import router from "./router"
import "./locales"

new Vue({
    router,
    store,
    el: "#app",
    render: h => h(App)
})

if (module.hot) module.hot.accept()
