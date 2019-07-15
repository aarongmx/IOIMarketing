<template>
    <fragment>
        <img src="@/assets/img/logo_ioi.svg" alt="Logotipo IOI Marketing" v-if="logo" width="30" height="30" class="d-inline-block align-top mr-2">
        <span>IOI <span class="brand__bold">Marketing</span></span>
    </fragment>
</template>

<script>
export default {
    props: {
        logo: Boolean,
        logoSize: Number
    }
}
</script>


<style lang="scss" scoped>
.brand {
    &__bold {
        font: {
            family: 'Muli', sans-serif;
            weight: 700;
        }
    }
    &__logo {
        width: 48px;
    }

}
</style>
