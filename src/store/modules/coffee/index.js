import getters from "./getters";

export default {
	namespaced: true,
	state() {
		return {
			coffees: [
				{
					id: "Calahute123",
					title: "Calahute alto",
					subtitle: "Nordhavn Coffee",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iusto officia voluptas distinctio asperiores ullam omnis rerum dolorum ipsa optio.",
					process: "Washed",
					roastProfile: "Medium",
					Country: "Guatermala",
					varieties: ["Castilo", "Caturra"],
				},
				{
					id: "Beza123",
					title: "Beza",
					subtitle: "Impact Roaster",
					description:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iusto officia voluptas distinctio asperiores ullam omnis rerum dolorum ipsa optio.",
					process: "Sun Dried",
					roastProfile: "Medium",
					Country: "Ethiopia",
					varieties: ["Castilo", "Caturra"],
				},
			],
		};
	},
	getters,
};
