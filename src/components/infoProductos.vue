<template>
  <div class="container mt-5">
      <h1 class="text-center mt-5">Información General de Productos</h1>
    <div class="accordion" id="accordionExample">
        <div class="card">
            <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Cantidad total de Inventario
                </button>
            </h2>
            </div>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
               La cantidad total de inventario disponible es: {{cantidadTotalInventario}} unidades.
            </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Cantidad de Productos:
                </button>
            </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
                La tienda cuenta con {{cantidadProductos}} de productos.
            </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" id="headingThree">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Valor total del inventario en Pesos Chilenos (CLP).
                </button>
            </h2>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
                El monto total es: ${{valorTotalInventario}} CLP.
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'infoProductos',
    computed: {
        ...mapGetters(['cantidadTotalInventario','cantidadProductos','valorTotalInventario'])
    },
}
</script>

<style>

</style>