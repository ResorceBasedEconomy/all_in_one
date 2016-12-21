<template>
  <div id="app">
      <h1>E-mail App</h1>
      <div class="felx-wrap">
        <email-list :emails="emails" class="email-list"
                                     @showEmail="showEmail">
        </email-list>
        <email-details class="email-details" :email="email"
                                             @deleteEmail="deleteEmail">
        </email-details>
      </div>
      <email-status :mails="emails.length"
                    :unreads="unreadCounter">
      </email-status>

</template>

<script>
import EmailList from "./email-list.vue"
import EmailStatus from "./email-status.vue"
import EmailDetails from "./email-details.vue"
export default {
  name: 'app',
 
     
  data () {
    return {
      emails: [
        {id: 1, subject: 'work', body: 'work work work', isRead: false },
        {id: 2, subject: 'advertisment', body: 'New Year Sale!', isRead: false },
        {id: 3, subject: 'fun', body: 'fun fun fun!', isRead: false },
        {id: 4, subject: 'get the new Vue.js Today!', body: 'Take a look', isRead: false },
        {id: 5, subject: 'Puki Support center', body: 'yep yep yep', isRead: false },
        {id: 6, subject: 'Muki shop', body: 'fun fun fun!', isRead: false },
      ],
      email: {},
      unreadCounter: 0
    }
  },
  methods: {
        showEmail(email) {
            // console.log('Grandparent got email', email);
            this.email = email;
            if(!email.isRead) this.unreadCounter--;

            this.emails.forEach(obj => {
              if(obj.id === email.id) {
                obj.isRead = true
              }
            });
        },
        deleteEmail(email) {
             console.log('deleting mail', email);
             this.emails = this.emails.filter(obj => {
              if(obj.id !== email.id) return obj;
            });
            console.log(' mail deleted', this.emails);
        }
  },
  components: {
      'email-list':EmailList,
      'email-status':EmailStatus,
      'email-details':EmailDetails
  },
  computed: {
    
  },
  mounted() {
    this.unreadCounter = this.emails.length;
  }

}
</script>

<style>
.email-list {
  width: 35%;
}
.email-details {
  width: 65%;
}
.felx-wrap {
  display: flex;
  flex-wrap: wrap;
}


</style>
