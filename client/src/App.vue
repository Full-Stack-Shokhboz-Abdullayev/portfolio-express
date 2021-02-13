<template>
	<div>
		<div class="editToggler btn" @click="$store.commit('toggleEditMode')">
			<i class="fa fa-edit"></i>
		</div>
		

		<app-header></app-header>
		<keep-alive max="5">
			<div class="min-h">
				<transition name="v-router" mode="out-in">
					<router-view />
				</transition>
			</div>
		</keep-alive>
		<app-footer></app-footer>
	</div>
</template>

<script>
import appHeader from './components/mainComps/Header'
import appFooter from './components/mainComps/Footer'

export default {
	components: {
		appHeader,
		appFooter
	},
	methods: {},
	head() {
		return {
			title: 'Shokhboz Abdullayev',
			titleTemplate: '%s | shox-pro.com'
		}
	},
	computed: {
		currentYear() {
			return new Date().getFullYear()
		}
	}
}
</script>

<style>
.min-h {
	min-height: 100vh !important;
}
.publish-btn {
	position: fixed !important;
	top: 25px;
	right: 55px;
	z-index: 100;
}
</style>
