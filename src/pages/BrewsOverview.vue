<template>
	<div class="h-full">
		<div class="flex justify-between">
			<h1>Brewista</h1>
			<p>Profile</p>
		</div>
		<div class="mt-6">
			<h2 class="uppercase text-gray-500 text-sm mb-3">Latest brews</h2>
			<brew-list></brew-list>
		</div>
		<div class="fixed bottom-6 left-0 w-full">
			<div class="flex items-center justify-center">
				<router-link
					:to="{ name: 'brewCreate' }"
					class="bg-yellow-200 rounded-full px-10 py-5 font-bold uppercase"
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
};
</script>

<style></style>
