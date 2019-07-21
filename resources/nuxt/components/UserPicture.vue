<template>
<fragment>
    <img :src="user.picture" :alt="`Fotografía de ${user.name}`" :class="`rounded-circle mr-lg-3 picture picture--${size}`">
    <fragment v-if="seeLink">
        <nuxt-link to="/profile/edit">{{ user.name }}</nuxt-link>
    </fragment>
</fragment>
</template>

<script>
export default {
    props: {
        size: String,
        user: Object,
        seeLink: false
    },
}
</script>

<style lang="scss" scoped>
$small: 32px;
$medium: 48px;
$big: 64px;
$huge: 128px;
$some-huge: 164px;

.picture {
    object-fit: cover;
    object-position: center;

    &--small {
        width: $small;
        height: $small;
    }

    &--medium {
        width: $medium;
        height: $medium;
    }

    &--big {
        width: $big;
        height: $big;
    }

    &--huge {
        width: $huge;
        height: $huge;
    }
    &--some-huge {
        width: $some-huge;
        height: $some-huge;
    }
}
</style>
