<template>
	<ul class="flex flex-col gap-6">
		<li v-for="recipe in recipes" :key="recipe.id">
			<button
				@click="recipeSelected(recipe.id)"
				class="card text-left w-full"
			>
				<recipe-list-item :recipe="recipe"></recipe-list-item>
			</button>
		</li>
	</ul>
</template>

<script>
import { mapGetters } from "vuex";
import RecipeListItem from "./RecipeListItem.vue";
export default {
	components: { RecipeListItem },
	emits: ["recipe-selected"],
	methods: {
		recipeSelected(id) {
			if (id) {
				this.$emit("recipe-selected", id);
			}
		},
	},
	computed: {
		recipes() {
			return this.$store.getters["recipe/recipes"];
		},
	},
};
</script>

<style></style>
