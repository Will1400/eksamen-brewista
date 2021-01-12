<template>
	<div class="flex items-start gap-4 mb-10 mt-4 h-full">
		<button class="flex items-center justify-center">
			<base-icon classes="w-6 h-6" icon="arrowBack"></base-icon>
		</button>
		<div>
			<h1>{{ recipe.title }}</h1>
			<recipe-small-details v-bind="recipe"></recipe-small-details>
		</div>
	</div>
	<div>
		<ul>
			<li>step 1</li>
		</ul>
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
