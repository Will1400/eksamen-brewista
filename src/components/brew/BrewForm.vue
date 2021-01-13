<template>
	<div>
		<div>
			<form @submit.prevent="submitData" class="flex flex-col gap-4">
				<div>
					<label for="water">Water</label>
					<div class="w-full flex items-center gap-2">
						<input
							class="form-control flex-grow"
							type="number"
							id="water"
							v-model="water"
							min="100"
							max="1000"
							required
							ref="waterInput"
						/>
						<p class="w-12">ml</p>
					</div>
				</div>
				<div>
					<label for="bean">Bean amount</label>
					<div class="w-full flex items-center gap-2">
						<input
							class="form-control flex-grow"
							type="number"
							id="bean"
							min="10"
							max="100"
							v-model="beans"
							required
						/>
						<p class="w-12">grams</p>
					</div>
				</div>
				<div>
					<label for="water">Grind size</label>
					<select
						class="form-control w-full"
						id="grind"
						v-model="grind"
						required
					>
						<option disabled value="">Please select one</option>
						<option>Medium</option>
						<option>Fine</option>
						<option>Coarse</option>
					</select>
				</div>
				<div class="mt-10">
					<button
						type="submit"
						class="bg-gradient-to-bl from-green-200 to-green-500 px-6 py-2 w-full text-gray-100 transition-all hover:shadow-lg"
					>
						Edit
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	props: ["brew"],
	emits: ["form-completed"],
	data() {
		return {
			water: 0,
			beans: 0,
			grind: "Mediun",
		};
	},
	methods: {
		submitData() {
			this.brew.recipe.waterAmount = this.water;
			this.brew.recipe.beanAmount = this.beans;
			this.brew.recipe.grindSize = this.grind;
			this.$emit("form-completed", this.brew);
		},
	},
	watch: {
		brew() {
			this.water = this.brew.recipe.waterAmount;
			this.beans = this.brew.recipe.beanAmount;
			this.grind = this.brew.recipe.grindSize;
		},
	},
	mounted() {
		if (this.$refs.waterInput) {
			this.$refs.waterInput.focus();
		}
	},
};
</script>

<style></style>
