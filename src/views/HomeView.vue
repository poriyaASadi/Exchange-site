<template>
  <div class="bg-slate-100">
<HeaderComponent></HeaderComponent>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
export default {
  name: 'HomeView',
  components: {
    HeaderComponent
  }
}
</script>

      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/login">login</router-link> -->