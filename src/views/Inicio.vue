<template>
  <div class="container mt-5 text-center">
    <div class="alert alert-primary" role="alert">
      {{traerMsg1}}
    </div>
    <div class="alert alert-info" role="alert">
      {{traerMsg2}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    traerMsg1(){
      return this.$store.getters.enviandoMsg1;
    },
    traerMsg2(){
      return this.$store.getters.enviandoMsg2;
    }
  },
}
</script>
