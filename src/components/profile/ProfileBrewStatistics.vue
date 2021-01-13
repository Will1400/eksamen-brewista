<template>
	<div>
		<ul class="flex flex-col sm:flex-row justify-center gap-5">
			<li>
				<div
					class="shadow-xl p-5 rounded-lg bg-gradient-to-bl from-pink-300 via-purple-300 to-indigo-400 text-gray-200 flex flex-col justify-center items-center relative"
				>
					<h3 class="text-sm font-semibold bottom-1.5 relative">
						Total Brews
					</h3>
					<p class="text-center font-bold text-xl">
						{{ totalBrews }}
					</p>
				</div>
			</li>
			<li>
				<div
					class="shadow-xl p-5 rounded-lg bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-gray-200 flex flex-col justify-center items-center relative"
				>
					<h3 class="text-sm font-semibold bottom-1.5 relative">
						Favorite Brews
					</h3>
					<p class="text-center font-bold text-xl">
						{{ favoriteBrews }}
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	computed: {
		totalBrews() {
			return this.$store.getters["brew/brews"].length;
		},
		favoriteBrews() {
			return this.$store.getters["brew/favorites"].length;
		},
	},
};
</script>

<style></style>
