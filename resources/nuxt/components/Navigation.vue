<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <nuxt-link class="navbar-brand" to="/"><Brand /></nuxt-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <nuxt-link class="nav-link" to="/">Inicio</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/quienesSomos">¿Quiénes Somos?</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/">Servicios</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/">Preguntas Frecuentes</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/">Contacto</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/login">Iniciar Sesión</nuxt-link>
                </li>
                 <li class="nav-item">
                    <nuxt-link class="nav-link btn" to="/">Registrarse</nuxt-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import Brand from '../components/Brand'
export default {
    components: {
        Brand
    }
}
</script>
