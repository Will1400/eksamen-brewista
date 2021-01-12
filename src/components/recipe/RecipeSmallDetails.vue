<template>
	<div class="flex justify-between w-full text-gray-500 gap-3 text-sm">
		<div class="flex items-center">
			<base-icon classes="w-3 h-3" icon="bean"></base-icon>
			<p class="ml-1">{{ beanAmount }}</p>
		</div>
		<div class="flex items-center">
			<base-icon classes="w-3 h-3" icon="water"></base-icon>
			<p class="ml-1">{{ waterAmount }}</p>
		</div>
		<div class="flex items-center">
			<base-icon classes="w-3 h-3" icon="grind"></base-icon>
			<p class="ml-1">{{ grindSize }}</p>
		</div>
		<div class="flex items-center">
			<base-icon classes="w-3 h-3" icon="time"></base-icon>
			<p class="ml-1">{{ time }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ["beanAmount", "waterAmount", "grindSize", "time"],
};
</script>

<style></style>
