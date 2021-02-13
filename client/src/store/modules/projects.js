import asyncGetter from '@/assets/jsComponents/asyncGetter'
import Vue from "vue"

const state = {
    projects: [],
	featuredProjects: [],
    
}

const getters = {
    projectsLoading(state) {
        return state.projects.length === 0
    },
    
}

const mutations = {
    setFeaturedProjects(state, payload) {
        state.featuredProjects = payload
    },
    setProjects(state, payload) {
        state.projects = payload
        state.projectsLoading = false
    },
    postProject(state, payload) {
        state.projects.push(payload)
    },
    deleteProject(state, projectId) {
        const index = state.projects.findIndex(
            (project) => project._id !== projectId
        )
        Vue.delete(state.projects, index)


    },
    updateProject(state, data) {
        let index = state.projects.findIndex((project) => {
            return project._id === data._id
        })
        Vue.set(state.projects, index, data)
    }
}

const actions = {
    async setFeaturedProjects(context) {
        const featuredProjects = await asyncGetter('/projects/featured', {
            get: true
        })
        context.commit('setFeaturedProjects', featuredProjects)
    },
    async setProjects(context) {
        const projects = await asyncGetter('/projects', {
            get: true
        })
        context.commit('setProjects', projects)
    },
    async postProject(context, payload) {
        const data = await asyncGetter('/projects', {
            post: true,
            body: payload
        })
        context.commit('postProject', data)
    },
    async deleteProject(context, projectId) {
        await asyncGetter('/projects', {
            delete: true,
            id: projectId
        })
        context.commit('deleteProject', projectId)
    },
    async updateProject(context, body) {
        const data = await asyncGetter('/projects', {
            put: true,
            id: body._id,
            body
        })
        context.commit('updateProject', data)
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true,
}