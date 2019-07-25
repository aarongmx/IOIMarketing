<template>
    <div class="row">
        <div class="col-12">
            <h1>Mis Campañas</h1>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
                <img src="https://images.unsplash.com/flagged/photo-1563536310477-c7b4e3a800c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title h5">Campaña 1</h2>
                    <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia obcaecati animi eveniet rem laudantium suscipit, laboriosam maiores illum voluptatem alias omnis quam optio doloribus error reiciendis vitae magni, beatae incidunt.</p>
                    <nuxt-link to="/vexa-sas">Ver Campaña</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'guest',
    middleware: 'authenticated',
}
</script>

<style>

</style>
