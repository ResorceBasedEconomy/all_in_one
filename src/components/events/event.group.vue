<template>
    <section>
        <h1>Event Group</h1>

            <div v-for="(currGroup, idx) in eventsDataGroup">
                <event-list :eventListData="currGroup">

                </event-list>
            </div>

    </section>
</template>

<script>
    import moment from 'moment';
    import EventList from "./event.list.vue";
    export default {
        props: ['eventsData'],
        data() {
            return {
            }
        },
        components: {
            EventList
        },
        computed: {
            eventsDataGroup: function() {
                return this.eventsData.reduce((acc, event) => {
                    if (!acc[moment(event.time).format("DD/MM/YY")]) acc[moment(event.time).format("DD/MM/YY")] = [event];
                    else acc[moment(event.time).format("DD/MM/YY")].push(event);
                    return acc;
                }, {})
            }
        },
        created() {
            //this.filterByDate();
        }
    }
</script>

<style scoped>

</style>