<template>
    <section>
        <h1>Event Group</h1>
        <ul>
            <li  v-for="(currDay, idx) in days">
                <event-list :day="currDay">
                    
                </event-list>
            </li>
        </ul>
    </section>
</template>

<script>
import EventList from "./event.list.vue";
export default {
    props: {
        Days: {
            type: Array
        }
    },
    data(){
        return{

        }
    },
    components: {
        EventList
    }
}
</script>

<style scoped>

</style>