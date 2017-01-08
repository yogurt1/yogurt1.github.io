// import "./styles/index.css"
import "./polyfills"
import Vue from "vue"
import App from "./components/App"
import store from "./store"
import router from "./router"
import "./locales"

store.actions.getPosts()

new Vue({
    router,
    store,
    el: "#app",
    render: h => h(App)
})

window.onload = () => store.actions.setLoading(false)

if (module.hot) module.hot.accept()
