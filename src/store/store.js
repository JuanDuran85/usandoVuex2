import Vue from 'vue';
import Vuex from 'vuex';
import Swal from 'sweetalert2';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    datosRyM: [
        {name: "Rick Sanchez", image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg", precio: 50, unidades: 1, disponible: true, descripcion: 'est cumque voluptate'},
        {name: "Morty Smith", image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg", precio: 10, unidades: 1, disponible: false, descripcion: 'eveniet est non'},
        {name: "Summer Smith", image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg", precio: 45, unidades: 1, disponible: true, descripcion: 'expedita in a'},
        {name: "Beth Smith", image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg", precio: 90, unidades: 1, disponible: false, descripcion: 'mollitia excepturi fugit'},
        {name: "Jerry Smith", image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg", precio: 10, unidades: 1, disponible: true, descripcion: 'repellendus repellat totam'},
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
    },
    cantidadTotalInventario(state){
      return state.datosRyM.reduce((acumulador,valor)=>{
        return acumulador+valor.unidades;
      },0);
    },
    cantidadProductos(state){
      return state.datosRyM.length;
    },
    valorTotalInventario(state){
      return state.datosRyM.reduce((acumulador,valor)=>{
        return acumulador+(valor.precio*valor.unidades);
      },0);
    },
  },
  mutations: {
    mutandoUnidadPositivo(state,index){
      state.datosRyM[index].unidades++;
      state.datosRyM[index].disponible = true;
    },
    mutandoUnidadNegativo(state,index){
      if (state.datosRyM[index].unidades > 0) {
        state.datosRyM[index].unidades--;
      } else {
        state.datosRyM[index].disponible = false;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se puede disminuir el inventario',
          footer: 'Intenta con otro producto'
        })
      }
      
      if (state.datosRyM[index].unidades == 0) {
        state.datosRyM[index].disponible = false;
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
