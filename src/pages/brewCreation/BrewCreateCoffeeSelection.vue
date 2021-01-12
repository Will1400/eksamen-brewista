<template>
	<div class="flex gap-4 mb-10 mt-4 items-center">
		<button @click="back" class="flex items-center justify-center">
			<base-icon classes="w-6 h-6" icon="arrowBack"></base-icon>
		</button>
		<h1>Pick your coffee</h1>
	</div>
	<div>
		<coffee-picker @coffee-selected="coffeeSelected"></coffee-picker>
	</div>
</template>

<script>
import CoffeePicker from "../../components/coffee/CoffeePicker.vue";
export default {
	components: { CoffeePicker },
	methods: {
		back() {
			this.$router.go(-1);
		},
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
