import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		socials: [
			{
				icon: 'fa-github-alt',
				link: 'https://github.com/Full-Stack-Shokhboz-Abdullayev/'
			},
			{
				icon: 'fa-linkedin',
				link: 'https://www.linkedin.com/in/shokhboz-abdullayev-8545b01b9/'
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
				icon: 'fa-adobe',
				link: "",
			}
		],
		blogPosts: [
			{
				heading: 'Top 3 JavaScript Frameworks',
				tag:
					'We will talk about top 3 JavaScript client side frameworks...',
				publishedDate: '12/02/2020',
				lang: 'English'
			},
			{
				heading: 'Top 3 JavaScript Frameworks',
				tag:
					'We will talk about top 3 JavaScript client side frameworks...',
				publishedDate: '12/02/2020',
				lang: "O'zbek"
			},
			{
				heading: 'Top 3 JavaScript Frameworks',
				tag:
					'We will talk about top 3 JavaScript client side frameworks...',
				publishedDate: '12/02/2020',
				lang: 'English'
			},
			{
				heading: 'Top 3 JavaScript Frameworks',
				tag:
					'We will talk about top 3 JavaScript client side frameworks...',
				publishedDate: '12/02/2020',
				lang: 'Русский'
			},
			{
				heading: 'Top 3 JavaScript Frameworks',
				tag:
					'We will talk about top 3 JavaScript client side frameworks...',
				publishedDate: '12/02/2020',
				lang: 'English'
			},
			{
				heading: 'Top 3 JavaScript Frameworks',
				tag:
					'We will talk about top 3 JavaScript client side frameworks...',
				publishedDate: '12/02/2020',
				lang: 'Русский'
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
			return store.projects;
		},
		socials(store) {
			return store.socials;
		},
		blogPosts(store) {
			return store.blogPosts;
		}
	},
	mutations: {},
	actions: {},
	modules: {}
});
