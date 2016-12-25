import style from './style.scss';
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';

import Home from './components/home';
import About from './components/about';
import Email from './components/email/email.vue';
import MainNav from './components/main-nav';
import Events from './components/events';
import EventsCenter from './components/events/event.center.vue';
import eventDetails from "./components/events/event.details.vue";


Vue.use(VueResource)
Vue.use(VueRouter);
Vue.http.options.root = 'http://localhost:3003';

const routes = [
  { path: '/',  component: Home},
  { path: '/about', component: About},
  { path: '/email', component: Email},
  { path: '/events', component: Events, children: [
      {path: '', component: EventsCenter},
      {path: ':id', component: eventDetails},
  ]},
  
  {path: '*', redirect: '/'}
  ]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  router,
  components: {
    'main-nav': MainNav
  }
}).$mount('#app')