<template>
<div class="container py-5">
    <div class="row">
        <div class="col-12">
            <h1>Editar Perfil</h1>
        </div>

        <div class="col-12 col-md-4 col-lg-3 d-flex flex-column align-items-center justify-content-center align-items-md-start justify-content-md-start mt-4">
            <!-- <UserPicture :user="user" size="some-huge" /> -->
            <Picture v-if="url" :image="url" size="some-huge" :fullPath="false" />
            <!-- <img v-if="url" :src="url" alt=""> -->
            <h2 class="h6 text-muted my-3">{{ user.email }}</h2>
            <form enctype="multipart/form-data">
                <input @change.prevent="uploadPicture" type="file" name="picture" id="picture" class="d-none">
                <label for="picture" class="d-fixed btn btn-secondary rounded-circle d-flex align-items-center justify-content-center" style="width: 46px; height: 46px;">
                    <i class="fas fa-pen"></i>
                </label>
            </form>
        </div>
        <div class="col-12 col-md-8 col-lg-4">
            <form @submit.prevent="handleForm" method="post">
                <div class="from-group my-4">
                    <label for="name">Nombre(s)</label>
                    <input type="text" name="name" id="name" class="form-control" :value="user.nombre" />
                    <div class="invalid-feedback">¡Sólo se permiten letras en su nombre!</div>
                </div>

                <div class="from-group my-4">
                    <label for="apellido-paterno">Apellido Paterno</label>
                    <input type="text" name="apellido-paterno" id="apellido-paterno" class="form-control" :value="user.apellido_paterno" />
                    <div class="invalid-feedback">¡Sólo se permiten letras en su nombre!</div>
                </div>

                <div class="from-group my-4">
                    <label for="apellido-materno">Apellido Materno</label>
                    <input type="text" name="apellido-materno" id="apellido-materno" class="form-control" v-model="user.apellido_materno" />
                    <div class="invalid-feedback">¡Sólo se permiten letras en su nombre!</div>
                </div>

                <div class="form-group my-4">
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" id="password" class="form-control" />
                    <div class="invalid-feedback">¡La contraseña debe tener al menos 8 carácteres!</div>
                </div>

                <div class="form-group my-4">
                    <label for="confirm-password">Confirmar contraseña</label>
                    <input type="password" name="confirm-password" id="confirm-password" class="form-control"  />
                    <div class="invalid-feedback">¡La contraseña debe tener al menos 8 carácteres!</div>
                </div>

                <div class="text-center my-5">
                    <button type="submit" class="btn btn-primary rounded-pill w-75 text">Actualizar</button>
                </div>
            </form>

            <!-- <p>{{ user }}</p> -->
        </div>
    </div>
</div>
</template>

<script>
import Picture from "../../components/Picture";
import { mapGetters, mapState } from "vuex";

export default {
    middleware: "authenticated",
    methods: {
        handleForm() {
            console.log(this.user);

            // $nuxt.$store.dispath('auth/updateUser', user, token);
        },
        uploadPicture(e) {
            const file = e.target.files[0]
            this.url = URL.createObjectURL(file)
        }
    },
    computed: {
        // ...mapState({
        //     user: state => state.auth.user
        // }),
        // ...mapGetters({
        //     token: "auth/getAuth",
        //     user: "auth/getUser"
        // }),
        user: {
            get() {
                return this.$store.state.auth.user
            },
            set(value) {
                this.$store.commit('', value)
            }
        }
    },
    components: {
        Picture
    },
    data: () => {
        return {
            url: null,
            form: {
                nombres: '',
                apellidoPaterno: '',
                apellidoMaterno: '',
            }
        }
    }

};
</script>

<style>
</style>
