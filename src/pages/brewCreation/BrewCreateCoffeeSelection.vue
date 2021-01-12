<template>
	<div class="flex gap-4 mb-10 mt-4 items-center">
		<button class="flex items-center justify-center">
			<base-icon classes="w-6 h-6" icon="arrowBack"></base-icon>
		</button>
		<h1>Pick your coffee</h1>
	</div>
	<div>
		<brew-coffee-picker
			@coffee-selected="coffeeSelected"
		></brew-coffee-picker>
	</div>
</template>

<script>
import BrewCoffeePicker from "../../components/brew/BrewCoffeePicker.vue";
export default {
	components: { BrewCoffeePicker },
	methods: {
		coffeeSelected(id) {
			console.log(id);
			this.$router.push({
				name: "brewSelectRecipe",
				params: { coffeeId: id },
			});
		},
	},
};
</script>

<style></style>
