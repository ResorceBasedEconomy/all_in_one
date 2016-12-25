<template>
    <section>
        <h2>Filter</h2>
        <input type="text" @keyup="emitFilter($event.target.value)">
    </section>
</template>


<script>

    export default {
        props: ['eventsData'],
        data() {
            return {
             
            }
        },
        methods: {
            emitFilter(inputValue) {
                let filteredEvents;
                if(inputValue) {
                    filteredEvents = this.eventsData.filter((event) => {
                        return event.name.toLowerCase().includes(inputValue.toLowerCase());
                    });
                } else {
                    filteredEvents = this.eventsData;
                }
                

                this.$emit('filterDataChanged', filteredEvents);
            }
        },
        watch: {
            eventsData: function() {              
                this.emitFilter();
            }
        },
        mounted: function() {
        }
    }

</script>

<style scoped>
    section {
        background-color: lightpink;
        padding: 10px;
        border-radius: 5px;
    }

</style>