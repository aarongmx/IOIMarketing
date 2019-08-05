<template>
<fragment>
    <div class="row">
        <div class="col-12">
            <h1>Crear Campaña</h1>
        </div>
        <div class="col-12 col-md-4">
            <form enctype="multipart/form-data" @submit.prevent="handleForm">
                <div class="form-group">
                    <label for="title">Titulo de la campaña</label>
                    <input type="text" name="title" id="title" class="form-control" placeholder="Título de la campaña" v-model="form.titulo">
                </div>

                <div class="form-group">
                    <label for="image" class="btn btn-primary">Subir Imagen</label>
                    <input type="file" name="image" id="image" class="form-control d-none" @change="handleImage" accept="image/*">
                </div>

                <div class="form-group">
                    <label for="description">Descripción de la campaña</label>
                    <textarea name="description" id="description" cols="30" rows="10" class="form-control" v-model="form.descripcion"></textarea>
                </div>

                <div class="custom-control custom-checkbox mb-3">
                    <input type="checkbox" class="custom-control-input" id="analytics" v-model="analytics">
                    <label class="custom-control-label" for="analytics">Agregar código de google analytics</label>
                </div>

                <div class="form-group" v-if="analytics">
                    <label for="code">Tracking Code Google</label>
                    <input type="text" name="code" id="code" class="form-control" placeholder="Tracking Code" v-model="form.code">
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary mr-3">Subir Campaña</button>
                </div>
            </form>
        </div>
        <div class="col-12 col-md-8" v-if="this.form.imagen">
            <img :src="this.form.imagen" alt="Imagén de la Campaña" class="img-fluid">
        </div>
    </div>
</fragment>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data: () => {
        return {
            form: {
                titulo: '',
                descripcion: '',
                imagen: '',
                code: ''
            },
            analytics: false
        }
    },
    computed: {
        ...mapGetters({
            auth: 'auth/getAuth'
        })
    },
    methods: {
        handleForm() {
            $nuxt.$store.dispatch('campaings/addCampaing', this.auth, this.form)
        },
        handleImage(e) {
            let input = e.target
            if (input.files && input.files[0]) {
                let reader = new FileReader()
                reader.onload = ev => {
                    this.form.imagen = ev.target.result
                }
                reader.readAsDataURL(input.files[0])
            }
        }
    }
}
</script>
