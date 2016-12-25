import "./styles/index.css"
import "./polyfills"
import Vue from "vue"
import App from "./components/App"
import store from "./store"
import router from "./router"
import "./locales"

if (process.env.NODE_ENV !== "production") {
    window.store = store
}

store.actions.getPosts()

new Vue({
    router,
    store,
    el: "#app",
    render: h => h(App)
})

if (module.hot) module.hot.accept()
