<template>
    <div class="card">
        <img :src="image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
        </div>
    </div>
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

<style lang="scss" scoped>
.card-body {
    height: 100px;
}
</style>