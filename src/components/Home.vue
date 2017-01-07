<template>
    <div class="page home">
        <div class="container">
            <div class="row">
                <div>
                    <h5>&lt; full-stack &gt;</h5>
                    <p>
                       javascript developer
                    </p>
                    <h2>{{ $t("message.hello") }}</h2>
                </div>
                <div>
                    <counter></counter>
                </div>
            </div>
            <form @submit="submit">
                <select name="locale">
                    <option
                        v-for="locale in locales"
                        :class="locale">
                        {{ locale }}
                    </option>
                </select>
                <input
                    type="submit"
                    class="primary"
                    :value="changeLocale"
                />
            </form>
        </div>
    </div>
</template>

<script>
import Counter from "./Counter"
import {actions} from "../store"

export default {
    data() {
        return {
            locales: ["en", "ru"],
            msg: "Home"
        }
    },

    computed: {
        changeLocale() {
            return this.$t("message.changeLocale")
        }
    },

    methods: {
        submit(ev) {
            ev.preventDefault()
            const form = new FormData(ev.target)
            const locale = form.get("locale")
            actions.setLocale(locale)
        }
    },

    components: {
        Counter
    }
}
</script>

<style>
.home {
}
</style>
