<template>
	<div class="flex items-start gap-4 mb-10 mt-4 h-full">
		<button @click="back" class="flex items-center justify-center">
			<base-icon classes="w-6 h-6" icon="arrowBack"></base-icon>
		</button>
		<div>
			<h1 class="text-lg">{{ brew.recipe.title }}</h1>
			<recipe-small-details v-bind="brew.recipe"></recipe-small-details>
		</div>
	</div>
	<div>
		<ul class="flex flex-col gap-6">
			<li v-for="(step, index) in brew.recipe.steps" :key="index">
				<p class="uppercase text-sm text-gray-500">
					Step {{ index + 1 }}
				</p>
				<p class="text-gray-600">{{ step }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
import RecipeSmallDetails from "/src/components/recipe/RecipeSmallDetails.vue";
export default {
	components: { RecipeSmallDetails },
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
			console.log(this.id);
			console.log(brews);
			console.log(brew);
			return brew;
		},
	},
};
</script>
