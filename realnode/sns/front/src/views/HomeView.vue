<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <LayOutVue/>
  </div>
</template>

<script>
// @ is an alias to /src
import LayOutVue from '../views/LayOutView.vue'

export default {
  name: 'HomeView',
  components: {
    LayOutVue
  }
}
</script>
