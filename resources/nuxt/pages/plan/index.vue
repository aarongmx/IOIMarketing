<template>
<div class="row">
    <div class="col-12">
        <h1 class="mb-3">Tu Suscripción Actual</h1>
        <p class="my-1">Plan: <b>Básico</b></p>
        <p class="my-1">Inicio: <b>22-Julio-2019</b></p>
        <p class="my-1">Finaliza: <b>22-Agosto-2019</b></p>
        <p class="my-1">Costo renovación: <b>$100 MXN</b></p>
    </div>
    <div class="col-12 mt-5">
        <h2>Historial de Pagos</h2>
    </div>

    <div class="col-12">
        <button class="btn border border-primary mr-3">Upgrade</button>
        <button class="btn btn-primary mr-3">Renovar Suscripción</button>
        <button class="btn border">Cancelar Suscripción</button>
    </div>
</div>
</template>

<script>
export default {
    // layout: 'guest'
    middleware: 'authenticated'
}
</script>

<style>

</style>
