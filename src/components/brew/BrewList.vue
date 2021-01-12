<template>
	<ul class="flex flex-col gap-4">
		<li>
			<brew-list-item></brew-list-item>
		</li>
	</ul>
</template>

<script>
import BrewListItem from "./BrewListItem.vue";
export default {
	components: { BrewListItem },
};
</script>
