<template>
  <div class="container mt-5 text-center">
    <div class="alert alert-primary" role="alert">
      {{enviandoMsg1}}
    </div>
    <div class="alert alert-info" role="alert">
      {{enviandoMsg2}}
    </div>
    <h2 class="mt-4">Usando propiedades computadas con get y set</h2>
    <div class="alert alert-info mt-3" role="alert">
      {{nombreCompleto}}
    </div>
    <div class="form-group">
      <label for="">Modificar Nombre Completo</label>
      <input type="text" class="form-control" placeholder="Nombre y Apellido" v-model="nombreCompleto">
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Home',
  data() {
    return {
      nombre: 'Pedro',
      apellido: 'Perez'
    }
  },
  computed: {
    ...mapGetters(['enviandoMsg1','enviandoMsg2']),
    nombreCompleto: {
      get(){
        let valor = this.nombre;
        valor += this.apellido ? ` ${this.apellido}` : ''
        return valor;
      },
      set(valor){
        let nombres = valor.split(' ');
        this.nombre = nombres[0];
        this.apellido = nombres.length === 1 ? '' : nombres[nombres.length-1];
      }
    }
/*     traerMsg1(){
      return this.$store.getters.enviandoMsg1;
    },
    traerMsg2(){
      return this.$store.getters.enviandoMsg2;
    } */
  },
}
</script>
