<template>
<fragment>
    <div class="col-12 col-md-6 col-lg-4" v-for="(campaing, index) in campaings" :key="index">
        <CampaingCard :user="user" :campaing=campaing />
    </div>
</fragment>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            default: () => ({})
        },
        campaings: {
            type: Array,
            default: () => []
        }
    },
    components: {
        CampaingCard: () => import('./Card')
    }
}
</script>
