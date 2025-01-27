import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: []
    },
    mutations: {
        addPost(state, post) {
            state.posts.push(post);
        }
    },
    actions: {
        addPost({ commit }, post) {
            commit('addPost', post);
        }
    },
    getters: {
        posts: state => state.posts
    }
});