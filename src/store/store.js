import Vue from 'vue';
import Vuex from 'vuex';
import Swal from 'sweetalert2'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    datosRyM: [
        {name: "Rick Sanchez", image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg", precio: 354000, unidades: 23, disponible: true, descripcion: 'est cumque voluptate'},
        {name: "Morty Smith", image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg", precio: 123000, unidades: 0, disponible: false, descripcion: 'eveniet est non'},
        {name: "Summer Smith", image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg", precio: 45000, unidades: 3, disponible: true, descripcion: 'expedita in a'},
        {name: "Beth Smith", image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg", precio: 90000, unidades: 0, disponible: false, descripcion: 'mollitia excepturi fugit'},
        {name: "Jerry Smith", image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg", precio: 100000, unidades: 1, disponible: true, descripcion: 'repellendus repellat totam'},
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
    },
    enviandoDatosRyMDispo(state){
      return state.datosRyM.filter(unidad => unidad.unidades > 0);
    }
  },
  mutations: {
    mutandoUnidadPositivo(state,index){
      state.datosRyM[index].unidades++;
    },
    mutandoUnidadNegativo(state,index){
      if (state.datosRyM[index].unidades > 0) {
        state.datosRyM[index].unidades--;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se puede disminuir el inventario',
          footer: 'Intenta con otro producto'
        })
      }

    },
  },
  actions: {
    aumentaProduct(context,index){
      context.commit('mutandoUnidadPositivo',index);
    },
    disminuyeProduct(context,index){
      context.commit('mutandoUnidadNegativo',index);
    }
  }
})
