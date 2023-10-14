import Intro from '../pages/Intro.vue';
import Trips from '../pages/Trips.vue';
const routes = [
  {
    path: '/',
    name: 'intro',
    component: Intro,
  },
  {
    path: '/trips',
    name: 'trips',
    component: Trips,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue'),
  },
];

export default routes;
