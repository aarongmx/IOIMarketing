<template>
<div class="row">
    <div class="col-12 col-lg-7 p-0" :style="{background: `url(${url_images}/${servicio.imagen}) no-repeat center / cover`}">
    </div>
    <div class="col-12 col-lg-5 py-4 px-3">
        <h1>{{ servicio.nombre }}</h1>
        <p class="mt-4"><b>Descripción</b></p>
        <p>{{ servicio.descripcion }}</p>
        <p class="mt-4"><b>Caracteristicas</b></p>
        <ul>
            <li v-for="(caracteristica, index) in servicio.caracteristicas" :key="index">{{caracteristica}}</li>
        </ul>
        <p><b>Costo</b></p>
        <h2>${{ servicio.costo }} mxn</h2>
        <div class="col-12 mt-5 text-center">
            <no-ssr>
                <PayPal :amount="`${servicio.costo}`" :client="paypal" currency="MXN" env="sandbox" :button-style="paypalStyle">
                </PayPal>
            </no-ssr>
        </div>
    </div>
</div>
</template>

<script>
import {
    url_api,
    url_images
} from '../../utils/config'
import PayPal from 'vue-paypal-checkout'
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
                servicio,
            }
        } catch (error) {
            return {
                error
            }
        }
    },
    data: () => {
        return {
            url_images,
            paypal: {
                sandbox: 'AQTrRrXVkANBpWp-O3nmL1v4v6lkiv4AYRBYZLaJGKIBCx3YCszI0zlTcv8-p9kXm5pNXZvIZeCNYn4v',
            },
            paypalStyle: {
                size: 'large',
                shape: 'pill',
                color: 'black'
            }
        }
    },
    components: {
        PayPal
    }
}
</script>
