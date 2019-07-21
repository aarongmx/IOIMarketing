<template>
<div class="container py-5">
    <div class="row">
        <div class="col-12">
            <h1>Editar Perfil</h1>
        </div>

        <div class="col-12 mt-5 mb-3">
            <div class="col-12 d-flex flex-column align-items-center justify-content-center mt-4">
                <UserPicture :user="user" size="some-huge" />
                <h2 class="h6 text-muted my-3">{{ user.email }}</h2>
            </div>
        </div>
        <div class="col-12">
            <form @submit.prevent="handleForm" method="post">
                <div class="from-group my-4">
                    <label for="name">Nombre Completo</label>
                    <input type="text" name="name" id="name" class="form-control" v-model="user.name">
                    <div class="invalid-feedback">
                        ¡Sólo se permiten letras en su nombre!
                    </div>
                </div>

                <div class="form-group my-4">
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" id="password" class="form-control" v-model="user.password">
                    <div class="invalid-feedback">
                        ¡La contraseña debe tener al menos 8 carácteres!
                    </div>
                </div>

                <div class="form-group my-4">
                    <label for="confirm-password">Confirmar contraseña</label>
                    <input type="password" name="confirm-password" id="confirm-password" class="form-control" v-model="user.confirmPassword">
                    <div class="invalid-feedback">
                        ¡La contraseña debe tener al menos 8 carácteres!
                    </div>
                </div>

                <div class="text-center my-5">
                    <button type="submit" class="btn btn-primary    rounded-pill w-75 text">Actualizar</button>
                </div>
            </form>
        </div>

    </div>
</div>
</template>

<script>
import UserPicture from '../../components/UserPicture'
export default {
    data: () => {
        return {
            user: {
                picture: `http://127.0.0.1:8001/images/janeth.jpg`,
                name: 'Janeth Ávila Pérez',
                nickname: 'janeth avila',
                email: 'janeth_avila98@gmail.com',
                password: '',
                confirmPassword: ''
            }
        }
    },
    methods: {
        handleForm() {

        }
    },
    components: {
        UserPicture
    }
}
</script>

<style>

</style>
