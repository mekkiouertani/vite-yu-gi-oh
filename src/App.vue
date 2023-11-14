<template>
  <div class="container">

    <TitleComponent />
    <SearchBar />
    <LoadingComponent v-show="store.cardList.length <= 0" />
    <div class="row g-4 mb-5 ">
      <div v-for="card in store.cardList" :key="card.id" class="col-6 col-md-4 col-lg-3">
        <CardComponent :image="card.card_images[0].image_url" :name="card.name" :species="card.race" />
      </div>
    </div>

  </div>
</template>

<script>
import { store } from './data/store.js';
import axios from "axios";
import CardComponent from './components/CardComponent.vue';
import TitleComponent from './components/TitleComponent.vue';
import LoadingComponent from './components/LoadingComponent.vue';
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'App',
  components: { TitleComponent, CardComponent, LoadingComponent, SearchBar },
  data() {
    return {
      store,

    }
  },
  methods: {
    getCard() {
      axios.get(store.apiUrl).then((card) => {
        store.cardList = card.data.data
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