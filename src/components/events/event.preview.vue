<template>
    <section >
        {{eventData.name}}
        <h1 class="title">Event Preview</h1>
        <!--<img :src="`src/assets/car/${car.id}.png`" alt="">-->
        <!--<button @click.stop="deleteEvent">Delete</button>-->
       <!--<router-link :to="`/car/${car.id}/edit`">Edit</router-link>-->
    </section>
</template>

<script>
    export default {
        props: {
            eventData: {
                required: true,
                type: Object
            },
        },
        data(){
            return {
            //   isSelected: false
            }
        },
        methods: {
            // deleteEvent() {
            //     this.$emit('doDelete', {EventId: this.event.id, timestamp: Date.now()});

            // },
            // editCar() {
            //     this.$emit('doEdit', this.car);
            // },
           
        }

    }

</script>

<style scoped>
    img {
        max-width: 200px;
    }
    .selected {
        border: 1px solid darkorchid;
    }
    .title {
        background-color: red;
    }
</style>