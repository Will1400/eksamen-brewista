<template>
	<div class="">
		<brew-details v-if="brew" :brew="brew" @go-back="back">
			<template v-slot:actions>
				<div class="flex justify-end mt-10">
					<button @click="finishBrew" class="flex items-center gap-3">
						<span class="uppercase font-bold">Finish</span>
						<base-icon
							classes="w-5 h-5"
							icon="arrowForward"
						></base-icon>
					</button>
				</div>
			</template>
		</brew-details>
	</div>
</template>

<script>
import BrewDetails from "/src/components/brew/BrewDetails.vue";
import RecipeSmallDetails from "/src/components/recipe/RecipeSmallDetails.vue";
export default {
	components: { RecipeSmallDetails, BrewDetails },
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
		brew() {
			return {
				recipe: this.recipe,
				coffee: this.coffee,
			};
		},
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
