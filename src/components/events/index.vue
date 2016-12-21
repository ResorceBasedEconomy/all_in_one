<template>
    <section>
        <h1 class="title">Events Container</h1>
        <event-center></event-center>
    </section>
</template>

<script>
import EventCenter from "./event.center.vue";
export default {
    data() {
        return {

        }
    },
    components: {
        EventCenter
    }
}

</script>

<style scoped>
    .title {
        background-color: blue;
    }
</style>
