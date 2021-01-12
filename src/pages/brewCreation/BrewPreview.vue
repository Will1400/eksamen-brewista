<template>
	<div class="flex items-start gap-4 mb-10 mt-4 h-full">
		<button>🔙 Back</button>
		<div>
			<h1>{{ recipe.title }}</h1>
			<recipe-small-details></recipe-small-details>
		</div>
	</div>
	<div>
		<button @click="finishBrew">Finish</button>
	</div>
</template>

<script>
import RecipeSmallDetails from "../../components/recipe/RecipeSmallDetails.vue";
export default {
	components: { RecipeSmallDetails },
	props: ["coffeeId", "recipeId"],
	methods: {
		finishBrew() {
			this.$store.dispatch("brew/addBrew", {
				recipe: this.recipe,
				coffee: this.coffee,
			});

			this.$router.push({ name: "brews" });
		},
	},
	computed: {
		recipe() {
			const recipes = this.$store.getters["recipe/recipes"];

			const recipe = recipes.find((x) => x.id == this.recipeId);
			return recipe;
		},
		coffee() {
			const coffees = this.$store.getters["coffee/coffees"];

			const coffee = coffees.find((x) => x.id == this.coffeeId);
			return coffee;
		},
	},
};
</script>

<style></style>
