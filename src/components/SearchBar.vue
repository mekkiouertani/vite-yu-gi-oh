<template>
    <div class="my-4">
        <select name="searchbar" id="searchbar" v-model="textSearch" @change="passData">
            <option value="">All</option>
            <option value="Alien">Alien</option>
            <option value="alligator">Alligator</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            textSearch: '',
        }
    },
    methods: {
        passData() {
            this.$emit('filterChange', this.textSearch);
        }
    },
}
</script>

<style lang="scss" scoped></style>