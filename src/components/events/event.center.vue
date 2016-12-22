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
                eventsData: [
                    {
                        name: 'New Years Eve', status: 'future',
                        description: 'best party in town',
                        venue: 'Yedidya Frenkel, Florentin, Tel-Aviv',
                        time: 1483218797945,
                        linkToOrigin: '//www.facebook.com/events/1653088681383412/'
                    },
                    {
                        name: '?מה טומן בחובו העתיד', status: 'future',
                        description: 'הרצאה',
                        venue: 'Yedidya Frenkel, Florentin, Tel-Aviv',
                        time: 1481218797945,
                        linkToOrigin: '//www.facebook.com/events/1248083765286078/'
                    },
                    {
                        name: 'Jungle Concert', status: 'future',
                        description: 'best party in town',
                        venue: 'Yedidya Frenkel, Florentin, Tel-Aviv',
                        time: 1483118797945,
                        linkToOrigin: '//www.facebook.com/events/1653088681383412/'
                    },
                    {
                        name: 'New Years Eve', status: 'future',
                        description: 'best party in town',
                        venue: 'Yedidya Frenkel, Florentin, Tel-Aviv',
                        time: 1483218797945,
                        linkToOrigin: '//www.facebook.com/events/1653088681383412/'
                    }
                ]
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