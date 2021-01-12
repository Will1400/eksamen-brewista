<template>
	<div class="border-solid border flex py-4">
		<div class="flex items-center justify-center">
			<base-icon classes="w-20 h-20" :icon="brew.recipe.icon"></base-icon>
		</div>
		<div class="ml-2">
			<h2 class="uppercase font-bold">{{ brew.coffee.title }}</h2>
			<p class="text-gray-500 text-sm -top-1 relative">
				{{ brew.coffee.subtitle }}
			</p>
			<div class="text-gray-500">
				<recipe-small-details
					v-bind="brew.recipe"
				></recipe-small-details>
			</div>
		</div>
	</div>
</template>

<script>
import RecipeSmallDetails from "../recipe/RecipeSmallDetails.vue";
export default {
	components: { RecipeSmallDetails },
	props: ["brew"],
};
</script>
