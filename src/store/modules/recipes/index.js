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
					steps: [
						"Add ground coffee to inverse aeropress",
						"Start timer",
						"Add 50g of 93c water to aeropress for 10s",
						"Stir five times",
						"Add last 180g of water and stir to mix",
						"After 1 min gently press coffee into cup",
					],
				},
				{
					id: "FrenchPress321",
					icon: "frenchpress",
					title: "French Press",
					beanAmount: "33g",
					waterAmount: "500ml",
					grindSize: "Coarse",
					time: "4min",
					steps: [
						"Add ground coffee to inverse aeropress",
						"Start timer",
						"Add 50g of 93c water to aeropress for 10s",
						"Stir five times",
						"Add last 180g of water and stir to mix",
						"After 1 min gently press coffee into cup",
					],
				},
				{
					id: "AeroPres321",
					icon: "aeropress",
					title: "AeroPress",
					beanAmount: "16g",
					waterAmount: "230ml",
					grindSize: "Medium",
					time: "1min",
					steps: [
						"Add ground coffee to inverse aeropress",
						"Start timer",
						"Add 50g of 93c water to aeropress for 10s",
						"Stir five times",
						"Add last 180g of water and stir to mix",
						"After 1 min gently press coffee into cup",
					],
				},
			],
		};
	},
	getters,
};
