<template>
  <section>
        <div class="unread box" @click="showEmail($event.target)">&#9993 &nbsp subject: {{email.subject}}</div>
   </section>
</template>

<script>

export default {
  props: {
    email: {
      required: true,
      type: Object
    }
  },
  data () {
    return {

    }
  },
  methods: {
    showEmail(event) {
        // console.log('Requesting from Parent to show email', event.classList );
        this.$emit('showEmail', this.email);
        event.classList.value = 'box';
    }
  }
}
</script>

<style scoped>
.unread {
  font-weight: bold;
}
.box {
  border-radius: 0;
}
</style>
