<template>
<fragment>
    <div class="row">
        <div class="col-12">
            <h1>Mis Campañas</h1>
            <!-- <button class="btn border" @click="exit">Salir</button> -->
        </div>
        <GridCards :user="user" :campaings=campaings />
        <!-- <p>{{ user }}</p> -->
    </div>

    <nuxt-link to="/campaings/create" class="fab btn btn-primary rounded-circle fixed-bottom d-flex align-items-center justify-content-center"><i class="fas fa-plus"></i></nuxt-link>
</fragment>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    middleware: 'authenticated',
    data: () => {
        return {
            campaings: [
                {
                    id: 1,
                    image: 'https://sneakerbardetroit.com/wp-content/uploads/2019/06/adidas-Spezial-Spring-Summer-2019-Collection-Release-Date-01.jpg',
                    title: 'Adidas Summer 2019',
                    description: 'Adidas Summer 2019 Breda, the best place to make big changes',
                    slug: 'adidas-summer-2019'
                },
                {
                    id: 2,
                    image: 'https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-storefront-v5/default/dw83dffa54/Lookbooks/Sport/LACOSTE-lookbook-999-1360-7.jpg',
                    title: 'Lacoste Summer 2019',
                    description: 'Lecoste Summer 2019 Breda, the best place to make big changes',
                    slug: 'lacoste-summer-2019'
                },
                {
                    id: 3,
                    image: 'https://images.solecollector.com/complex/images/c_crop,h_2771,w_4927,x_436,y_360/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/ar6qdurcfnubagccojms/diamond-supply-co-puma-spring-summer-2019-collection',
                    title: 'Puma Summer 2019',
                    description: 'Puma Summer 2019 Breda, the best place to make big changes',
                    slug: 'puma-summer-2019'
                }
            ]
        }
    },
    computed: {
        ...mapGetters({
            user: 'auth/user'
        })
    },
    methods: {
        exit: () => {
            $nuxt.$store.commit('auth/SET_AUTH', null)
            localStorage.removeItem('jwt')
            $nuxt.$router.push('/')
        }
    },
    components: {
        GridCards: () => import('../components/Campaings/GridCards')
    }
}
</script>

<style lang="scss">
.fab {
    width: 56px;
    height: 56px;
    bottom: 8vh;
    left: 93vw;
}
</style>

