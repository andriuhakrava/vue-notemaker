import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Note from '../views/Note.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/note/:id',
    name: 'note',
    component: Note,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
