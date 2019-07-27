<template>
<div class="container">
    <div class="row py-5">
        <div class="col-12 col-lg-10 offset-lg-1">
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-7 image"></div>
                    <div class="col-md-5">
                        <div class="card-body py-5">
                            <h1 class="card-title text-center h2">Iniciar Sesión</h1>
                            <div class="text-center mt-4">
                                <a :href="`/${social.link}`" class="h4 text-black-50" v-for="(social, index) in socialLinks" :key="index">
                                    <i :class="`fab fa-${social.icon} mx-3`"></i>
                                </a>
                            </div>
                            <div class="text-center py-2 mb-3">
                                <p>O inicia sesión con tu correo eléctronico</p>
                            </div>
                            <form method="post" @submit.prevent="handleForm">
                                <div class="form-group">
                                    <label for>Correo</label>
                                    <input type="text" class="form-control rounded-pill px-3" id="inlineFormInputGroup" placeholder="Correo" v-model="login.correo" />
                                </div>
                                <div class="form-group">
                                    <label for>Contraseña</label>
                                    <input type="password" name id class="form-control rounded-pill px-3" placeholder="Contraseña" v-model="login.password" />
                                </div>
                                <div class="form-group">
                                    <nuxt-link to="forgot-password">¿Ólvido su contraseña?</nuxt-link>
                                </div>
                                <div class="form-group text-center">
                                    <button type="submit" class="btn btn-primary rounded-pill">Iniciar Sesión</button>
                                </div>
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
import {
    url_api
} from '../utils/config'

export default {
    // middleware: 'notAuthenticated',
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
            login: {
                correo: '',
                password: ''
            }
        };
    },
    methods: {
        handleForm() {
            const Cookie = process.client ? require('js-cookie') : undefined

            $nuxt.$axios
                .post(`${url_api}/auth/login`, {
                    'email': this.login.correo,
                    'password': this.login.password
                }, {
                    useCredentails: true,
                })
                .then(res => {
                    const auth = res.data.access_token
                    this.$store.commit('auth/SET_AUTH', auth) // mutating to store for client rendering
                    Cookie.set('auth', auth) // saving token in cookie for server rendering
                    this.$router.push('/home')
                })
                .catch(err => {
                    console.error(err)
                })
        }
    },
};
</script>

<style lang="scss" scoped>
.image {
    // background: url("https://images.pexels.com/photos/7357/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") no-repeat center / cover;
    clip-path: polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%);
}
</style>
