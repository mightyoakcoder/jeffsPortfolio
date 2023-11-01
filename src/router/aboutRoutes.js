export const aboutRoutes = {
    path: "/about",
    name: "AboutRoute",
    component: () => import("../views/AboutView.vue"),
    meta: {
        title: "About Jeff Weeks",
    },
};