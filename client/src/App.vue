<template>
	<div>
		<app-header></app-header>
		<transition name="v-router" mode="out-in">
			<router-view />
		</transition>
		<app-footer></app-footer>
	</div>
</template>

<script>
import appHeader from "./components/mainComps/Header"
import appFooter from "./components/mainComps/Footer"


export default {
	components: {
		appHeader,
		appFooter
	},
	
	computed: {
		currentYear() {
			return new Date().getFullYear();
		},
	},
};
</script>

<style lang="scss">

</style>
