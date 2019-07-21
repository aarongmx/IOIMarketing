<template>
    <ul>
        <!-- <li v-for="(service, index) in servicesList()" :key="index"> -->
            {{ servicesList }}
        <!-- </li> -->
    </ul>
</template>

<script>
import formatServices from '../utils/format'
export default {
    props: {
        services: String
    },
    // mounted:() => {
        // console.log(services)
    // },
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
