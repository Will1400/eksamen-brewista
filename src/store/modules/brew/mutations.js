export default {
	addBrew(state, payload) {
		state.brews.push(payload);
	},
	setBrews(state, payload) {
		state.brews = payload;
	},
};
