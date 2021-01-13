<template>
	<div>
		<div>
			<h2 class="uppercase text-gray-500 text-sm mb-3">Favorites</h2>
			<ul class="flex flex-col gap-4">
				<li v-for="brew in favoriteBrews" :key="brew.id">
					<router-link
						:to="{ name: 'brewDetails', params: { id: brew.id } }"
					>
						<brew-list-item :brew="brew"></brew-list-item>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="mt-10">
			<h2 class="uppercase text-gray-500 text-sm mb-3">Your brews</h2>
			<ul class="flex flex-col gap-4">
				<li v-for="brew in brews" :key="brew.id">
					<router-link
						:to="{ name: 'brewDetails', params: { id: brew.id } }"
					>
						<brew-list-item :brew="brew"></brew-list-item>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import BrewListItem from "./BrewListItem.vue";
export default {
	components: { BrewListItem },
	computed: {
		brews() {
			return this.$store.getters["brew/nonFavorites"];
		},
		favoriteBrews() {
			return this.$store.getters["brew/favorites"];
		},
	},
};
</script>
