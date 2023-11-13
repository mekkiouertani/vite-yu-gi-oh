<template>
  <div class="container">
    <TitleComponent />
    <CardComponent />
  </div>
</template>

<script>
import axios from "axios";
import CardComponent from './components/CardComponent.vue';
import TitleComponent from './components/TitleComponent.vue';

export default {
  name: 'App',
  components: { TitleComponent, CardComponent }
}
</script>

<style lang="scss" scoped></style>  