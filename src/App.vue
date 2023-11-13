<template>
  <div class="container">
    <TitleComponent />

    <div v-for="card in store.cardList" :key="card.id">
      <CardComponent :image="card.image" :name="card.name" :species="card.species" />
    </div>

  </div>
</template>

<script>
import { store } from './data/store.js';
import axios from "axios";
import CardComponent from './components/CardComponent.vue';
import TitleComponent from './components/TitleComponent.vue';

export default {
  name: 'App',
  components: { TitleComponent, CardComponent },
  data() {
    return {
      store,

    }
  },
  methods: {
    getCard() {
      axios.get(store.apiUrl).then((card) => {
        store.cardList = card.data
        console.log(store.cardList)
      })
    }
  },
  created() {
    this.getCard();
  },
}
</script>

<style lang="scss" scoped></style>  