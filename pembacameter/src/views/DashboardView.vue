<template>
  <div class="dashboard">
      <NavbarCom />
       <DashboardComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarCom from '@/components/Navbar.vue'
import DashboardComponent from '@/components/dashboard.vue'

export default {
  name: 'DashboardView',
  components: {
    NavbarCom,
    DashboardComponent
  }
}
</script>

<style>

</style>