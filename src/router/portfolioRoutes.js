export const portfolioRoutes = {
    path: "/portfolio",
    name: "PortfolioRoute",
    component: () => import(/* webpackChunkName: "Portfolio" */ "../views/PortfolioView.vue"),
    meta: {
        title: "Jeff Weeks Portfolio",
    },
};