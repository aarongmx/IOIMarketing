<template>
<div class="row vh-100">
    <div class="col-12">
        <h1 v-if="error.statusCode === 404">¡Página no encontrada!</h1>
        <h1 v-else>An error occurred</h1>
        <nuxt-link to="/">Home</nuxt-link>
    </div>
</div>
</template>

<script>
export default {
    props: ['error'],
}
</script>

<style lang="scss" scoped>

</style>
