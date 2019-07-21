<template>
<div class="container">
    <div class="row py-5">
        <div class="col-12 col-lg-10 offset-lg-1">
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-7 image"></div>
                    <div class="col-md-5">
                        <div class="card-body py-5">
                            <h1 class="card-title text-center h2">Registrarse</h1>
                            <div class="text-center mt-4">
                                <a :href="`/${social.link}`" class="h4 text-black-50" v-for="(social, index) in socialLinks" :key="index">
                                    <i :class="`fab fa-${social.icon} mx-3`"></i>
                                </a>
                            </div>
                            <div class="text-center py-2 mb-3">
                                <p>O registrate con tu correo eléctronico</p>
                            </div>
                            <form method="post" @submit.prevent="handleForm">
                                <div class="form-group">
                                    <label for>Usuario</label>
                                    <input type="text" class="form-control rounded-pill px-3" id="inlineFormInputGroup" placeholder="Usuario" v-model="register.usuario" />
                                </div>
                                <div class="form-group">
                                    <label for>Correo</label>
                                    <input type="text" class="form-control rounded-pill px-3" id="inlineFormInputGroup" placeholder="Correo" v-model="register.correo" />
                                </div>
                                <div class="form-group">
                                    <label for>Contraseña</label>
                                    <input type="password" name id class="form-control rounded-pill px-3" placeholder="Contraseña" v-model="register.password" />
                                </div>
                                <div class="form-group">
                                    <label for>Contraseña</label>
                                    <input type="password" name id class="form-control rounded-pill px-3" placeholder="Confirmar contraseña" v-model="register.confirmacionPassword" />
                                </div>
                                <button type="submit" class="btn btn-primary rounded-pill">Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: () => {
        return {
            socialLinks: [{
                    link: "#",
                    icon: "facebook"
                },
                {
                    link: "#",
                    icon: "google-plus-g"
                },
                {
                    link: "#",
                    icon: "mailchimp"
                }
            ],
            register: {
                usuario: '',
                correo: '',
                password: '',
                confirmacionPassword: ''
            }
        };
    },
    methods: {
        handleForm() {
            console.log(this.register.correo)
            console.log(this.register.password)
        }
    },
}
</script>

<style>

</style>
