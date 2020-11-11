<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link :to="{name: 'Inicio'}" class="navbar-brand">RyM Tienda</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link :to="{name: 'Inicio'}" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'Buscar'}" class="nav-link">Busqueda</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'Venta'}" class="nav-link">Venta</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'Productos'}" class="nav-link">Productos</router-link>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Busqueda</button>
            </form>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>

</style>