<template>
    <section>
        <h1>Events Center</h1>
        <event-filter :eventsData="eventsData" @filterDataChanged="filteredEventData = $event"></event-filter>
        <event-group :eventsData="filteredEventData"></event-group>
    </section>
</template>

<script>
    import EventFilter from "./event.filter.vue";
    import EventGroup from "./event.group.vue";

    export default {
        props: {

        },
        data() {
            return {
                filteredEventData: [],
            }
        },

        components: {
            EventFilter,
            EventGroup,
        }
    }
</script>

<style scoped>

</style>