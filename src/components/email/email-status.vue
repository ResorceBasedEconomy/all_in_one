<template>
  <div>
    <div class="flex-wrap center">
      <p>unread emails: {{unreads}}/{{mails}}</p>
    </div>
  <progress class="progress is-primary" :value="100 - unreads/mails*100" max="100">30%</progress>
  </div>
</template>

<script>

export default {
  props: ['unreads', 'mails'],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}
.center {
  justify-content: center;
}
</style>
