<template>
	<div class="md:shadow-xl md:p-10 md:flex md:flex-col">
		<div class="flex justify-between items-start gap-4 mb-10 mt-4">
			<button @click="back" class="flex items-center justify-center">
				<base-icon classes="w-6 h-6" icon="arrowBack"></base-icon>
			</button>
			<h2 class="text-xl font-semibold">Edit</h2>
			<div class="w-6"></div>
		</div>
		<div>
			<brew-form :brew="brew" @form-completed="editBrew"></brew-form>
		</div>
	</div>
</template>

<script>
import BrewForm from "/src/components/brew/BrewForm.vue";
export default {
	components: { BrewForm },
	props: ["id"],
	methods: {
		back() {
			this.$router.go(-1);
		},
		editBrew(brew) {
			console.log(brew);
			this.$store.dispatch("brew/editBrew", brew);
			this.$router.replace({
				name: "brewDetails",
				params: { id: this.id },
			});
		},
	},
	computed: {
		brew() {
			const brews = this.$store.getters["brew/brews"];

			return brews.find((x) => x.id === this.id);
		},
	},
	mounted() {
		this.$store.dispatch("brew/loadBrews");
	},
};
</script>

<style></style>
