<template>
	<div class="h-full">
		<div class="mt-6">
			<brew-list></brew-list>
		</div>
		<div
			class="fixed md:relative bottom-3 md:bottom-auto left-0 md:mt-4 w-full"
		>
			<div class="flex items-center justify-center">
				<router-link
					:to="{ name: 'brewCreate' }"
					class="transform-gpu transition-all rounded-full px-10 py-5 md:w-full bg-gradient-to-bl from-yellow-200 via-yellow-300 to-yellow-400 hover:-translate-y-1 md:rounded-lg hover:shadow-xl"
				>
					<span class="text-center font-bold uppercase block w-full">
						Brew a cup
					</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import BrewList from "/src/components/brew/BrewList.vue";
export default {
	components: { BrewList },
	mounted() {
		this.$store.dispatch("brew/loadBrews");
	},
};
</script>

<style></style>
