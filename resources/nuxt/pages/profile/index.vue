<template>
<div class="container py-5">
    <div class="row">
        <div class="col-12">
            <h1>Mi Perfil</h1>
        </div>
        <div class="col-12 col-lg-8 my-4 d-flex flex-column align-items-center justify-content-around flex-lg-row justify-content-lg-start">
            <UserPicture :user=user size="some-huge" />
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
import {
    url_images
} from '../../utils/config'
import UserPicture from '../../components/UserPicture'
export default {
    data: () => {
        return {
            user: {
                picture: `${url_images}/janeth.jpg`,
                name: 'Janeth Ávila Pérez',
                nickname: 'janeth avila',
                email: 'janeth_avila98@gmail.com'
            }
        }
    },
    components: {
        UserPicture
    }
}
</script>
