<template>
  <div class="container">
    <TitleComponent />
    <CardComponent />
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
      cardList: [],
    }
  },
  methods: {
    getCard() {
      axios.get(store.apiUrl).then((card) => {
        this.cardList.push(card.data)
      })
    }
  },
  created() {
    this.getCard();
    console.log(this.cardList);
  },
}
</script>

<style lang="scss" scoped></style>  