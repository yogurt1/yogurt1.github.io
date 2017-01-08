<template>
    <div class="page home">
        <div class="container">
            <div class="row">
                <div class="about">
                    <h5 class="developer-tag">
                        &lt;developer <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;message="<span class="hello-msg">{{ $t("messages.hello") }}</span>" <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;justFor="fun" <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;lang="js" <br />
                        /&gt;
                    </h5>
                    <p>
                       javascript developer
                   </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ChangeLocale from "./ChangeLocale.vue"

export default {
    name: "Home"
}
</script>

<style>
.developer-tag {
    & .hello-msg {
        text-transform: lowercase;
        text-decoration: underline;
        color: #00bcd4;

    }
}
</style>
