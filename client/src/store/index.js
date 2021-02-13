import Vue from 'vue'
import Vuex from 'vuex'

import Projects from './modules/projects'
import Faqs from './modules/faqs'
import Blogs from './modules/blogs'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		editMode: false,
		projectIsUpdating: false,
		prevRoute: {
			name: null,
			query: {}
		},
		socials: [
			{
				icon: 'fa-github-alt',
				link: 'https://github.com/Full-Stack-Shokhboz-Abdullayev/'
			},
			{
				icon: 'fa-linkedin',
				link:
					'https://www.linkedin.com/in/shokhboz-abdullayev-8545b01b9/'
			},
			{
				icon: 'fa-facebook',
				link: 'https://www.facebook.com/shokhboz.abdullayev.7/'
			},
			{
				icon: 'fa-instagram',
				link: 'https://www.instagram.com/just__a__developer/'
			},
			{
				icon: 'fa-behance',
				link: ''
			}
		]
	},

	mutations: {
		toggleEditMode(state) {
			state.editMode = !state.editMode
			console.log(state.editMode)
		}
	},

	modules: {
		Projects,
		Faqs,
		Blogs
	}
})

export default store
