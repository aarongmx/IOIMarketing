<template>
    <div>
        <Navigation/>
        <div class="container min-vh-100 py-5">
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
