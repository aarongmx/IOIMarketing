<template>
    <ul>
        {{ servicesList }}
    </ul>
</template>

<script>
import formatServices from '../utils/format'
export default {
    props: {
        services: String
    },
    computed: {
        servicesList: () => {
            console.log($nuxt.$props)
            return this.services
        }
    }
}
</script>

<style>

</style>
