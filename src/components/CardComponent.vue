<template>
    <div class="card p-2 text-white">
        <img :src="image" class="card-img-top" :alt="name">
        <div class="card-body">
            <h5 class="card-title ">{{ name }}</h5>
        </div>
        <h6 class="mx-3">{{ species }}</h6>
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
.card {
    background: linear-gradient(90deg, rgba(84, 11, 185, 1) 0%, rgba(77, 128, 189, 1) 90%);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 0%;
    }

    50% {
        background-position: 100% 100%;
    }

    100% {
        background-position: 0% 0%;
    }
}

.card-body {
    height: 75px;
}
</style>