import { createRouter, createWebHistory } from "vue-router";

import UserAuth from "./pages/auth/UserAuth.vue";
import UserProfile from "./pages/auth/UserProfile.vue";

import HomePage from "./pages/HomePage.vue";

import BrewBase from "./pages/brew/BrewBase.vue";
import BrewsOverview from "./pages/brew/BrewsOverview.vue";
import BrewCreate from "./pages/brew/BrewCreate.vue";
import BrewCreateCoffeeSelection from "./pages/brew/creation/BrewCreateCoffeeSelection.vue";
import BrewCreateRecipeSelection from "./pages/brew/creation/BrewCreateRecipeSelection.vue";
import BrewPreview from "./pages/brew/creation/BrewPreview.vue";

import BrewSpecific from "./pages/brew/specific/BrewSpecific.vue";
import BrewDetails from "./pages/brew/specific/BrewDetailsPage.vue";
import BrewEdit from "./pages/brew/specific/BrewEdit.vue";

import store from "./store";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			meta: { requiresUnAuth: true },
			component: HomePage,
		},
		{ path: "/auth", name: "auth", component: UserAuth },
		{
			path: "/profile",
			name: "profile",
			component: UserProfile,
			meta: { requiresAuth: true },
		},
		{
			path: "/brews",
			component: BrewBase,
			meta: { requiresAuth: true },
			children: [
				{ path: "", name: "brews", component: BrewsOverview },
				{
					path: ":id",
					name: "brewSpecific",
					component: BrewSpecific,
					redirect: { name: "brewDetails" },
					children: [
						{
							path: "",
							name: "brewDetails",
							component: BrewDetails,
							props: true,
						},
						{
							path: "edit",
							name: "brewEdit",
							component: BrewEdit,
							props: true,
						},
					],
				},
				{
					path: "create",
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
		},
		{
			path: "/:notFound(.*)",
			name: "notFound",
			redirect: { name: "home" },
		},
	],
});

router.beforeEach(function (to, from, next) {
	if (to.meta.requiresAuth && !store.getters["auth/isAuthenticated"]) {
		next({ name: "auth" });
	} else if (
		to.meta.requiresUnAuth &&
		store.getters["auth/isAuthenticated"]
	) {
		next({ name: "brews" });
	} else {
		next();
	}
});

export default router;
