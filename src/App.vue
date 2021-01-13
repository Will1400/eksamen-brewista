<template>
	<div class="min-h-screen">
		<div class="container md:max-w-7xl lg:pt-10 lg:mb-20 lg mx-auto p-4">
			<the-header></the-header>
			<router-view v-slot="isProps">
				<transition name="route" mode="out-in">
					<component :is="isProps.Component"></component>
				</transition>
			</router-view>
		</div>
	</div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
	components: { TheHeader },
	mounted() {
		this.$store.dispatch("auth/autoLogin");
	},
};
</script>

<style scoped>
.route-enter-from {
	opacity: 0;
	transform: translateY(-30px);
}
.route-leave-to {
	opacity: 0;
	transform: translateY(30px);
}

.route-enter-active {
	transition: 0.2s ease-out;
}
.route-leave-active {
	transition: 0.2s ease-in;
}

.route-enter-to,
.route-leave-from {
	opacity: 1;
	transition: translateY(0);
}
</style>
