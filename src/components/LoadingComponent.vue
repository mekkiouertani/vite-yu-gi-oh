<template>
    <div>
        <i class="fa-solid fa-spinner fa-spin"></i>
        <div class="fs-5">LOADING</div>
    </div>
</template>

<script>
export default {
    name: 'LoadingComponent'
}
</script>

<style lang="scss" scoped>
div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3000;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30vw;
}
</style>