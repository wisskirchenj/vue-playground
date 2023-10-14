import IntroPage from '../pages/IntroPage.vue';
import TripsPage from '../pages/TripsPage.vue';
const routes = [
  {
    path: '/',
    name: 'intro',
    component: IntroPage,
  },
  {
    path: '/trips',
    name: 'trips',
    component: TripsPage,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue'),
  },
];

export default routes;
