<template>
    <section>
        <h1 class="title">Event List</h1>
        <event-preview v-for="event in events"></event-preview>
    </section>
</template>

<script>
import EventPreview from "./event.preview.vue";
export default {
    props: {
        events: {
            type: Array
        }
    },
    data(){
        return{

        }
    },
    components: {
        EventPreview
    }
}
</script>

<style scoped>
    .title {
        background-color: purple;
    }
</style>