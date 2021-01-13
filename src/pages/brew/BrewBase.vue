<template>
	<router-view v-slot="isProps">
		<transition name="route" mode="out-in">
			<component :is="isProps.Component"></component>
		</transition>
	</router-view>
</template>

<script>
export default {};
</script>

<style></style>
