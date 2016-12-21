<template>
    <section>
        <h1>Email List</h1>
        <ul>
            
            <li v-for="(currEmail, idx) in emails">
                <email-preview  :email="currEmail"
                                @showEmail="showEmail">
                 </email-preview>
                 
            </li>
        </ul>
    </section>
</template>

<script>
import EmailPreview from "./email-preview.vue"
export default {
    props: {
        emails: {
            required: true,
            type: Array
        }
    },
    data () {
       
        return {

        }
    },
    methods: {
        showEmail(email) {
            // console.log('Requesting from grandparent to show email', email);
            this.$emit('showEmail', email);
        }
    },
     components: {
            'email-preview': EmailPreview
    }
}
</script>

<style scoped>
ul, li{
    font-weight: 3px;
    list-style-type: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
}
</style>
