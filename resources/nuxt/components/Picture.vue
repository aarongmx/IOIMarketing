<template>
<img :src="fullPath ? `${urlImages}/${image}` : `${image}`" :alt="`Fotografía de ${name}`" :class="`rounded-circle picture picture--${size}`">
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: 'small'
        },
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            default: 'usuario'
        },
        fullPath: {
            type: Boolean,
            default: true
        },
    },
    data: () => {
        return {
            urlImages: process.env.imgUrl
        }
    }
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
