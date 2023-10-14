import { createApp } from 'vue'
import routes from './router/routes'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')
