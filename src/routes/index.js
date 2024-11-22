import { createWebHistory, createRouter } from 'vue-router';
import HomeView from '../views/Home.vue';
import NotFound from '../views/404.vue';
import Content from '../views/Content.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/home', component: HomeView },
  { path: '/content', component: Content },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
