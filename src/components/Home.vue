<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-xs">
                    <h1>&lt; full-stack &gt;</h1>
                    <p>
                       javascript developer
                    </p>
                    <p>
                        {{ $t("message.hello") }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Counter from "./Counter"

export default {
    data() {
        return {
            msg: "Home"
        }
    },

    components: {
        Counter
    }
}
</script>
