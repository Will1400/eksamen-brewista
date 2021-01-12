<template>
	<div class="h-full">
		<div class="flex justify-between pt-2">
			<h1 class="text-gray-600 text-lg">Brewista</h1>
			<div class="text-gray-500">
				<base-icon classes="w-8 h-8" icon="user"></base-icon>
			</div>
		</div>
		<div class="mt-6">
			<h2 class="uppercase text-gray-500 text-sm mb-3">Latest brews</h2>
			<brew-list></brew-list>
		</div>
		<div class="fixed bottom-3 left-0 w-full">
			<div class="flex items-center justify-center">
				<router-link
					:to="{ name: 'brewCreate' }"
					class="bg-yellow-200 transform-gpu transition-colors rounded-full px-10 py-5 font-bold uppercase focus:translate-y-1 hover:bg-yellow-400"
				>
					Brew a cup
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import BrewList from "/src/components/brew/BrewList.vue";
export default {
	components: { BrewList },
	computed: {
		brews() {
			return this.$store.getters["brew/brews"];
		},
	},
};
</script>

<style></style>
