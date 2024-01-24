import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ConverterView from "../views/ConverterView.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import Game from "../components/Game.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView,
        },
        {
            path: "/converter",
            name: "Converter",
            component: ConverterView,
        },
        {
            path: "/game",
            name: "Game",
            component: Game,
        },
        {
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: NotFoundPage,
        }
    ],
});

export default router;