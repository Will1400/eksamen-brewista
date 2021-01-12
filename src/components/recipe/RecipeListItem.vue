<template>
	<div class="border border-solid p-4">
		<div class="flex gap-2">
			<div class="flex items-center justify-center">
				<base-icon classes="w-16 h-16" :icon="recipe.icon"></base-icon>
			</div>
			<div class="w-full">
				<h2 class="font-bold text-lg">{{ recipe.title }}</h2>
				<recipe-small-details v-bind="recipe"></recipe-small-details>
			</div>
		</div>
	</div>
</template>

<script>
import RecipeSmallDetails from "./RecipeSmallDetails.vue";
export default {
	components: { RecipeSmallDetails },
	props: ["recipe"],
};
</script>
