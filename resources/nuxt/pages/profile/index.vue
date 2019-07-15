<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-12">
                <h1>Mi Perfil</h1>
            </div>
            <div class="col-12 col-lg-8 my-4 d-flex flex-column align-items-center justify-content-around flex-lg-row justify-content-lg-start">
                <img :src="user.picture" alt="User picture" class="rounded-circle mr-lg-3" style="width: 192px; height: 192px; object-fit: cover;">
                <div class="profile__data mt-2 mt-lg-0 text-center text-lg-left">
                    <h2 class="h3">{{ user.name }}</h2>
                    <h3 class="h6">{{ user.email }}</h3>
                    <h4 class="h5">{{ user.nickname }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'page',
    data: () => {
        return {
            user: {
                picture: 'https://images.pexels.com/photos/905913/pexels-photo-905913.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                name: 'Karina Herrera García',
                nickname: 'KarinaHG',
                email: 'karinaHGarcia@gmail.com'
            }
        }
    }
}
</script>
