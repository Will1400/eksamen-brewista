<template>
	<div>
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
		this.$store.dispatch("brew/loadBrews");
	},
};
</script>
