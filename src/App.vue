<template>
	<div class="container mx-auto p-4 min-h-screen">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.dispatch("auth/autoLogin");
	},
};
</script>
