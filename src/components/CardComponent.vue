<template>
    <img :src="image" :alt="image">
    <h5>{{ name }}</h5>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        image: String,
        name: String,
        species: String,
    }
}
</script>

<style lang="scss" scoped></style>