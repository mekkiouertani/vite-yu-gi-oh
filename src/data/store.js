import { reactive } from "vue";

export const store = reactive({
  cardList: [],
  typeList: [],
  apiUrl: "https://db.ygoprodeck.com/api/v7/",
  midPoint: {
    cardInfo: "cardinfo.php",
    archetype: "archetypes.php",
  },
  endPoint: {
    num: "?num=20&offset=0/",
  },
});
