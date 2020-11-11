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
          <th>Disponible</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in infoProductos" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td><img :src="item.image" :alt="index+1"></td>
          <td>{{item.precio}}</td>
          <td>{{item.unidades}}</td>
          <td :class="{noDisponible: !item.disponible}">{{item.disponible ? 'Se encuentra Disponible' : 'No esta Disponible'}}</td>
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
</style>
