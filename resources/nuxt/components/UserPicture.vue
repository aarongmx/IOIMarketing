<template>
<fragment>
    <Picture :image="user.imagen" :name="user.name" :size="size" />
    <span class="ml-2" v-if="seeLink">{{ user.nombre }} {{ user.apellido_paterno }} </span>
</fragment>
</template>

<script>
import Picture from './Picture'
export default {
    props: {
        size: String,
        user: Object,
        seeLink: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Picture
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
