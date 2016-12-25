<template>
    <section >
        <div  class="event-group" v-for="(currGroup, idx) in eventsDataGroup">
            <event-list  :eventListData="currGroup"
                         @selectEvent="$emit('selectEvent', $event)">

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
            eventsDataGroup: function () {
                this.eventsData.sort((a,b) => a.time - b.time);

                return this.eventsData.reduce((acc, event) => {
                    if (!acc[moment(event.time).format("DD/MM/YY")]) acc[moment(event.time).format("DD/MM/YY")] = [event];
                    else acc[moment(event.time).format("DD/MM/YY")].push(event);
                    return acc;
                }, {})
            }
        }
    }
</script>

<style scoped>
    .event-group {
        background-color: #f7f7f7
    }
</style>