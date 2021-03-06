import style from './style.scss';
import Vue from 'vue'
import VueRouter from 'vue-router';

import Home from './components/home';
import About from './components/about';
import Email from './components/email/email.vue';
import MainNav from './components/main-nav';
import Events from './components/events';

Vue.use(VueRouter);

const routes = [
  { path: '/',  component: Home},
  { path: '/about', component: About},
  { path: '/events', component: Events},
  { path: '/email', component: Email}
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