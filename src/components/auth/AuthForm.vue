<template>
	<div>
		<div class="flex justify-between">
			<button @click="back" class="flex items-center justify-center">
				<base-icon classes="w-6 h-6" icon="arrowBack"></base-icon>
			</button>
			<h1 class="text-center text-3xl">{{ submitButtonCaption }}</h1>
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
						v-model.trim="email"
						ref="emailInput"
					/>
				</div>
				<div>
					<label for="password">Password</label>
					<input
						class="form-control w-full"
						type="password"
						required
						id="password"
						v-model.trim="password"
					/>
				</div>
				<div>
					<p class="text-red-500">{{ error }}</p>
				</div>
				<button
					@click.prevent="submitData"
					class="mt-5 transition-all transform-gpu bg-gradient-to-b from-green-300 to-green-500 text-gray-100 rounded-xl p-4 hover:shadow-xl hover:scale-101"
				>
					{{ submitButtonCaption }}
				</button>
				<button class="text-sm" @click.prevent="switchMode">
					{{ switchModeButtonCaption }}
				</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	emits: ["auth-completed"],
	data() {
		return {
			email: "",
			password: "",
			mode: "login",
			error: null,
		};
	},
	methods: {
		back() {
			this.$router.go(-1);
		},
		switchMode() {
			this.mode = this.mode === "login" ? "signup" : "login";
		},
		async submitData() {
			this.error = null;

			if (!this.email || !this.password) {
				this.error = "Please enter a valid email & password.";
				return;
			}

			try {
				const info = {
					email: this.email,
					password: this.password,
				};

				if (this.mode === "login") {
					await this.$store.dispatch("auth/login", info);
				} else {
					await this.$store.dispatch("auth/signup", info);
				}
				this.$emit("auth-completed");
			} catch (err) {
				this.error = err;
			}
		},
	},
	computed: {
		submitButtonCaption() {
			return this.mode === "login" ? "Login" : "Sinup";
		},
		switchModeButtonCaption() {
			return this.mode === "login" ? "Sinup instead" : "Login instead";
		},
	},
	mounted() {
		this.$refs.emailInput.focus();
	},
};
</script>

<style></style>
