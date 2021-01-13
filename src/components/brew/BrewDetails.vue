<template>
	<div class="md:shadow-xl md:p-10 md:flex md:flex-col">
		<div class="flex justify-between items-start gap-4 mb-10 mt-4 h-full">
			<button @click="back" class="flex items-center justify-center">
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
			<div class="w-10">
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
		<slot name="actions"> </slot>
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
	},
	methods: {
		back() {
			this.$emit("go-back");
		},
		toggleFavorite() {
			const brew = this.brew;
			brew.isFavorite = !this.brew.isFavorite;

			this.$store.dispatch("brew/editBrew", brew);
		},
	},
};
</script>
