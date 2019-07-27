<template>
    <div class="row">
        <div class="col-12">
            <h1>Mis Campañas</h1>
        </div>
        <GridCards :user="user" :campaings="campaings" />
    </div>
</template>

<script>
export default {
    // layout: 'guest',
    middleware: 'authenticated',
    data: () => {
        return {
            user: {
                picture: 'https://img.freepik.com/free-psd/modern-man-smiling_1194-11653.jpg?size=338&ext=jpg',
                name: 'Aarón Gómez Méndez'
            },
            campaings: [
                {
                    id: 1,
                    image: 'https://sneakerbardetroit.com/wp-content/uploads/2019/06/adidas-Spezial-Spring-Summer-2019-Collection-Release-Date-01.jpg',
                    title: 'Adidas Summer 2019',
                    description: 'Adidas Summer 2019 Breda, the best place to make big changes',
                    slug: 'adidas-summer-2019'
                }
            ]
        }
    },
    components: {
        GridCards: () => import('../../components/Campaings/GridCards')
    }
}
</script>

<style>

</style>
