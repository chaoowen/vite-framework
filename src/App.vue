<template>
  <v-app>
    <v-main class="d-flex" style="position: relative;">
      <NavBar />
      <v-container class="bg-light">
        <!-- <h3 class="text-center py-6 text-primary">vuetify + vite framework</h3> -->
        <router-view />  
      </v-container>
      <Alert />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Home from '@/views/Home.vue'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import Alert from '@/components/common/Alert.vue'
export default {
  components: {
    Home,
    NavBar,
    Footer,
    Alert
  }
}
</script>

<style>
</style>
