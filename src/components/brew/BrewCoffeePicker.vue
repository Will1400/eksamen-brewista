<template>
	<ul class="flex flex-col gap-4">
		<li v-for="coffee in coffees" :key="coffee.id">
			<button
				@click="coffeeSelected(coffee.id)"
				class="text-left hover:bg-gray-200"
			>
				<coffee-list-item :coffee="coffee"></coffee-list-item>
			</button>
		</li>
	</ul>
</template>

<script>
import { mapGetters } from "vuex";
import CoffeeListItem from "../coffee/CoffeeListItem.vue";
export default {
	components: { CoffeeListItem },
	emits: ["coffee-selected"],
	methods: {
		coffeeSelected(id) {
			this.$emit("coffee-selected", id);
		},
	},
	computed: {
		coffees() {
			return this.$store.getters["coffee/coffees"];
		},
	},
};
</script>

<style></style>
