<template>
	<div
		class="d-flex justify-content-center align-items-center lc"
		:class="{ 'small-parent': small }"
	>
		<div
			v-if="condition"
			class="loader"
			id="loader"
			:class="{ small }"
		></div>
		
	</div>
</template>

<script>


export default {
	data() {
		return {
			ticked: false
		}
	},
	props: {
		condition: Boolean,
		small: {
			type: Boolean,
			default: false
		}
	},
}
</script>

<style lang="scss" scoped>

</style>
