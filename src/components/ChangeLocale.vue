<template>
    <div class="change-locale">
        <label>lang:</label>
        <select
            name="locale"
            v-model="locale"
            @change="select">
            <option
                v-for="locale in locales"
                :class="locale">
                {{ locale }}
            </option>
        </select>
    </div> 
</template>

<script>
import {actions} from "../store"

export default {
    data() {
        return {
            locale: "ru",
            locales: ["ru", "en"]
        }
    },

    methods: {
        select(ev) {
            actions.setLocale(this.locale)
        }
    }
}
</script>

<style>
.change-locale > label {
    display: inline-block;
    font-weight: 300;
    font-size: 16pt;
    text-transform: uppercase;
}
</style>
