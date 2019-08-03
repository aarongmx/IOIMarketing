<template>
<div class="row">
    <div class="col-12 col-lg-7 p-0" :style="{background: `url(${imgUrl}/${servicio.imagen}) no-repeat center / cover`}">
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
            const response = await $nuxt.$axios.get(`${process.env.baseUrl}/planes/${params.slug}`)
            const servicio = await response.data
            return {
                servicio
            }
        } catch (error) {
            return {
                error
            }
        }
    },
    data: () => {
        return {
            imgUrl: process.env.imgUrl,
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
