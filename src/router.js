import { createRouter, createWebHistory } from "vue-router";

import BrewsOverview from "./pages/BrewsOverview.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", name: "home", redirect: "/brews" },
		{ path: "/brews", name: "brews", component: BrewsOverview },
	],
});

export default router;
