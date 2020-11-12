<template>
  <div class="container mt-5 text-center">
    <div class="alert alert-primary" role="alert">
      {{enviandoMsg1}}
    </div>
    <div class="alert alert-info" role="alert">
      {{enviandoMsg2}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['enviandoMsg1','enviandoMsg2'])
/*     traerMsg1(){
      return this.$store.getters.enviandoMsg1;
    },
    traerMsg2(){
      return this.$store.getters.enviandoMsg2;
    } */
  },
}
</script>
