import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import AboutPage from '../views/AboutPage.vue';
import ContactPage from "../views/ContactPage.vue";
import TechnologiesPage from "../views/TechnologiesPage.vue";
import ProjectsPage from "../views/ProjectsPage.vue";
import SurprisePage from "../views/SurprisePage.vue";

const routes = [
    {
        path: "/",
        component: HomePage,
    },{
        path: "/about",
        component: AboutPage,
    },{
        path: "/contact",
        component: ContactPage,
    },{
        path: "/technologies",
        component: TechnologiesPage,
    },{
        path: "/projects",
        component: ProjectsPage,
    },{
        path: "/surprise",
        component: SurprisePage,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;