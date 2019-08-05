<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Ólvido su contraseña</h1>
            </div>
            <div class="col-12">
                <form method="post" @submit.prevent="recoverPassword">
                    <div class="form-group">
                        <label for="email">Correo Electrónico</label>
                        <input type="email" name="email" id="email" class="form-control" v-model="email">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary rounded-pill">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data: () => {
        return {
            email: ''
        }
    },
    methods: {
        async recoverPassword() {
            const fetch = await $nuxt.$axios.post(`${process.env.baseUrl}/reset`, email)
            const { data, status } = await fetch
            if(status === 200) {
                this.email = ''
            }
        }
    },
}
</script>

<style>

</style>
