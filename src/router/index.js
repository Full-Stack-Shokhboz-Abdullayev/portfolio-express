import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import ServicesPrices from "../views/ServicesPrices.vue";
import Resume from "../views/Resume.vue";
import Blog from "../views/Blog.vue";
import Contact from "../views/Contact.vue";


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

export default router;
