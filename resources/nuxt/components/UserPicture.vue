<template>
<fragment>
    <img :src="`${url_images}/${user.picture}`" :alt="`Fotografía de ${user.name}`" :class="`rounded-circle picture picture--${size}`">
    <span class="ml-2" v-if="seeLink">{{ user.name }}</span>
</fragment>
</template>

<script>
import { url_images } from '../utils/config'
export default {
    props: {
        size: String,
        user: Object,
        seeLink: false
    },
    data: () => {
        return {
            url_images
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
