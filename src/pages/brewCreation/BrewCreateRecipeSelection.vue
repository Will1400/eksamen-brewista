<template>
	<div class="flex gap-4 mb-10 mt-4">
		<button>🔙 Back</button>
		<h1>Pick your recipe</h1>
	</div>
	<div>
		<recipe-picker @recipe-selected="recipeSelected"></recipe-picker>
	</div>
</template>

<script>
import RecipePicker from "../../components/recipe/RecipePicker.vue";
export default {
	components: { RecipePicker },
	props: ["coffeeId"],
	methods: {
		recipeSelected(id) {
			console.log(id);
			this.$router.push({
				name: "brewPreview",
				params: { coffeeId: this.coffeeId, recipeId: id },
			});
		},
	},
};
</script>

<style></style>
