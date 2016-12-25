<template>
    <section class="event-list box">
        <h3 class="title">{{currDay}}</h3>
            
            <div v-for="currEventData in eventListData">
                <event-preview @selectEvent="$emit('selectEvent', $event)" 
                               :eventData="currEventData"
                               @click.stop.native="$emit('selectEvent',currEventData.id)">
                </event-preview>
            </div>

    </section>
</template>

<script>
    import moment from 'moment';
    import EventPreview from "./event.preview.vue";
    export default {
        props: {
            eventListData: {
                type: Array
            }
        },
        data() {
            return {
                currDay: moment(this.eventListData[0].time).format("DD/MM/YY")
            }
        },
        components: {
            EventPreview
        }
    }
</script>

<style scoped>

    .title {    
        width:100%;
        padding-left: 15px;
    }
   .event-list {
        display: flex;
        flex-wrap: wrap;
    }
</style>