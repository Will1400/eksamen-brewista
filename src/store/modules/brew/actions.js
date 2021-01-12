export default {
	addBrew(context, payload) {
		context.commit("addBrew", {
			...payload,
			id: payload.coffee.id + payload.recipe.id,
		});
	},
};
