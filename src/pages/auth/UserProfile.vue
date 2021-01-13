<template>
	<div class="p-0 m-0 md:shadow-xl md:p-10">
		<div class="flex gap-4 mb-10 mt-4 items-center justify-between">
			<button @click="back" class="flex items-center justify-center">
				<base-icon classes="w-6 h-6" icon="arrowBack"></base-icon>
			</button>
			<h1 class="text-xl">Profile</h1>
			<div class="w-6"></div>
		</div>
		<div class="mt-5">
			<div class="sm:w-2/6 mx-auto">
				<profile-details></profile-details>
			</div>
			<div class="flex justify-center">
				<button
					@click="logout"
					class="px-4 py-2 w-full sm:w-auto mt-10 flex gap-2 items-center justify-center rounded-md transition-all border-2 border-red-500 hover:shadow-xl hover:bg-red-500 hover:text-gray-100"
				>
					<span> Sign out </span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="w-6 h-6"
					>
						<path
							fill-rule="evenodd"
							d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import ProfileDetails from "../../components/profile/ProfileDetails.vue";
export default {
	components: { ProfileDetails },
	methods: {
		back() {
			this.$router.go(-1);
		},
		logout() {
			this.$store.dispatch("auth/logout");
			this.$router.push({ name: "home" });
		},
	},
};
</script>
