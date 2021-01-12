<template>
	<div class="flex gap-4 mb-10 mt-4">
		<button>🔙 Back</button>
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
