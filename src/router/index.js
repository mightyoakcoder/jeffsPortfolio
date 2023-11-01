// Composables
import { createRouter, createWebHistory } from 'vue-router'

import { homeRoutes } from "./homeRoutes";
import { aboutRoutes } from "./aboutRoutes";
import { portfolioRoutes } from "./portfolioRoutes";

// Vue.use(VueRouter);

const routes = [homeRoutes, aboutRoutes, portfolioRoutes]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
