const url_api = process.env.baseUrl;

export const state = () => ({
    auth: localStorage.getItem("jwt") || "",
    user: JSON.parse(localStorage.getItem("user")) || null
});

export const mutations = {
    SET_AUTH: (state, auth) => {
        state.auth = auth;
    },

    SET_USER: (state, user) => {
        state.user = user;
    },
};

export const getters = {
    getUser: state => {
        return state.user;
    },
    getAuth: state => {
        return state.auth;
    },
    getFullName: state => {
        const { nombre, apellido_paterno, apellido_materno } = state.user
        return `${nombre} ${apellido_paterno} ${apellido_materno}`
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
            // console.log(token);

            const fetch = await $nuxt.$axios.post(
                `${url_api}/auth/logout`, {},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            const message = await fetch.data.message;

            // console.log(message);

            localStorage.removeItem("user");
            localStorage.removeItem("jwt");

            commit("SET_USER", "");
            commit("SET_AUTH", "");
        } catch (error) {
            console.error(error);
        }
    },

    async updateUser({ commit }, user, token) {
        try {
            const fetch = await $nuxt.$axios.put(`${url_api}/auth/update`, { user }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const msg = await fetch.data.message
            console.log(msg);

        } catch(error) {
            console.error(error)
        }
    },
};
