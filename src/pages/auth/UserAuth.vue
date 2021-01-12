<template>
	<auth-form @auth-completed="authenticated"></auth-form>
</template>

<script>
import AuthForm from "../../components/auth/AuthForm.vue";
export default {
	components: { AuthForm },
	methods: {
		authenticated() {
			this.$router.replace({ name: "brews" });
		},
	},
};
</script>
