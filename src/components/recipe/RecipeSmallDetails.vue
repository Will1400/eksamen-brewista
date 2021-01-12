<template>
	<div class="flex justify-between w-full text-gray-500 gap-4 text-sm">
		<div>
			<p>{{ beanAmount }}</p>
		</div>
		<div>
			<p>{{ waterAmount }}</p>
		</div>
		<div>
			<p>{{ grindSize }}</p>
		</div>
		<div>
			<p>{{ time }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ["beanAmount", "waterAmount", "grindSize", "time"],
};
</script>

<style></style>
