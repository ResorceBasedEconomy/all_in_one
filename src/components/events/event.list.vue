<template>
    <section>
        <h1 class="title">{{currDay}}</h1>
            
            <div v-for="currEventData in eventListData">
                <event-preview :eventData="currEventData"></event-preview>
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
        background-color: purple;
    }
</style>