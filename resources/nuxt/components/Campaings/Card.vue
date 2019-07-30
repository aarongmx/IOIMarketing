<template>
<div class="card">
    <div class="card-header">
        <img :src="`http://127.0.0.1:8001/images/${user.imagen}`" :alt="`Imágen del usuario ${user.nombre}`" class="rounded-circle user__picture" />
        <p class="d-inline ml-2">{{ `${user.nombre} ${user.apellido_paterno}` }}</p>
    </div>
    <img :src="campaing.image" :alt="`${campaing.title}`" class="card-img-top">
    <div class="card-body">
        <h4 class="card-title">{{ campaing.title }}</h4>
        <p class="card-text text-truncate">{{ campaing.description }}</p>
    </div>
    <div class="card-footer">
        <nuxt-link :to="`/campaings/${campaing.slug}`" class="card-link">Ver Campaña</nuxt-link>
        <nuxt-link :to="`/campaings/${campaing.slug}`" class="card-link">Editar</nuxt-link>
        <nuxt-link :to="`/campaings/${campaing.slug}`" class="card-link">Eliminar</nuxt-link>
    </div>
</div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            default: () => ({
                picture: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                name: 'Usuario'
            })
        },
        campaing: {
            type: Object,
            default: () => ({
                title: 'Mi Campaña Publicitaria',
                image: 'https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                description: 'lorem',
                slug: 'campaña'
            })
        }
    }
}
</script>


<style lang="scss">
$size: 48px;
.user__picture {
    width: $size;
    height: $size;
    object: {
        fit: cover;
        position: top;
    }
}
</style>
