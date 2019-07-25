<template>
<fragment>
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/hkvayIX9FTI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row hero">
        <div class="col-12 d-flex flex-column align-items-center justify-content-center">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <img src="@/assets/img/logo_ioi.svg" class="hero__logo" />
                <h1 class="text-center hero__title">
                    <Brand />
                </h1>
            </div>
            <h2 class="text-center hero__subtitle">Ayudando a emprendedores a crecer todos los días</h2>
            <button class="btn btn-primary rounded-pill mt-4 d-flex align-items-center" data-toggle="modal" data-target="#exampleModalLong">
                <i class="fas fa-play mr-2"></i>
                Ver Video
            </button>
        </div>
    </div>

    <div class="row my-5" id="quienes-somos-section">
        <div class="col-11 col-md-10 col-lg-8 p-3 p-lg-5 bg-primary quienes">
            <h2 class="text-white">¿Quiénes Somos?</h2>
            <p class="text-white">Somos una agencia de Marketing comprometida con sus clientes que busca crear sinergia con ellos y ayudarlos a crecer lo más posible.</p>
            <p class="text-white">Nuestro nombre viene las siglas en inglés que quiere decir Inside of Ideas. Lo anterior porque la agencia busca penetrar lo más posible en la consciencia de las personas para entender de manera profunda sus sentimientos y actividades.</p>
            <nuxt-link to="/quienes-somos" class="btn border border-light text-white">Saber más</nuxt-link>
        </div>
    </div>

    <div class="row py-4 mx-lg-5" id="servicios-section">
        <div class="col-12">
            <h2>Servicios</h2>
        </div>
        <div class="col-12 col-md-6 col-lg-4 my-2" v-for="(servicio, index) in servicios" :key="index">
            <div class="card card--prices">
                <div class="card-body text-center">
                    <h3 class="card-title">{{ servicio.nombre }}</h3>
                    <h4 class="price">
                        ${{ servicio.costo }}
                        <span class="price__currency">mxn</span>
                    </h4>

                    <ul class="text-left">
                        <li v-for="(item, index) in servicio.caracteristicas" :key="index">
                            <p>{{ item }}</p>
                        </li>
                    </ul>
                    <nuxt-link :to="`/services/${servicio.slug}`" class="btn rounded-pill btn-secondary">Detalles</nuxt-link>
                </div>
            </div>
        </div>
    </div>

    <div class="row py-4 px-lg-5 faq" id="preguntas-frecuentes-section">
        <div class="col-12">
            <h2>Preguntas Frecuentes</h2>
        </div>
        <div class="col-12 col-md-6 my-2" v-for="(pregunta, index) in preguntas" :key="index">
            <div class="card">
                <div class="card-body">
                    <p class="card-title">{{ pregunta }}</p>
                    <nuxt-link to="/" class="card-link">Saber más</nuxt-link>
                </div>
            </div>
        </div>
    </div>

    <div class="row py-5 px-lg-5 d-flex align-items-center justify-content-center" id="contacto-section">
        <div class="col-12 col-md-8 col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title text-center">Contacto</h2>
                    <form @submit.prevent="handleForm">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="nombre">Nombre Completo</label>
                                    <input type="text" class="form-control" v-model="contacto.nombre" required />
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="correo">Correo</label>
                                    <input type="email" name="correo" class="form-control" v-model="contacto.correo" required />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="empresa">Empresa</label>
                                    <input type="text" name="empresa" class="form-control" v-model="contacto.empresa" required />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="mensaje">Mensaje</label>
                                    <textarea name="mensaje" id="mensaje" cols="30" rows="6" class="form-control" v-model="contacto.mensaje" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col text-center">
                                <button type="submit" class="btn btn-primary rounded-pill">Enviar Mensaje</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</fragment>
</template>

<script>
import {
    url_api
} from '../utils/config'
import formatServices from '../utils/format'
import Brand from '../components/Brand'
import Servicios from '../sections/servicios'

export default {
    layout: 'guest',
    data: () => {
        return {
            preguntas: [
                "¿Cuál es el número de campañas permitidas?",
                "¿Cuántos perfiles puedo crear?",
                "¿Cuántos videos se pueden subir?",
                "¿Puedo actualizar mi plan?",
                "¿Es posible actualizar mis campañas actuales?"
            ],
            contacto: {
                nombre: '',
                correo: '',
                empresa: '',
                mensaje: ''
            },

        };
    },
    components: {
        Brand,
        Servicios
    },
    methods: {
        handleForm() {
            console.log(this.contacto)
        },
    },
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
            const res = await $nuxt.$axios(`${url_api}/planes`)
            const servicios = res.data
            return {
                servicios
            }
        } catch (error) {
            console.log(error)
            return {
                error
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.quienes {
    border-radius: 0 0.8em 0.8em 0;
}

.card--prices {
    min-height: 420px;
}

.price {
    font-size: 2em;

    &__currency {
        font-size: 1em;
    }
}
</style>
