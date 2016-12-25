<template>
    <div id="app">
        <div class="container top-menu">
            <nav class="top-nav">
                <router-link to="/" exact>Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/blog">Blog</router-link>
            </nav>
        </div>
        <router-view></router-view>
    </div>
</template>

<style>
.top-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
    width: 60%;
    padding: 15px;
}

.top-nav a {
    display: inline-block;
    text-decoration: none;
    color: black;
    text-align: center;
    padding: 4px;
}

.top-nav a.router-link-active,
.top-nav a:hover,
.top-nav a:focus {
    color: white;
    border-radius: 14px;
    background: rgb(7, 4, 239);
    font-weight: 500;
}
</style>
