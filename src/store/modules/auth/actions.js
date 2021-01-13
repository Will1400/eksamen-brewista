function getErrorMessage(errorType) {
	if (errorType === "INVALID_PASSWORD") {
		return "Incorrect password";
	} else if (errorType === "EMAIL_NOT_FOUND") {
		return "Could not find a user with that email";
	} else if (errorType === "EMAIL_EXISTS") {
		return "A user with that email already exists";
	} else {
		return null;
	}
}

let timer;

export default {
	async login(context, payload) {
		return context.dispatch("auth", {
			...payload,
			url:
				"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCf46yH96CWB8H0LjfEGBGjukv0EZpjgcA",
		});
	},
	async signup(context, payload) {
		return context.dispatch("auth", {
			...payload,
			url:
				"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCf46yH96CWB8H0LjfEGBGjukv0EZpjgcA",
		});
	},
	async auth(context, payload) {
		const response = await fetch(payload.url, {
			method: "POST",
			body: JSON.stringify({
				email: payload.email,
				password: payload.password,
				returnSecureToken: true,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			const error = new Error(
				getErrorMessage(data.error.message) || "Failed to authenticate"
			);
			throw error;
		}

		const expirationDate = new Date().getTime() + data.expiresIn * 1000;
		localStorage.setItem("userId", data.localId);
		localStorage.setItem("token", data.idToken);
		localStorage.setItem("tokenExpiration", expirationDate);

		timer = setTimeout(() => {
			context.dispatch("setAutoLogout");
		}, data.expiresIn * 1000);

		context.commit("setUser", {
			token: data.idToken,
			userId: data.localId,
		});
	},
	autoLogin(context) {
		const userId = localStorage.getItem("userId");
		const token = localStorage.getItem("token");
		const tokenExpiration = localStorage.getItem("tokenExpiration");
		const expiresIn = tokenExpiration - new Date().getTime();

		if (expiresIn < 0) {
			context.dispatch("logout");
			return;
		}

		timer = setTimeout(() => {
			context.dispatch("setAutoLogout");
		}, expiresIn);

		if (token && userId) {
			context.commit("setUser", {
				userId,
				token,
			});
		}
	},
	logout(context) {
		localStorage.removeItem("userId");
		localStorage.removeItem("token");
		localStorage.removeItem("tokenExpiration");

		clearTimeout(timer);
		context.commit("setUser", {
			userId: null,
			token: null,
		});
	},
	setAutoLogout(context) {
		context.dispatch("logout");
		context.commit("setAutoLogout");
	},
};
