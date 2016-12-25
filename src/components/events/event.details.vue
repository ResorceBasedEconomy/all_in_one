<template>
    <section v-if="event">
        <button class="btn edit-btn btn-primary" @click="isEditMode = !isEditMode">edit event</button>
        <h3>{{event.name}} </h3>
        <h4>{{eventTime}}&nbsp status:&nbsp{{event.status}}&nbsp venue:&nbsp{{event.venue.name}} </h4>
        <h4>Address: &nbsp{{event.venue.address_1}},&nbsp{{event.venue.city}}</h4>

        <button type="button" class="btn btn-default"><a class="link" :href="event.link" target=_blank>link to original event</a></button>

        <div v-html="event.description"></div>


    </section>
</template>

<script>
    import moment from "moment";
    export default {
        data() {
            return {
                event: null,
                eventTime: moment(event.time).calendar(),
                isEditMode: false
            }
        },
        methods: {
            loadEvent(eventId) {
                this.$http.get(`events/${eventId}`)
                    .then(res => res.json())
                    .then(event => this.event = event);
            }
        },
        created() {
            const eventId = this.$route.params.id
            this.loadEvent(eventId);
        }


    }

</script>

<style scoped>
.link {
    text-decoration: none;
}
.edit-btn {
    float: right;
}
</style>