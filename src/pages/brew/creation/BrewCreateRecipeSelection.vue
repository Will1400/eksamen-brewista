<template>
	<div>
		<div class="flex gap-4 mb-10 mt-4">
			<button @click="back" class="flex items-center justify-center">
				<base-icon classes="w-6 h-6" icon="arrowBack"></base-icon>
			</button>
			<h1>How do you want to brew</h1>
		</div>
		<div>
			<p class="text-gray-500 text-sm">Choose a recipe</p>
			<recipe-picker @recipe-selected="recipeSelected"></recipe-picker>
		</div>
	</div>
</template>

<script>
import RecipePicker from "/src/components/recipe/RecipePicker.vue";
export default {
	components: { RecipePicker },
	props: ["coffeeId"],
	methods: {
		back() {
			this.$router.go(-1);
		},
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
