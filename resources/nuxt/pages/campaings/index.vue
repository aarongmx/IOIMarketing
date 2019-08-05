<template>
    <div class="row">
        <div class="col-12 mb-4">
            <h1>Mis Campañas</h1>
        </div>
        <GridCards :user="user" :campaings="campaings" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    middleware: 'authenticated',
    components: {
        GridCards: () => import('../../components/Campaings/GridCards')
    },
    computed: {
        ...mapGetters({
            campaings: 'campaings/getCampaings',
            user: 'auth/getUser',
            auth: 'auth/getAuth'
        })
    },
    mounted() {
        $nuxt.$store.dispatch('campaings/allCampaings', this.auth)
    }
}
</script>

<style>

</style>
