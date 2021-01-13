<template>
	<div>
		<brew-details v-if="brew" :brew="brew" @go-back="back"></brew-details>
	</div>
</template>

<script>
import BrewDetails from "../../components/brew/BrewDetails.vue";
import RecipeSmallDetails from "/src/components/recipe/RecipeSmallDetails.vue";
export default {
	components: { RecipeSmallDetails, BrewDetails },
	props: ["id"],
	methods: {
		back() {
			this.$router.go(-1);
		},
	},
	computed: {
		brew() {
			const brews = this.$store.getters["brew/brews"];

			const brew = brews.find((x) => x.id == this.id);
			return brew;
		},
	},
};
</script>
