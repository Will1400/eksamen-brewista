export default {
	async addBrew(context, payload) {
		const response = await fetch(
			`https://brewista-aadec-default-rtdb.firebaseio.com/brews/${context.rootGetters["auth/userId"]}.json?auth=${context.rootGetters["auth/token"]}`,
			{
				method: "POST",
				body: JSON.stringify(payload),
			}
		);
		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.message || "Failed to add brew.");
		}

		context.commit("addBrew", {
			...payload,
			id: payload.coffee.id + payload.recipe.id,
		});
	},
	async editBrew(context, payload) {
		const key = payload.id;

		const response = await fetch(
			`https://brewista-aadec-default-rtdb.firebaseio.com/brews/${context.rootGetters["auth/userId"]}.json?auth=${context.rootGetters["auth/token"]}`,
			{
				method: "PATCH",
				body: JSON.stringify({
					[key]: payload,
				}),
			}
		);

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.message || "Failed to edit brew.");
		}

		await context.dispatch("loadBrews");
	},
	async loadBrews(context) {
		const response = await fetch(
			`https://brewista-aadec-default-rtdb.firebaseio.com/brews/${context.rootGetters["auth/userId"]}.json?auth=${context.rootGetters["auth/token"]}`
		);

		const data = await response.json();
		if (!response.ok) {
			throw new Error(data.message || "Failed to load brews.");
		}

		const brews = [];

		for (const key in data) {
			brews.push({
				id: key,
				...data[key],
			});
		}

		context.commit("setBrews", brews);
	},
};
