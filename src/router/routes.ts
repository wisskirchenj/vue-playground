import IntroPage from '@/pages/IntroPage.vue';
import TripsPage from '@/pages/TripsPage.vue';
import TripsScopedSlotsPage from '@/pages/TripsScopedSlotsPage.vue';
import VmodelDemoPage from '@/pages/VmodelDemoPage.vue';
import GetterSetter from '@/pages/GetterSetter.vue';

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
  {
    path: '/tripsscoped',
    name: 'tripsscoped',
    component: TripsScopedSlotsPage,
  },
  {
    path: '/vmodel',
    name: 'vmodeldemo',
    component: VmodelDemoPage,
  },
  {
    path: '/getset',
    name: 'getset',
    component: GetterSetter,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
];

export default routes;
