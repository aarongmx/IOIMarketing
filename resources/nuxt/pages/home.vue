<template>
<fragment>
    <div class="row">
        <div class="col-12">
            <h1>Mis Campañas</h1>
        </div>
        <GridCards :user="user" :campaings=campaings />
    </div>

    <nuxt-link to="/campaings/create" class="fab btn btn-primary rounded-circle fixed-bottom d-flex align-items-center justify-content-center"><i class="fas fa-plus"></i></nuxt-link>
</fragment>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    middleware: 'authenticated',
    computed: {
        ...mapGetters({
            user: 'auth/getUser',
            campaings: 'campaings/getCampaings'
        })
    },
    methods: {
        exit: () => {
            // $nuxt.$store.commit('auth/SET_AUTH', null)
            // localStorage.removeItem('jwt')
            // $nuxt.$router.push('/')
        }
    },
    components: {
        GridCards: () => import('../components/Campaings/GridCards')
    },
    mounted() {
        console.log(this.campaings);

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

