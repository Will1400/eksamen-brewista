<template>
	<div
		v-if="showHeader"
		class="flex justify-between px-4 py-2 mb-4 shadow-sm"
	>
		<h1 class="text-gray-600 text-lg">Brewista</h1>
		<div class="text-gray-500">
			<router-link :to="{ name: 'profile' }">
				<base-icon classes="w-8 h-8" icon="user"></base-icon>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showHeader: true,
		};
	},
	watch: {
		$route() {
			const route = this.$route;
			console.log(route);

			this.showHeader = !route.meta.noHeader;
		},
	},
};
</script>
