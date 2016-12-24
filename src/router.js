import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./components/Home"
import About from "./components/About"

const route = (path, component) => ({path, component})
export const routes = [
    route("/", Home),
    route("/about", About)
]

Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
