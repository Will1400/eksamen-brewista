import { createRouter, createWebHistory } from "vue-router";

import BrewsOverview from "./pages/BrewsOverview.vue";
import BrewCreate from "./pages/BrewCreate.vue";
import BrewCreateCoffeeSelection from "./pages/brewCreation/BrewCreateCoffeeSelection.vue";
import BrewCreateRecipeSelection from "./pages/brewCreation/BrewCreateRecipeSelection.vue";
import BrewPreview from "./pages/brewCreation/BrewPreview.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", name: "home", redirect: "/brews" },
		{ path: "/brews", name: "brews", component: BrewsOverview },
		{
			path: "/brews/create",
			component: BrewCreate,
			children: [
				{
					path: "",
					name: "brewCreate",
					component: BrewCreateCoffeeSelection,
				},
				{
					path: ":coffeeId",
					name: "brewSelectRecipe",
					component: BrewCreateRecipeSelection,
					props: true,
				},
				{
					path: ":coffeeId",
					name: "brewSelectRecipe",
					component: BrewCreateRecipeSelection,
					props: true,
				},
				{
					path: ":coffeeId/:recipeId",
					name: "brewPreview",
					component: BrewPreview,
					props: true,
				},
			],
		},
	],
});

export default router;
