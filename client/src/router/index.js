import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import NProgress from 'nprogress'
import store from '@/store/index'
// import About from '@/views/About.vue'
// import Projects from '@/views/Projects.vue'
// import ServicesPrices from '@/views/ServicesPrices.vue'
// import Resume from '@/views/Resume.vue'
// import Blogs from '@/views/Blogs/index.vue'
// import Blog from '@/views/Blogs/Blog.vue'
// import AddBlog from '@/views/Blogs/AddBlog.vue'
// import Contact from '@/views/Contact.vue'

const About = () => import('@/views/About.vue')
const Projects = () => import('@/views/Projects.vue')
const ServicesPrices = () => import('@/views/ServicesPrices.vue')
const Resume = () => import('@/views/Resume.vue')
const Blogs = () => import('@/views/Blogs/index.vue')
const Contact = () => import('@/views/Contact.vue')
const Blog = () => import('@/views/Blogs/Blog.vue')
const AddBlog = () => import('@/views/Blogs/AddBlog.vue')

Vue.use(VueRouter)
Vue.use(Meta, {
	keyName: 'head'
})

const routes = [
	{
		path: '/',
		name: 'about',
		component: About
	},
	{
		path: '/projects',
		name: 'projects',
		component: Projects
	},
	{
		path: '/services-pricing',
		name: 'servicesPricing',
		component: ServicesPrices
	},
	{
		path: '/resume',
		name: 'resume',
		component: Resume
	},
	{
		path: '/blog',
		name: 'blog',
		component: Blogs
	},
	{
		path: '/blog/add',
		name: 'add-blog',
		component: AddBlog
	},

	{
		path: '/blog/:slug',
		name: 'particular-blog',
		component: Blog
	},
	{
		path: '/contact',
		name: 'contact',
		component: Contact
	},

	{ path: '*', redirect: '/' }
]

const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior(to, from) {
		store.state.prevRoute = from
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual'
		}
	}
})

router.beforeEach(async (to, from, next) => {
	NProgress.start()
	NProgress.set(0.1)
	next()
})

router.afterEach(() => {
	// setTimeout(() => NProgress.done(), 100)
	NProgress.done()
})
export default router
