import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./components/Home"
import About from "./components/About"
import Blog from "./components/Blog"
import Post from "./components/Post"

export const route = (path, component, custom) => ({path, component, ...custom})

export const routes = [
    route("/", Home),
    route("/about", About),
    route("/blog", Blog),
    route("/post/:id", Post, {name: "post"})
]

Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
