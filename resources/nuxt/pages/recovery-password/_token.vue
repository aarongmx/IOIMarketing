<template>
<div class="row">
    <div class="col-12">
        <h1>Recuperar Contraseña</h1>
    </div>
    <div class="col-12">
        <form method="post" @submit.prevent="handleForm">
            <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" name="password" id="password" class="form-control" v-model="form.password">
            </div>
            <div class="form-group">
                <label for="confirm-password">Confirmar Contraseña</label>
                <input type="password" name="confirm-password" id="confirm-password" class="form-control" v-model="form.confirmPassword">
            </div>
            <button type="submit" class="btn btn-primary btn-lg">Confirmar</button>
        </form>
    </div>
    <p>{{ errors }}</p>
</div>
</template>

<script>
export default {
    middleware: 'notAuthenticated',
    data: () => {
        return {
            form: {
                password: '',
                confirmPassword: ''
            },
            errors: ""
        }
    },
    methods: {
        async handleForm() {
            if (this.form.password !== this.form.confirmPassword) {
                this.errors = "¡Las claves no coinciden!"
            } else {
                const fetch = $nuxt.$axios.post(`${process.env.baseUrl}/recover`, {
                    token: $nuxt.$route.params.token,
                    password: this.form.password
                })
                const msg = await fetch.data
                $nuxt.$router.push({path: '/login'});
            }

        }
    },
}
</script>
