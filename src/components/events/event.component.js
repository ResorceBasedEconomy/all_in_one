import EventCenter from "./event.center.vue";
import EventDetails from "./event.details.vue";
export default {
    data() {
        return {
            isShowDetails: false
        }
    },
    methods: {
            selectEvent(eventId) {            
                this.$router.push(`/events/${eventId}`);
            }
    },
    components: {
        EventCenter,
        EventDetails
    }
}
