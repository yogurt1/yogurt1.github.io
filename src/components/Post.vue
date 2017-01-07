<template>
    <div class="container">
        <div class="post" v-if="post">
            <p v-html="post.content"></p>
        </div>
        <div class="failure" v-else="post">
            <h3>Loading...</h3>
        </div>
    </div>
</template>

<script>
import {createSelector} from "reselect"

const selectPost = id => createSelector(
    posts => posts,
    posts => posts[id]
)

export default {
    data() {
        return {
            posts: this.$select("posts")
        }
    },

    created() {
        const {id} = this.$route.params
        this.postSelector = selectPost(id)
    },

    computed: {
        post() {
            const {posts, postSelector} = this
            const post = postSelector(posts)
            return post
        }
    }
}
</script> 
