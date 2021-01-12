<template>
	<div class="border border-solid p-6">
		<div>
			<h2 class="font-bold uppercase">{{ coffee.title }}</h2>
			<p class="text-gray-500 text-sm">{{ coffee.subtitle }}</p>
		</div>
		<div class="my-5 text-gray-700">
			{{ coffee.description }}
		</div>
		<div class="flex flex-wrap justify-between gap-y-4 text-sm">
			<div class="w-2/4">
				<h3 class="uppercase text-gray-500">process</h3>
				<p class="">{{ coffee.process }}</p>
			</div>
			<div class="w-2/4">
				<h3 class="uppercase text-gray-500">Roast Profile</h3>
				<p class="">{{ coffee.roastProfile }}</p>
			</div>
			<div class="w-2/4">
				<h3 class="uppercase text-gray-500">Varieties</h3>
				<p class="">{{ coffee.varieties.join(", ") }}</p>
			</div>
			<div class="w-2/4">
				<h3 class="uppercase text-gray-500">Country</h3>
				<p class="">{{ coffee.Country }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["coffee"],
};
</script>
<style></style>
