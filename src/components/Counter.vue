<template>
    <div>
        <div>
            <h3>
                Value: {{ count }}
            </h3>
        </div>
        <button @click="incr">+</button>
        <button @click="decr">-</button>
        <button @click="incrIfOdd">Incr if odd</button>
        <button @click="incrAsync">Incr async (1s)</button>
        <div>
            <p>
                Recent History (last 5 entries): {{ recentHistory }}
            </p>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
    computed: mapGetters([
        "count",
        "recentHistory"
    ]),
    methods: mapActions([
        "incr",
        "decr",
        "incrIfOdd",
        "incrAsync"
    ])
}
</script>


