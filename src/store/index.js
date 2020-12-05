import Vue from 'vue'
import Vuex from 'vuex'
// import todo from "../assets/todo.png"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		blogPosts: [
			{
				heading: 'Top 3 JavaScript Frameworks',
				tag:
					'We will talk about top 3 JavaScript client side frameworks...',
				publishedDate: '12 Nov 2020'
			},
			{
				heading: 'Top 3 JavaScript Frameworks',
				tag:
					'We will talk about top 3 JavaScript client side frameworks...',
				publishedDate: '12 Nov 2020'
			},
			{
				heading: 'Top 3 JavaScript Frameworks',
				tag:
					'We will talk about top 3 JavaScript client side frameworks...',
				publishedDate: '12 Nov 2020'
			},
			{
				heading: 'Top 3 JavaScript Frameworks',
				tag:
					'We will talk about top 3 JavaScript client side frameworks...',
				publishedDate: '12 Nov 2020'
			},
			{
				heading: 'Top 3 JavaScript Frameworks',
				tag:
					'We will talk about top 3 JavaScript client side frameworks...',
				publishedDate: '12 Nov 2020'
			},
			{
				heading: 'Top 3 JavaScript Frameworks',
				tag:
					'We will talk about top 3 JavaScript client side frameworks...',
				publishedDate: '12 Nov 2020'
			}
		],
		projects: [
			{
				heading: 'To Do1',
				description: 'Simple To Do App using React and Django.',
				link: '',
				client: 'self',
				type: ['web-apps', 'frontend']
				// published:
			},
			{
				heading: 'To Do2',
				description: 'Simple To Do App using React and Django.',
				link: '',
				client: 'self',
				type: ['mobile-apps', 'backend']
			},
			{
				heading: 'To Do3',
				description: 'Simple To Do App using React and Django.',
				link: '',
				client: 'self',
				type: ['web-apps', 'frontend']
				// published:
			},
			{
				heading: 'To Do4',
				description: 'Simple To Do App using React and Django.',
				link: '',
				client: 'self',
				type: ['mobile-apps', 'backend']
			},
			{
				heading: 'To Do5',
				description: 'Simple To Do App using React and Django.',
				link: '',
				client: 'self',
				type: ['web-apps', 'frontend']
				// published:
			},
			{
				heading: 'To Do6',
				description: 'Simple To Do App using React and Django.',
				link: '',
				client: 'self',
				type: ['web-apps', 'backend']
			}
		]
	},
	getters: {
		projects(store) {
			return store.projects
		},
		blogPosts(store) {
			return store.blogPosts
		},
	},
	mutations: {},
	actions: {},
	modules: {}
})
