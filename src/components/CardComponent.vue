<template>
    <div class="card">
        <img :src="image" class="card-img-top" :alt="name">
        <div class="card-body">
            <h5 class="card-title ">{{ name }}</h5>
            <h6>{{ species }}</h6>
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