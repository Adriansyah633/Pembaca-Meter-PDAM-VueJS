<template>
  <div class="register">
    <div class="container-sm gradient-container rounded-container">
       <NavbarCom />
      <DaftarComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarCom from '@/components/Navbar.vue'
import DaftarComponent from '@/components/daftar.vue'

export default {
  name: 'RegisterView',
  components: {
    NavbarCom,
    DaftarComponent
  }
}
</script>

<style>

</style>