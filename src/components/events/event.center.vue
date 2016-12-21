<template>
    <section>
        <h1>Events Center</h1>
        <event-filter></event-filter>
        <event-group></event-group>
    </section>
</template>

<script>
import EventFilter from "./event.filter.vue";
import EventGroup from "./event.group.vue";

export default {
    data(){
        return{

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