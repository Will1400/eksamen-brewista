import getters from "./getters";

export default {
	namespaced: true,
	state() {
		return {
			recipes: [
				{
					id: "AeroPress321",
					icon: "aeropress",
					title: "AeroPress",
					beanAmount: "16g",
					waterAmount: "230ml",
					grindSize: "Medium",
					time: "1min",
				},
			],
		};
	},
	getters,
};
