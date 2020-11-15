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
    <h2>Usando Ciclo de Vida, primesas, async-await</h2>
    <div class="alert alert-info" role="alert" v-if="!mostrarInfo">
      <div class="spinner-grow text-primary text-center" role="status">
        <span class="sr-only">{{this.mensaje}}</span>
      </div>
    </div>
    <div v-else class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Dirección</th>
            <th>Email</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in dataUsuarios" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.nombre}}</td>
            <td>{{item.apellido}}</td>
            <td>{{item.direccion}}</td>
            <td>{{item.email}}</td>
            <td>{{item.nacimiento}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { format } from "date-fns";

const infoUsuario = [
  {id: 1,nombre: 'Anabelle' , apellido: 'Jones', direccion: '336 Lennie Brook', email: 'Rachelle_Volkman62@yahoo.com', nacimiento: format(new Date(1989,11,17),'dd-MM-yyyy')},
  {id: 2,nombre: 'Jarvis' , apellido: 'Funk', direccion: '59082 Fisher Overpass', email: 'Sallie.Green87@hotmail.com', nacimiento: format(new Date(1998,7,6),'dd-MM-yyyy')},
  {id: 3,nombre: 'Lillie' , apellido: 'Wisozk', direccion: '937 Olin Meadows', email: 'Maximillian.Towne@gmail.com', nacimiento: format(new Date(1970.4,12),'dd-MM-yyyy')},
  {id: 4,nombre: 'Scot' , apellido: 'Abernathy', direccion: '28680 Grimes Meadow', email: 'Maude.Steuber@gmail.com', nacimiento: format(new Date(1995,3,20),'dd-MM-yyyy')},
  {id: 5,nombre: 'Lazaro' , apellido: 'Purdy', direccion: '78255 Janet Shore', email: 'Rashad23@hotmail.com', nacimiento: format(new Date(1945,7,7),'dd-MM-yyyy')},
  {id: 6,nombre: 'Astrid' , apellido: 'Armstrong', direccion: '34130 Athena Burg', email: 'Amara.Jacobs90@yahoo.com', nacimiento: format(new Date(1981,12,5),'dd MMM, yyyy')},
];
export default {
  name: 'Home',
  data() {
    return {
      nombre: 'Pedro',
      apellido: 'Perez',
      dataUsuarios: [],
      mensaje: "",
      mostrarInfo: false,
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
    },
  },
  created(){
    this.cargarDatos();
  },
  methods: {
    async mostrarDatos(){
      return new Promise(resolve => {
        setTimeout(()=>resolve(infoUsuario),3500);
      })
    },
    async cargarDatos(){
      this.dataUsuarios = [];
      this.mensaje = "Espere un momento, buscando información";
      this.dataUsuarios = await this.mostrarDatos();
      this.mostrarInfo = true
      this.mensaje = "";
    }
  },
}
</script>
