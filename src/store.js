import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        userId: null
    },
    mutations: {
        setUserId (state, id) {
            state.userId = id;
        }
    },
    getters: {
        loggedInUser: state => {
            return state.userId;
          }
    }
})