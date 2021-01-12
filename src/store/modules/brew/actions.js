export default {
	addBrew(context, payload) {
		context.commit("addBrew", payload);
		console.log(payload);
	},
};
