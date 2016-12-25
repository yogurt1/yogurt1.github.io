<template>
    <div id="app">
        <div class="container top-menu">
            <div class="row">
                <ul>
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/about">About</router-link>
                    </li>
                    <li>
                        <router-link to="/blog">Blog</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<style>
.test {
    background: green;
    width: 100%;
    height: 40px;
}
</style>
