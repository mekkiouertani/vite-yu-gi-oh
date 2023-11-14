<template>
    <div class="my-4">
        <select name="searchbar" id="searchbar" v-model="textSearch" @change="passData">
            <option value="">All</option>
            <option value="alien">Alien</option>
            <option value="">archetype</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
}
</script>

<style lang="scss" scoped></style>