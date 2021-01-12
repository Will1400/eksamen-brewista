<template>
	<ul class="flex flex-col gap-4">
		<li v-for="brew in brews" :key="brew.id">
			<router-link :to="{ name: 'brewDetails', params: { id: brew.id } }">
				<brew-list-item :brew="brew"></brew-list-item>
			</router-link>
		</li>
	</ul>
</template>

<script>
import BrewListItem from "./BrewListItem.vue";
export default {
	components: { BrewListItem },
	computed: {
		brews() {
			return this.$store.getters["brew/brews"];
		},
	},
};
</script>
