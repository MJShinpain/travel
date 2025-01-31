import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import HyattMattressRun from '../views/HyattMattressRun.vue'
import HyattCalculator from '../views/HyattCalculator.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/hyatt-mattress-run', component: HyattMattressRun },
  { path: '/hyatt-calculator', component: HyattCalculator }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
