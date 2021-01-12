<template>
	<div class="border border-solid p-4">
		<div class="flex gap-4">
			<div class="flex items-center justify-center">img</div>
			<div class="w-full">
				<h2 class="font-bold text-lg">{{ recipe.title }}</h2>
				<div class="flex justify-between w-full text-gray-500 text-sm">
					<div>
						<p>{{ recipe.beanAmount }}</p>
					</div>
					<div>
						<p>{{ recipe.waterAmount }}</p>
					</div>
					<div>
						<p>{{ recipe.type }}</p>
					</div>
					<div>
						<p>{{ recipe.time }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["recipe"],
};
</script>

<style></style>
