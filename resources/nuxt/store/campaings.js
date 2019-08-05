import header from '../utils/header'
export const state = () => ({
    campaings: [
        // {
        //     id: 1,
        //     image:
        //         "https://sneakerbardetroit.com/wp-content/uploads/2019/06/adidas-Spezial-Spring-Summer-2019-Collection-Release-Date-01.jpg",
        //     title: "Adidas Summer 2019",
        //     description:
        //         "Adidas Summer 2019 Breda, the best place to make big changes",
        //     slug: "adidas-summer-2019"
        // },
        // {
        //     id: 2,
        //     image:
        //         "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-storefront-v5/default/dw83dffa54/Lookbooks/Sport/LACOSTE-lookbook-999-1360-7.jpg",
        //     title: "Lacoste Summer 2019",
        //     description:
        //         "Lecoste Summer 2019 Breda, the best place to make big changes",
        //     slug: "lacoste-summer-2019"
        // },
        // {
        //     id: 3,
        //     image:
        //         "https://images.solecollector.com/complex/images/c_crop,h_2771,w_4927,x_436,y_360/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/ar6qdurcfnubagccojms/diamond-supply-co-puma-spring-summer-2019-collection",
        //     title: "Puma Summer 2019",
        //     description:
        //         "Puma Summer 2019 Breda, the best place to make big changes",
        //     slug: "puma-summer-2019"
        // }
    ]
});

export const mutations = {
    ADD_CAMPAING: (state, campaing) => {
        state.campaings.push(campaing)
    },
    DELETE_CAMPAING: (state, campaing) => {
        state.campaings.splice(list.indexOf(campaing), 1)
    },
    ALL_CAMPAINGS: (state, campaings) => {
        state.campaings = campaings
    }
};

export const getters = {
    getCampaings: state => {
        return state.campaings
    }
};

export const actions = {
    async allCampaings({ commit }, token) {
        const campaings = await $nuxt.$axios.get(`${process.env.baseUrl}/campaings`, {}, {
            header: header(token)
        })
        commit('ALL_CAMPAINGS', campaings)
    },
    async addCampaing({ commit }, token, campaing) {
        const fetch = await $nuxt.$axios.post(`${process.env.baseUrl}/campaings`, campaing,
            {
                useCredentails: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )

        console.log(fetch);
        commit('ADD_CAMPAING', campaing)
    }
};
