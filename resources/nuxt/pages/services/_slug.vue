<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-lg-7 p-0">
            <img :src="url_images + '/' + servicio.imagen" class="img-fluid">
        </div>
        <div class="col-12 col-lg-5 py-4 px-3">
            <h1>{{ servicio.nombre }}</h1>
            <p class="mt-4"><b>Descripción</b></p>
            <p>{{ servicio.descripcion }}</p>
            <p class="mt-4"><b>Caracteristicas</b></p>
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
import {
    url_api,
    url_images
} from '../../utils/config'
export default {
    layout: 'guest',
    async asyncData({
        isDev,
        route,
        store,
        env,
        params,
        query,
        req,
        res,
        redirect,
        error
    }) {
        try {
            const response = await $nuxt.$axios.get(`${url_api}/planes/${params.slug}`)
            const servicio = response.data
            return {
                servicio
            }
        } catch (error) {
            console.error(error)
            return {
                error
            }
        }
    },
    data: () => {
        return {
            url_images
        }
    }
}
</script>
