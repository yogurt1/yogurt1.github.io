<template>
    <div>
        <div class="post" v-if="post">
            <p v-html="post.content"></p>
        </div>
        <div class="failure" v-else="post">
            <h3>Loading...</h3>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: this.$select("posts")
        }
    },

    computed: {
        post() {
            const {id} = this.$route.params
    
            if (typeof(id) === "undefined") {
                return null
            }

            return this.posts[id]
        }
    }
}
</script> 
