<template>
	<div>
		<div class="mt-20">
			<div class="w-full flex flex-col justify-center items-center">
				<h2 class="text-4xl font-bold">Brewista</h2>
				<h3 class="text-gray-500">It's time to brew</h3>
			</div>
			<div class="w-full flex flex-col justify-center items-center mt-20">
				<p class="mb-2 text-gray-600">Login to manage your brews</p>
				<button
					@click="goToAuth"
					class="bg-gradient-to-bl from-green-200 to-green-500 w-full md:w-2/5 text-gray-100 px-8 py-4 rounded-lg"
				>
					Login
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		goToAuth() {
			this.$router.push({ name: "auth" });
		},
	},
};
</script>

<style></style>
