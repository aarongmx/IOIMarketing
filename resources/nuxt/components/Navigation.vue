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
            <template v-if="!currentUser">
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
                <li class="nav-item">
                    <nuxt-link class="nav-link text-secondary" to="/register">Registrarse</nuxt-link>
                </li>
            </template>
            <template v-else>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/home">Inicio</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/campaings">Campañas</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/dashboard">Dashboard</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/plan">Suscripción</nuxt-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <!-- <UserPicture :user="user" size="small" :seeLink="true" /> -->
                        <p>{{userProfile}}</p>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <nuxt-link to="/profile" class="dropdown-item">Perfil</nuxt-link>
                        <nuxt-link to="/plan" class="dropdown-item">Mi plan</nuxt-link>
                        <button class="dropdown-item" @click="cerrarSesion">Cerrar Sesión</button>
                    </div>
                </li>
                <li class="nav-item">

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

import Cookie from 'js-cookie'
import jwt from 'jsonwebtoken'

export default {
    computed: {
        currentUser() {
            return {}
        }
    },
    methods: {
        cerrarSesion() {
            Cookie.remove('auth')
            this.$store.commit('SET_AUTH', null)
            this.$route.push('/login')
        }
    },
    components: {
        Brand,
        UserPicture
    }
}
</script>
