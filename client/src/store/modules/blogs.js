import asyncGetter from '@/assets/jsComponents/asyncGetter'
import Vue from 'vue'

const state = {
	blogPosts: [],
	latestBlogs: [],
	blogsLoading: false
}

const mutations = {
	setBlogs(state, payload) {
		state.blogPosts = payload
	},
	setLatestBlogs(state, payload) {
		state.latestBlogs = payload
	},
	updateBlog(state, data) {
		let index = state.blogPosts.findIndex((blog) => {
			return blog._id === data._id
		})
		Vue.set(state.blogPosts, index, data)
	},
	deleteBlog(state, BlogId) {
		let index = state.blogPosts.findIndex((Blog) => {
			return Blog._id === BlogId
		})
		Vue.delete(state.blogPosts, index)
	}
}

const actions = {
	async setBlogs(context) {
		const blogs = await asyncGetter('/blogs', {
			get: true
		})
		context.commit('setBlogs', blogs)
	},
	async setLatestBlogs(context) {
		const blogs = await asyncGetter('/blogs/latest', {
			get: true
		})
		context.commit('setLatestBlogs', blogs)
	},
	async postBlog(context, payload) {
		const blogs = await asyncGetter('/blogs', {
			post: true,
			body: {
				...payload
			}
		})

		context.commit('setLatestBlogs', blogs)
	},
	async updateBlog(context, payload) {
		const blog = await asyncGetter('/blogs', {
			put: true,
			id: payload._id,
			body: {
				...payload
			}
		})
		context.commit('updateBlog', blog)
	},
	async deleteBlog(context, payload) {
		const blog = await asyncGetter('/blogs', {
			delete: true,
			id: payload
		})
		context.commit('deleteBlog', blog)
	}
}

export default {
	state,
	mutations,
	actions,
	namespaced: true
}
