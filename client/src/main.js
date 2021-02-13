import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import boot from 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import fa from './assets/fontawesome/css/all.css'
import customStyles from './assets/scss/main/index.css'
import VShowSlide from 'v-show-slide'
import i18n from './i18n'
import nProgressCss from 'nprogress/nprogress.css'
//Components
import intersectionAnimation from '@/assets/jsComponents/intersectionAnimtations'


import appLoading from '@/components/routesComps/Loading.vue'
import vLazyImage from 'v-lazy-image'


Vue.use(VShowSlide, {
	customEasing: {
		custom: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
	}
})

Vue.use(customStyles)
Vue.use(boot)
Vue.use(nProgressCss)
Vue.use(fa)
Vue.config.productionTip = true
Vue.prototype.$intersectionAnimation = intersectionAnimation
Vue.component('app-loading', appLoading)
Vue.component('v-lazy-image', vLazyImage)

new Vue({
	router,
	store,
	i18n,
	render: (h) => h(App)
}).$mount('#app')
