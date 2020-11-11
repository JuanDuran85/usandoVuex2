<template>
  <div class="container">
    <h1 class="text-center mt-4">Productos de la tienda</h1>
    <table class="table table-hover mt-5">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Precio</th>
          <th>Unidades</th>
          <th>Descripcion</th>
          <th>Disponible</th>
          <th>Aumentar</th>
          <th>Disminuir</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in infoProductos" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td><img :src="item.image" :alt="index+1"></td>
          <td>{{item.precio}}</td>
          <td>{{item.unidades}}</td>
          <td>{{item.descripcion}}</td>
          <td :class="{noDisponible: !item.disponible}">{{item.disponible ? 'Se encuentra Disponible' : 'No esta Disponible'}}</td>
          <td><button class="btn btn-success" @click="aumenta(index)">Aumentar</button></td>
          <td><button class="btn btn-danger" @click="disminuye(index)">Dismuniur</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Productos',
  computed: {
    infoProductos(){
      return this.$store.getters.enviandoDatosRyM;
    }
  },
  methods: {
    aumenta(index){
      this.$store.dispatch('aumentaProduct',index);
    },
    disminuye(index){
      this.$store.dispatch('disminuyeProduct',index);
    }
  },
}
</script>

<style scoped>
  img {
    width: 100px;
    height: 100px;
  }
  .noDisponible {
    background-color:rgba(141, 97, 97,0.5);
  }
  th,tr,td {
    vertical-align: middle;
  }
</style>
