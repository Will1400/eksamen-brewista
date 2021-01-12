import { createStore } from "vuex";

import brewModule from "./modules/brew";
import coffeeModule from "./modules/coffee";
import recipieModule from "./modules/recipes";

export default createStore({
	modules: {
		brew: brewModule,
		recipe: recipieModule,
		coffee: coffeeModule,
	},
});
