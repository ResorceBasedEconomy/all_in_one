<template>
  <div class="box">
    <div class="flex-wrap space-between">
      <h1>subject : {{email.subject}}</h1>
      <button class="button" @click="deleteEmail">X</button>
    </div>
    <p class="subject">subject : {{email.subject}}</p>
    <p>{{email.body}}</p>
  </div>
</template>

<script>

export default {
  props: ['email'],
  
  data () {
    return {

    }
  },
  methods: {
    deleteEmail() {
      // console.log('requesting email delete from parent', this.email);
      this.$emit('deleteEmail', this.email);
      this.email.body = '';
      this.email.subject = '';
    }
  }

}
</script>

<style scoped>
.subject {
  padding-bottom: 5px;
  border-bottom: solid;
}
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}
.space-between {
  justify-content: space-between;
}
</style>
