import { createStore } from "vuex";

import authModule from "./modules/auth";

import brewModule from "./modules/brew";
import coffeeModule from "./modules/coffee";
import recipieModule from "./modules/recipes";

export default createStore({
	modules: {
		auth: authModule,
		brew: brewModule,
		recipe: recipieModule,
		coffee: coffeeModule,
	},
});
