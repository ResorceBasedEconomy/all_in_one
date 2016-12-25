<template>
    <section class="event-center">
        <event-filter :eventsData="eventsData"
                      @filterDataChanged="filteredEventData = $event">
        </event-filter>
        <event-group   @selectEvent="$emit('selectEvent', $event)"
                      :eventsData="filteredEventData">
        </event-group>

    </section>
</template>

<script>
    import EventFilter from "./event.filter.vue";
    import EventGroup from "./event.group.vue";
    import EventDetails from "./event.details.vue";
    export default {
        props: {

        },
        data() {
            return {
                filteredEventData: [],
                eventsData: []
            }
        },
        methods: {
            
            reloadEvents() {
                this.$http.get('events')
                    .then(res => res.json())
                    .then(eventsFromServer => {
                        this.eventsData = eventsFromServer;
                    });
            }

        },
        components: {
            EventFilter,
            EventGroup,
            EventDetails
        },
        created() {
            this.reloadEvents();
        }
    }
</script>

<style scoped>

</style>