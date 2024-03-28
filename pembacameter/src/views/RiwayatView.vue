<template>
  <div class="riwayat">
    <div class="container-sm gradient-container rounded-container mt-5">
       <RiwayatComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RiwayatComponent from '@/components/riwayat.vue'

export default {
  name: 'RiwayatView',
  components: {
    RiwayatComponent
  }
}
</script>

<style>

</style>