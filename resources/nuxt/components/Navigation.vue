<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <nuxt-link class="navbar-brand" to="/">
        <Brand />
    </nuxt-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
            <template v-if="!user">
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/">Inicio</nuxt-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#quienes-somos-section">¿Quiénes Somos?</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#servicios-section">Servicios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#preguntas-frecuentes-section">Preguntas Frecuentes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#contacto-section">Contacto</a>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link text-primary btn border border-primary" to="/login">Iniciar Sesión</nuxt-link>
                </li>

            </template>
            <template v-else>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/home">Inicio</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/dashboard">Dashboard</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/plan">Suscripción</nuxt-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <UserPicture :user="user" seeLink />
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <nuxt-link to="/profile" class="dropdown-item">Perfil</nuxt-link>
                        <nuxt-link to="/plan" class="dropdown-item">Mi plan</nuxt-link>
                        <button class="dropdown-item" @click="cerrarSesion">Cerrar Sesión</button>
                    </div>
                </li>
            </template>
        </ul>
    </div>
</nav>
</template>

<script>
import {
    url_api
} from '../utils/config'
import Brand from '../components/Brand'
import UserPicture from './UserPicture'

import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            user: 'auth/getUser',
            token: 'auth/auth'
        })
    },
    methods: {
        cerrarSesion() {
            $nuxt.$store.dispatch('auth/logout', this.token).then(() => $nuxt.$router.push('/'))
        }
    },
    components: {
        Brand,
        UserPicture
    }
}
</script>
