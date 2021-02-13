import asyncGetter from '@/assets/jsComponents/asyncGetter'
import Vue from "vue"

const state = {
    faqs: [],
}

const getters = {
    faqsLoading(state) {
        return state.faqs.length === 0
    },
}

const mutations = {
    setFaqs(state, payload) {
        state.faqs = payload
    },
    postFaq(state, payload) {
        state.faqs.push(payload)
    },
    deleteFaq(state, FaqId) {
        let index = state.faqs.findIndex((Faq) => {
            return Faq._id === FaqId
        })
        Vue.delete(state.faqs, index)
    },
    updateFaq(state, data) {
        let index = state.faqs.findIndex((Faq) => {
            return Faq._id === data._id
        })
        Vue.set(state.faqs, index, data)
    }
}

const actions = {
    async setFaqs(context) {
        const faqs = await asyncGetter('/faqs', {
            get: true
        })
        context.commit('setFaqs', faqs)
    },
    async postFaq(context, payload) {
        const data = await asyncGetter('/faqs', {
            post: true,
            body: payload
        })
        context.commit('postFaq', data)
    },
    async deleteFaq(context, FaqId) {
        await asyncGetter('/faqs', {
            delete: true,
            id: FaqId
        })
        context.commit('deleteFaq', FaqId)
    },
    async updateFaq(context, body) {
        const data = await asyncGetter('/faqs', {
            put: true,
            id: body._id,
            body
        })
        context.commit('updateFaq', data)
    }
    
}


export default {
    state, 
    getters,
    mutations,
    actions,
    namespaced: true,
}