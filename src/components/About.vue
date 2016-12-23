<template>
    <div>
        <p>
            <img :src="logo.js"></img>
            Full-stack PHP/Node.js and JavaScript developer
        </p>
        <p>
            DevOps CI/CD expert
        </p>
        <p>
            Junior Java Spring developer
        </p>
    </div>
</template>

<script>
import jsLogo from "app/assets/js_logo.jpg"

export default {
    data() {
        return {
            logo: {
                js: ""
            }
        }
    }
}
</script>

<style>

</style>
