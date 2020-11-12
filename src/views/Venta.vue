<template>
    <main>
        <producto-venta></producto-venta>
        <info-productos></info-productos>
    </main>
</template>

<script>
import ProductoVenta from '../components/ProductoVenta.vue';
import infoProductos from '../components/infoProductos.vue';

export default {
    name: 'Venta',
    components: {
        ProductoVenta,
        infoProductos,
    }
}
</script>

<style>

</style>