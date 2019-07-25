<template>
<div class="row">
    <div class="col-12">
        <h1>Mi Perfil</h1>
    </div>
    <div class="col-12 col-lg-8 my-4 d-flex flex-column align-items-center justify-content-around flex-lg-row justify-content-lg-start">
        <UserPicture :user="{name: user.nombre, picture: user.imagen}" size="some-huge" />
        <div class="profile__data mt-3 mt-lg-0 ml-lg-3 text-center text-lg-left">
            <h2 class="h3">{{ `${user.nombre} ${user.apellido_paterno} ${user.apellidos_materno}` }}</h2>
            <h3 class="h6">{{ user.email }}</h3>
            <nuxt-link to="/profile/edit">Editar Perfil</nuxt-link>
        </div>
    </div>
</div>
</template>

<script>
import {
    url_images,
    url_api
} from "../../utils/config";
import UserPicture from "../../components/UserPicture";

import Cookie from "js-cookie";

export default {
    layout: "guest",
    middleware: "authenticated",
    data: () => {
        return {
            user: {}
        }
    },
    components: {
        UserPicture
    },
    methods: {
        logout() {
            console.log("Bye");
        }
    },
    async created() {
        const auth = Cookie.getJSON("auth");
        const jwtToken = auth.accessToken

        $nuxt.$axios
            .get(`${url_api}/auth/me`, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                    useCredentails: true
                }
            })
            .then(res => {
                this.user = res.data
            })
            .catch(err => {
                console.log(err);
            });
    },
};
</script>
