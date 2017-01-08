<template>
    <div id="app">
        <div class="top-bar">
            <div class="top-logo">
                <change-locale />
                <spinner :show="ui.loading" />
            </div>
            <nav class="top-nav">
                <router-link to="/" exact>Home</router-link>
                <router-link to="/counter">Counter</router-link>
                <router-link to="/blog">Blog</router-link>
                <router-link to="/about">About</router-link>
            </nav>
        </div>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<script>
import ChangeLocale from "./ChangeLocale"
import Spinner from "./Spinner"

export default {
    name: "App",
    data() {
        return {
            ui: this.$select("ui")
        }
    },

    components: {
        Spinner,
        ChangeLocale
    }
}
</script>

<style>
body {
    width: 100%;
    height: 100%;
    font-family: Arial, sans-serif;
    background: #fef;
    color: black;
}

.page {
    /* padding-top: 15px; */
}

.content {
    padding: 5px;
    margin-top: 56px;
}

.top-bar {
    font-size: 13pt;
    height: 56px;
    padding: 5px;
    
    & .top-logo {
        float: left;
    }
    
    & .top-nav {
        float: right;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
}

.top-nav a {
    display: inline-block;
    text-decoration: none;
    color: black;
    text-align: center;
    padding: 4px;
    text-transform: uppercase;

    &.router-link-active,
    &:hover,
    &:focus {
        color: black;
        text-decoration: underline;
    }
}
</style>
