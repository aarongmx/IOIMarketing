import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'

Vue.use(Vuex)

const createStore = () => {
    return new Vuex.Store({
        modules: {
            auth
        },
        state: {

        },
        mutations: {

        },
        getters: {

        },
        actions: {

        }
    })
}

export default createStore
