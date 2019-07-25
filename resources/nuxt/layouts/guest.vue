<template>
    <div>
        <Navigation/>
        <div class="container-fluid py-5 min-vh-100">
            <nuxt/>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
export default {
    components: {
        Navigation,
        Footer
    }
}
</script>

<style>

</style>
