import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import boot from "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueResource from "vue-resource";
import fa from './assets/fontawesome/css/all.css'
import customStyles from './assets/scss/main/index.css'
import VueRellax from "vue-rellax"
import VShowSlide from "v-show-slide"
import i18n from './i18n'
import nProgressCss from "nprogress/nprogress.css"

Vue.use(BootstrapVue);
Vue.use(VueRellax);
Vue.use(VShowSlide, {
	customEasing: {
		custom: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
	},
});
Vue.use(nProgressCss)
Vue.use(customStyles);
Vue.use(boot);
Vue.use(fa);
Vue.use(VueResource);
Vue.config.productionTip = true;



new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App)
}).$mount("#app");


