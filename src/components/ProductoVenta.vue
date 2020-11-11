<template>
  <div class="container mt-5">
    <h1 class="text-center">Productos Disponibles</h1>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3" v-for="(item,index) in traerProducDisp" :key="index">
        <div class="card">
          <img :src="item.image" class="card-img-top" :alt="index+1">
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text">{{item.descripcion}}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Unidades: {{item.unidades}}</li>
            <li class="list-group-item">Precio: {{item.precio}}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="btn btn-primary">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductoVenta',
  computed: {
    traerProducDisp(){
      return this.$store.getters.enviandoDatosRyMDispo;
    }
  },
}
</script>

<style scoped>

</style>
