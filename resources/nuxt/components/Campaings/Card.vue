<template>
<div class="card">
    <div class="card-header">
        <img :src="`${imgUrl}/${user.imagen}`" :alt="`Imágen del usuario ${user.nombre}`" class="rounded-circle user__picture" />
        <p class="d-inline ml-2">{{ `${user.nombre} ${user.apellido_paterno}` }}</p>
    </div>
    <img :src="campaing.image" :alt="`${campaing.title}`" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">{{ campaing.title }}</h5>
        <p class="card-text text-truncate">{{ campaing.description }}</p>
    </div>
    <div class="card-footer">
        <nuxt-link :to="`/campaings/${campaing.slug}`" class="card-link">Ver Campaña</nuxt-link>
        <nuxt-link :to="`/campaings/${campaing.slug}`" class="card-link">Editar</nuxt-link>
        <a href="#" class="card-link" data-toggle="modal" data-target="#deleteCampaing">
            Eliminar
        </a>
    </div>

    <div class="modal fade" id="deleteCampaing" tabindex="-1" role="dialog" aria-labelledby="deleteCampaing" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="deleteCampaing">Eliminar Campaña</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>¿Realmente desea eliminar esta campaña?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary">Eliminar</button>
                </div>
            </div>
        </div>
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
    },
    data: () => {
        return {
            imgUrl: process.env.imgUrl
        }
    },
    methods: {
        deleteCampaing: () => {
            console.log("Eliminando");

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
