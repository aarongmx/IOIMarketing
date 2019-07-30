<template>
<fragment>
    <div class="row">
        <div class="col-12">
            <h1>Crear Campaña</h1>
        </div>
        <div class="col-12">
            <form enctype="multipart/form-data" @submit.prevent="handleForm">
                <div class="form-group">
                    <label for="">Titulo de la campaña</label>
                    <input type="text" name="" id="" class="form-control" placeholder="Título de la campaña" v-model="form.titulo">
                </div>

                <div class="form-group">
                    <label for="">Subir Imágen</label>
                    <input type="file" name="" id="" class="form-control">
                </div>

                <div class="form-group">
                    <label for="">Descripción de la campaña</label>
                    <textarea name="" id="" cols="30" rows="10" class="form-control" v-model="form.descripcion"></textarea>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary mr-3">Subir Campaña</button>
                    <button type="submit" class="btn border border-dark">Ver Campaña</button>
                </div>
            </form>
        </div>
    </div>
</fragment>
</template>

<script>
export default {
    data: () => {
        return {
            form: {
                titulo: '',
                descripcion: '',
                imagen: ''
            }
        }
    },
    methods: {
        handleForm: () => {

        }
    }
}
</script>
