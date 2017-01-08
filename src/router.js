import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./components/Home"
import About from "./components/About"
import Blog from "./components/Blog"
import Post from "./components/Post"
import Counter from "./components/Counter"

export const route = (path, component, custom) => ({path, component, ...custom})

export const routes = [
    route("/", Home),
    route("/about", About),
    route("/blog", Blog),
    route("/blog/:id", Post, {name: "post"}),
    route("/counter", Counter)
]

Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
