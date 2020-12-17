import Vue from 'vue';
import VueRouter from 'vue-router';




import About from  "../views/About.vue"
import Projects from  "../views/Projects.vue"
import ServicesPrices from  "../views/ServicesPrices.vue"
import Resume from  "../views/Resume.vue"
import Blog from  "../views/Blog.vue"
import Contact from  "../views/Contact.vue"


// const About = () =>  import("../views/About.vue");
// const Projects = () =>  import("../views/Projects.vue");
// const ServicesPrices = () =>  import("../views/ServicesPrices.vue");
// const Resume = () =>  import("../views/Resume.vue");
// const Blog = () =>  import("../views/Blog.vue");
// const Contact = () =>  import("../views/Contact.vue");

import NProgress from "nprogress"


Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "about",
		component: About,
	},
	{
		path: "/projects",
		name: "projects",
		component: Projects,
	},
	{
		path: "/services-pricing",
		name: "servicesPricing",
		component: ServicesPrices,
  },
	{
		path: "/resume",
		name: "resume",
		component: Resume,
  },
	{
		path: "/blog",
		name: "blog",
		component: Blog,
  },
	{
		path: "/contact",
		name: "contact",
		component: Contact,
  },
  
  {path: "*", redirect: '/'},
];


const router = new VueRouter({
	routes,
	mode: "history",
	scrollBehavior() {
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual';
		}	  
	},
});

router.beforeEach((to, from, next) => {
	NProgress.start()
	NProgress.set(0.1)
	next()
})

router.afterEach(() => {
	// setTimeout(() => NProgress.done(), 100)
	NProgress.done()
  })
export default router;
