<template>
    <section>
        <h1 class="title">Event List</h1>
        <ul>
            <li v-for="currEventData in eventListData">
                <event-preview :eventData="currEventData"></event-preview>
            </li>
        </ul>
    </section>
</template>

<script>
    import EventPreview from "./event.preview.vue";
    export default {
        props: {
            eventListData: {
                type: Array
            }
        },
        data() {
            return {

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