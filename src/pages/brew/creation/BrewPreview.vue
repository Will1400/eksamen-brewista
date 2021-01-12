<template>
	<div class="flex items-start gap-4 mb-10 mt-4 h-full">
		<button @click="back" class="flex items-center justify-center">
			<base-icon classes="w-6 h-6" icon="arrowBack"></base-icon>
		</button>
		<div>
			<h1 class="text-lg">{{ recipe.title }}</h1>
			<recipe-small-details v-bind="recipe"></recipe-small-details>
		</div>
	</div>
	<div>
		<ul class="flex flex-col gap-6">
			<li v-for="(step, index) in recipe.steps" :key="index">
				<p class="uppercase text-sm text-gray-500">
					Step {{ index + 1 }}
				</p>
				<p class="text-gray-600">{{ step }}</p>
			</li>
		</ul>
	</div>
	<div class="flex justify-end mt-10">
		<button @click="finishBrew" class="flex items-center gap-3">
			<span class="uppercase font-bold">Finish</span>
			<base-icon classes="w-5 h-5" icon="arrowForward"></base-icon>
		</button>
	</div>
</template>

<script>
import RecipeSmallDetails from "/src/components/recipe/RecipeSmallDetails.vue";
export default {
	components: { RecipeSmallDetails },
	props: ["coffeeId", "recipeId"],
	methods: {
		back() {
			this.$router.go(-1);
		},
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
