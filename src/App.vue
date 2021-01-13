<template>
	<div class="container mx-auto p-4 min-h-screen">
		<router-view v-slot="isProps">
			<transition name="route" mode="out-in">
				<component :is="isProps.Component"></component>
			</transition>
		</router-view>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.dispatch("auth/autoLogin");
	},
};
</script>
