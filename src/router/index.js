import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import AnalyticsPage from '@/pages/AnalyticsPage.vue';
import AuthPage from '@/pages/AuthPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/analytics',
    component: AnalyticsPage,
  },
  {
    path: '/auth',
    component: AuthPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
