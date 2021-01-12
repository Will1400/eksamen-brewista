<template>
	<div>
		<div class="flex justify-between">
			<button @click="back" class="flex items-center justify-center">
				<base-icon classes="w-6 h-6" icon="arrowBack"></base-icon>
			</button>
			<h1 class="text-center text-3xl">Login</h1>
			<p class="w-6"></p>
		</div>
		<div class="pt-10">
			<form class="flex flex-col gap-4">
				<div>
					<label for="email">Email</label>
					<input
						class="form-control w-full"
						required
						type="email"
						id="email"
					/>
				</div>
				<div>
					<label for="password">Password</label>
					<input
						class="form-control w-full"
						type="password"
						required
						id="password"
					/>
				</div>
				<button class="mt-5 bg-yellow-400 rounded-xl p-4">Login</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		back() {
			this.$router.go(-1);
		},
	},
};
</script>

<style></style>
