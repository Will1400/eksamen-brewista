import { createStore } from "vuex";

import brewModule from "./modules/brew";
import coffeeModule from "./modules/coffee";
import recipieModule from "./modules/recipies";

export default createStore({
	modules: {
		brew: brewModule,
		recipie: recipieModule,
		coffee: coffeeModule,
	},
});
