<template>
    <section class="event-preview">
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-5" :class="{rtl: isHebrew}">{{eventData.name}}</p>
                        <p class="subtitle">{{currTime}}
                            <button type="button" class="btn btn-primary">edit</button>
                        </p>
                        <p class="subtitle is-6">status: &nbsp{{eventData.status}}</p>
                    </div>
                </div>
                <div :class="{rtl: isHebrew}" class="content" v-html="eventData.description">
                </div>
            </div>
        </div>

    </section>
</template>

<script>
    import moment from 'moment';
    export default {
        props: {
            eventData: {
                required: true,
                type: Object
            },
        },
        data() {
            return {
                isHebrew: false,
                currTime: moment(this.eventData.time).format('llll')
                //   isSelected: false
            }
        },
        methods: {
            // showEvent() {
            //     this.$emit('selectEvent', this.eventData.id);
            // }

            // deleteEvent() {
            //     this.$emit('doDelete', {EventId: this.event.id, timestamp: Date.now()});

            // },
            // editEvent() {
            // },

        },
        created: function () {
            if (this.eventData.description.includes('י') ||
                this.eventData.description.includes('ו') ||
                this.eventData.description.includes('ה')) this.isHebrew = true;;
        }

    }

</script>

<style scoped>
    .event-preview {
        margin: 15px 15px;
    }
    .card {
        width:300px;
        height : 300px;
        overflow: hidden;
        
    }
    .media {
        background-color: #fff;
    }
    .title {
        width: inherit;
        background-color: sandybrown;
        padding: 0 10px;
        font-weight: bold;
    }
    .subtitle{
        padding: 0 10px;
    }
    .btn {
        float: right;
        background-color: palegoldenrod;
        padding: 1px 12px;
        border-radius: 0px;
        color: black
    }
    .content {
        width:100%;
        padding: 10px;
        background-color: #fff
    }
    .rtl {
        direction: rtl;
    }
    .image {
        width: 100%;

    }
    .selected {
        border: 1px solid darkorchid;
    }
    

</style>