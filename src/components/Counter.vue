<template>
    <div class="row">
            <h3>
                CNT: {{ counter }}
            </h3>
            <button @click="incr">
                <i class="ion-plus"></i>
            </button>
            <button @click="decr">
                <i class="ion-minus"></i>
            </button>
            <button @click="reset">0</button>
            <button @click="start">auto</button>
    </div>
</template>

<script>
import {actions, mix} from "../store"

export default {
    data() {
        return {
            counter: this.$select("counter")
        }
    },
    methods: mix({
        stop() {
            clearInterval(this.interval)
            this.interval = void(0)
        },

        start() {
            if (this.interval) {
                return this.stop()
            }

            this.interval = setInterval(() =>
                actions.incr(), 900)
        },

        reset() {
            this.stop()
            actions.reset()
        }
    })
}
</script>
