const url_api = process.env.baseUrl;

export const state = () => ({
    auth: localStorage.getItem("jwt") || "",
    user: localStorage.getItem("user") || {}
});

export const mutations = {
    SET_AUTH: (state, auth) => {
        state.auth = auth;
    },

    SET_USER: (state, user) => {
        state.user = user;
    }
};

export const getters = {
    getUser: state => {
        return JSON.parse(state.user) || {};
    },
    getAuth: state => {
        return state.auth;
    }
};

export const actions = {
    async login({ commit }, { email, password }) {
        try {
            const fetch = await $nuxt.$axios.post(
                `${url_api}/auth/login`,
                { email, password },
                { useCredentails: true }
            );
            const data = await fetch.data;
            const auth = await data.access_token;
            const user = await data.user;

            localStorage.setItem("jwt", auth);
            localStorage.setItem("user", JSON.stringify(user));

            commit("SET_AUTH", auth);
            commit("SET_USER", user);
        } catch (error) {
            console.error(error);
        }
    },

    async logout({ commit }, token) {
        try {
            const fetch = await $nuxt.$axios.post(
                `${url_api}/auth/logout`,
                {},
                {
                    useCredentails: true,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            const message = await fetch.data.message;
            console.log(message);

            localStorage.removeItem("user");
            localStorage.removeItem("jwt");

            commit("SET_USER", "");
            commit("SET_AUTH", "");
        } catch (error) {
            console.error(error);
        }
    },

    async updateUser({ commit }, user) {
        try {
            const fetch = await $nuxt.$axios.post(`${url_api}/auth/update`)
            const msg = await fetch.data.message
        } catch(error) {
            console.error(error)
        }
    }
};
