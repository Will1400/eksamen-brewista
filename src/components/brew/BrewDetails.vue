<template>
	<div class="md:shadow-xl md:p-10 md:flex md:flex-col">
		<div
			class="flex justify-between items-start gap-4 sm:mb-10 mt-4 h-full"
		>
			<button @click="back" class="flex items-center justify-start w-28">
				<base-icon classes="w-6 h-6" icon="arrowBack"></base-icon>
			</button>
			<div class="flex">
				<div class="self-center">
					<base-icon
						classes="w-10 h-10"
						:icon="brew.recipe.icon"
					></base-icon>
				</div>
				<div>
					<h1 class="text-lg">{{ brew.coffee.title }}</h1>
					<recipe-small-details
						v-bind="brew.recipe"
					></recipe-small-details>
				</div>
			</div>
			<div class="w-28 flex gap-4 items-center flex-col sm:flex-row">
				<div v-if="isEditable">
					<button
						@click="edit"
						class="flex group sm:gap-2 sm:border-b-2 px-2 py-2 border-transparent transition-all hover:border-yellow-400"
					>
						<span class="hidden sm:inline">Edit</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="w-5 transition-all group-hover:text-yellow-400"
						>
							<path
								d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
							/>
						</svg>
					</button>
				</div>
				<div v-if="isFavoritable">
					<button @click="toggleFavorite">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								:fill="
									brew.isFavorite ? 'currentColor' : 'none'
								"
								viewBox="0 0 24 24"
								stroke="currentColor"
								class="w-10 text-red-400"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
								/>
							</svg>
						</div>
					</button>
				</div>
			</div>
		</div>
		<div>
			<ul class="flex flex-col gap-6">
				<li v-for="(step, index) in brew.recipe.steps" :key="index">
					<p class="uppercase text-sm text-gray-500">
						Step {{ index + 1 }}
					</p>
					<p class="text-gray-600">{{ step }}</p>
				</li>
			</ul>
		</div>
		<slot name="actions"></slot>
	</div>
</template>

<script>
import RecipeSmallDetails from "/src/components/recipe/RecipeSmallDetails.vue";
export default {
	components: { RecipeSmallDetails },
	emits: ["go-back"],
	props: {
		brew: Object,
		isFavoritable: Boolean,
		isEditable: Boolean,
	},
	methods: {
		back() {
			this.$emit("go-back");
		},
		edit() {
			this.$router.push({
				name: "brewEdit",
				params: { id: this.brew.id },
			});
		},
		toggleFavorite() {
			const brew = this.brew;
			brew.isFavorite = !this.brew.isFavorite;

			this.$store.dispatch("brew/editBrew", brew);
		},
	},
};
</script>
