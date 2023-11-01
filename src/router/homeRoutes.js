export const homeRoutes = {
    path: "/",
    name: "HomeRoute",
    component: () => import(/* webpackChunkName: "Login" */ "../views/PortfolioView.vue"),
    meta: {
      title: "Jeff Weeks Portfolio",
    },
  };