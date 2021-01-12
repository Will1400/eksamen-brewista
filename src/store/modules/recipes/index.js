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
					type: "Medium",
					time: "1min",
				},
			],
		};
	},
	getters,
};
