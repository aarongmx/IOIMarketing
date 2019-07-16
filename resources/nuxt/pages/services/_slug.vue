<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-lg-7 p-0">
            <img src="https://images.pexels.com/photos/583846/pexels-photo-583846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" width="100%">
        </div>
        <div class="col-12 col-lg-5 py-4 px-3">
            <h1>{{ servicio.nombre }}</h1>
            <p>{{ servicio.descripcion }}</p>
            <p class="mt-4"><b>Beneficios</b></p>
            <ul>
                <li v-for="(caracteristica, index) in servicio.caracteristicas" :key="index">{{caracteristica}}</li>
            </ul>

            <p class="mt-4"><b>Costo</b></p>
            <h2>${{ servicio.costo }} mxn</h2>

            <button class="btn btn-primary rounded-pill my-3"><i class="fas fa-shopping-bag"></i> Comprar</button>
        </div>
    </div>
</div>
</template>

<script>
import url from '../../utils/config'
import formatServices from '../../utils/format'
export default {
    layout: 'page',
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        try {
            const response = await $nuxt.$axios.get(`${url}/planes/${params.slug}`)
            const servicio = response.data
            servicio.caracteristicas = formatServices(servicio.caracteristicas)
            return {servicio}
        } catch (error) {
            console.error(error)
            return {error}
        }
    },
}
</script>
