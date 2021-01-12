<template>
	<ul class="flex flex-col gap-4">
		<li v-for="brew in brews" :key="brew.id">
			<brew-list-item :brew="brew"></brew-list-item>
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
