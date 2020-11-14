<template>
  <div class="container mt-5">
    <h1 class="text-center">Productos Disponibles</h1>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3" v-for="(item,index) in enviandoDatosRyMDispo" :key="index">
        <div class="card">
          <img :src="item.image" class="card-img-top" :alt="index+1">
          <div class="card-body">
            <h5 class="card-title">{{item.name | mayuscula}}</h5>
            <p class="card-text">{{item.descripcion | capitaliza}}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Unidades: {{item.unidades}}</li>
            <li class="list-group-item">Precio: {{item.precio}}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="btn btn-primary" @click="comprandoP(item)">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'ProductoVenta',
  data() {
    return {
      comprado: false
    }
  },
  computed: {
    ...mapGetters(['enviandoDatosRyMDispo'])
/*     traerProducDisp(){
      return this.$store.getters.enviandoDatosRyMDispo;
    } */
  },
  methods: {
    comprandoP(valor){
      this.comprado = !this.comprado;
      console.log(valor);
    }
  },
  watch: {
    comprado(nuevo,viejo){
      console.log(nuevo, viejo);
    }
  },
  filters: {
    mayuscula(valor){
      return valor.toUpperCase();
    }
  }
}
</script>

<style scoped>

</style>
