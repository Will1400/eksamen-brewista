<template>
	<div class="md:shadow-xl md:p-10 md:rounded-md xl:mt-16">
		<auth-form @auth-completed="authenticated"></auth-form>
	</div>
</template>

<script>
import AuthForm from "../../components/auth/AuthForm.vue";
export default {
	components: { AuthForm },
	methods: {
		authenticated() {
			this.$router.replace({ name: "home" });
		},
	},
};
</script>
