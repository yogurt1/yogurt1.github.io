// import "./styles/index.css"
import "./polyfills"
import * as R from "ramda"
import * as Vue from "vue"
import * as VueI18n from "vue-i18n"
import * as VueRouter from "vue-router"
import * as Revue from "revue"
import App from "./components/App"
import routes from "./routes"
import configureStore from "./store"
import * as actions from "./store/actions"
import "./locales"

const preloadedState = JSON.parse(
    localStorage.getItem("state")
)
const targetNode = document.getElementById("app")
const store = configureStore(preloadedState || undefined)
const setLoading = R.pipe(
    actions.ui.setLoading,
    store.dispatch
)


class V extends Vue {
    constructor(...args) {
        super(...args)
        this.dispatch = this.$options.store.dispatch
        this.router = new VueRouter({
            routes: this.$options.routes,
            mode: "history"
        })
    }

    get reduxState() {
        return this.$options.store.getState()
    }

    render(h) {
        return h(App)
    }
}

Vue.config.locale = "ru"
Vue.use(VueI18n)
Vue.use(VueRouter)
new Revue(Vue, store)
new V({ routes, store }).$mount(targetNode)

window.onload = () => {
    setLoading(true)
    const cb = () => setLoading(false)

    const hookNodes = R.pipe(
        R.filter(
            R.propEq("type", "childList")
        ),
        R.map(
            R.prop("addedNodes")
        ),
        R.flatten,
        R.filter(
            R.whereEq({
                nodeName: "IMG",
                complete: false
            })
        ),
        R.forEach(node => {
            node.onerror = cb
            node.onload = cb
        })
    )

    new MutationObserver(mutation => {
        hookNodes(mutation)
    })
        .observe(targetNode, {
            subtree: true,
            childList: true,
            attributes: false,
            characterData: false
        })

}

if (module.hot) {
    module.hot.accept()
}
