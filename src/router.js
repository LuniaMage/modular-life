import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Features from './views/Features.vue';
import Started from './views/Started.vue';
import Login from './views/Login.vue';
import Benefits from './views/Benefits.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/features',
      name: 'features',
      component: Features
    },
    {
      path: '/started',
      name: 'started',
      component: Started
    },
    {
      path: '/benefits',
      name: 'benefits',
      component: Benefits
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
});
