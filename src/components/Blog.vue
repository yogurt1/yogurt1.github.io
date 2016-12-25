<template>
    <div class="container blog">
        <h2>blog</h2>
        <hr />
        <div
            class="blog__post"
            v-for="(post, index) in posts">
            <h3>{{ post.title }}</h3>
            <p v-html="post.content"></p>
            <router-link
                :to="{ name: 'post', params: {id: index}}">
                More
            </router-link>
        </div>
    </div>
</template>

<script>
import {actions} from "../store"

export default {
    data() {
        return {
            posts: this.$select("posts")
        }
    }
}
</script>
