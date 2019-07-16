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
                    <nuxt-link class="nav-link btn btn-primary rounded-pill text-white mr-2" to="/login">Iniciar Sesión</nuxt-link>
                </li>
                 <li class="nav-item">
                    <nuxt-link class="nav-link btn border rounded-pill" to="/">Registrarse</nuxt-link>
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
