<template>
<fragment>
    <div class="row">
        <div class="col-12">
            <h1 class="h6">Bienvenid@ de nuevo, {{ `${user.nombre} ${user.apellido_paterno} ${user.apellidos_materno}` }}!</h1>
        </div>

        <div class="col-12">
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <h2>Mis</h2>
        </div>
    </div>
</fragment>
</template>

<script>
export default {
    layout: 'guest',
    middleware: 'authenticated',
    data: () => {
        return {
            user: {
                nombre: 'Janeth',
                apellido_paterno: 'Ávila',
                apellidos_materno: 'Pérez'
            }
        }
    }
}
</script>

<style>

</style>
