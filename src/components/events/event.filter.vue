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
                let filteredEvents = this.eventsData.filter((event) => {
                    return event.name.indexOf(inputValue);
                });

                this.$emit('filterDataChanged', filteredEvents);
            }
        },
        mounted: function() {
            this.emitFilter();
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