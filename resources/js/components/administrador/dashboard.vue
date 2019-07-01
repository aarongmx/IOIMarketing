<template>
    <div class="container">
        <div class="row">
            <h1 class="col-12">
                dashboard
            </h1>
            <div class="col-6">
                <UsuarioPorPlan></UsuarioPorPlan>
            </div>
        </div>
    </div>
</template>
<script>
import UsuarioPorPlan from './components/usuarioxplan'
export default {
    components:{
        UsuarioPorPlan
    }
}
</script>

