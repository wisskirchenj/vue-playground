import { createApp } from 'vue'
import routes from './router/routes'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory

const router = createRouter({
  history: createWebHistory(), // or other options... may be ommited
  routes: routes, // defined in the routes.js file or elsewhere
})

createApp(App)
  .use(router)
  .mount('#app')
