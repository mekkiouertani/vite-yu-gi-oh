<template>
  <div class="container">
    <TitleComponent />

    <SearchBar @filter-change="setParams" />
    <LoadingComponent v-show="store.cardList.length <= 0" />
    <div class="row g-4 mb-5 ">
      <div v-for="card in store.cardList" :key="card.id" class="col-12 col-md-6 col-lg-4">
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
      axios.get(store.apiUrl + store.midPoint.cardInfo, { params: this.store.endPoint }).then((card) => {
        store.cardList = card.data.data
      })
    },
    setParams(search) {
      this.store.endPoint = {
        num: 20,
        offset: 0,
        archetype: search,
        arch: ".archetype_name",
      },
        this.getCard()
    },
    getArchetype() {
      axios.get(store.apiUrl + store.midPoint.archetype).then((el) => {
        for (let i = 0; i < 20; i++) {
          store.typeList.push(el.data[i].archetype_name)
        }
      })
    },
  },
  created() {
    Promise.all([this.getCard(), this.getArchetype()]).then(function (results) {
      const acct = results[0];
      const perm = results[1];
    }).catch((error) => {
      console.log(error)
      this.store.error = error.message;
    }).finally(() => {
      store.loading = false
    })

  },
}
</script>

<style lang="scss" scoped></style>  