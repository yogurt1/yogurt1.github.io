// import "./styles/index.css"
import "./polyfills"
import Vue from "vue"
import App from "./components/App"
import store from "./store"
import router from "./router"
import "./locales"

// store.actions.getPosts()

new Vue({
    router,
    store,
    el: "#app",
    render: h => h(App)
})

const observer = () => new MutationObserver((mutations, observer) => {
    const stopLoading = () => store.actions.setLoading(false)
    const startLoading = () => store.actions.setLoading()

    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
            if (node.nodeName === "IMG") {
                if (!node.complete) {
                    startLoading()
                    node.onerror = stopLoading
                    node.onload = stopLoading
                }
            }
        }
    }
}).observe(document, {
    subtree: true,
    attributes: true,
    childList: true,
    characterData: true
})

window.onload = () => store.actions.setLoading(false)
window["__OBSERVER__"] = observer

if (module.hot) module.hot.accept()
