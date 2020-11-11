import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    datosRyM: [
        {name: "Rick Sanchez", image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg", precio: 354000, unidades: 23, disponible: true},
        {name: "Morty Smith", image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg", precio: 123000, unidades: 0, disponible: false},
        {name: "Summer Smith", image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg", precio: 45000, unidades: 3, disponible: true},
        {name: "Beth Smith", image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg", precio: 90000, unidades: 0, disponible: false},
        {name: "Jerry Smith", image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg", precio: 100000, unidades: 1, disponible: true},
    ],
    msg1: "Bienvenido a R&M Store",
    msg2: "Compra lo que quieras..."
  },
  getters: {
    enviandoMsg1(state){
      return state.msg1;
    },
    enviandoMsg2(state){
      return state.msg2;
    },
    enviandoDatosRyM(state){
      return state.datosRyM;
    }
  },
  mutations: {
  
  },
  actions: {
  
  }
})
