export default {
	brews(state) {
		return state.brews;
	},
	favorites(_, getters) {
		return getters.brews.filter((x) => x.isFavorite);
	},
	nonFavorites(_, getters) {
		return getters.brews.filter((x) => !x.isFavorite);
	},
};
