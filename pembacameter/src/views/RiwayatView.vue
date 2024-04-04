<template>
  <div class="riwayat">
    <div class="flex">
    <Sidebar class="w-64 min-h-screen" />
    <div class="container-sm gradient-container rounded-container mt-5">
       <RiwayatComponent />
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RiwayatComponent from '@/components/riwayat.vue'
import Sidebar from '@/components/sidebar.vue'

export default {
  name: 'RiwayatView',
  components: {
    RiwayatComponent,
    Sidebar
  }
}
</script>

<style>
.flex {
  display: flex;
}

.w-64 {
  width: 16rem;
}

.min-h-screen {
  min-height: 100vh;
}
</style>