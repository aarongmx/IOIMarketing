<template>
    <footer class="container-fluid py-5 px-5 footer">
        <div class="row">
            <div class="col-12 col-lg-2 my-3">
                <div class="d-flex flex-column align-items-center justify-content-between flex-lg-row justify-content-lg-start">
                    <Brand logo/>
                </div>
            </div>
            <div class="col-12 col-lg-5">
                <p><b>Contacto</b></p>

                <p v-for="(item, index) in contacto" :key="index">
                    <i :class="`fas fa-${item.icon}`"></i>
                    {{ item.data }}
                </p>
            </div>
            <div class="col-12 text-center">
                <p><small>Todos los derechos reservados &copy; <Brand/> {{ year }}</small></p>
            </div>
        </div>
    </footer>
</template>

<script>
import Brand from '../components/Brand'
export default {
    data: () => {
        return {
            contacto: [
                {
                    icon: 'map-marker-alt',
                    data: 'Calle Etla 6, Hipódromo, Ciudad de México C.P 06100, CDMX'
                },
                {
                    icon: 'envelope',
                    data: 'administracion@ioi.mx'
                },
                {
                    icon: 'phone-alt',
                    data: '+52 55 7809 1098'
                }
            ]

        }
    },
    components: {
        Brand
    },
    computed: {
        year: () => new Date().getFullYear()
    }
}
</script>
