<template>
	<div>
		<app-header></app-header>
		<transition name="v-router" mode="out-in">
			<keep-alive max="5">
				<router-view/>
			</keep-alive>
		</transition>

		<app-footer></app-footer>
	</div>
</template>

<script>
import appHeader from './components/mainComps/Header';
import appFooter from './components/mainComps/Footer';

export default {
	
	components: {
		appHeader,
		appFooter
	},
	methods: {
		
	},
	computed: {
		currentYear() {
			return new Date().getFullYear();
		}
	},

};
</script>

<style lang="scss"></style>
