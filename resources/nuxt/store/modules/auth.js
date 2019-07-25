
export default {
    state: {
        auth: null
    },
    getters: {},
    mutations: {
        SET_AUTH(state, auth) {
            state.auth = auth;
        }
    },
    actions: {
        nuxtServerInit({ commit }, { req }) {
            let auth = null;
            if (req.headers.cookie) {
                const parsed = cookieparser.parse(req.headers.cookie);
                try {
                    auth = JSON.parse(parsed.auth);
                } catch (err) {
                    // No valid cookie found
                }
            }
            commit("SET_AUTH", auth);
        }
    }
};
