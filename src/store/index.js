import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    titles:{
      "Bronn":"Ser Bronn of the Blackwater",
      "Brynden Tully":"The Blackfish",
      "Cersei":"Queen of the Seven Kingdoms",
      "The Hound":"Sandor Clegane of House Clegane",
      "Jaime Lannister":"Ser Lord Commander of the Kingsguard",
      "Littlefinger":"Lord Petyr Baelish",
      "Olenna Tyrell":"The Queen of Thorns",
      "Renly Baratheon":"King",
      "Tyrion":"Hand of the Queen",
      "Varys":"Master of Whisperers"
    },
    data:{
      "quote":"",
      "character":""
    }
  },
  getters:{
    characterTitles: state =>{
      return state.titles;
    }
  },
  mutations: {
    updateCharacter: (state,payload) =>{
      state.data.character=state.titles[payload]? state.titles[payload]: "A pawn in the game of thrones";
    }
  },
  actions: {
    updateCharacter: (context, payload) => {
      context.commit('updateCharacter', payload);
  }
  },
  modules: {}
});
