<template>
  <div class="nolangg">
    <div class="container-sm gradient-container rounded-container">
       <NolanggComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NolanggComponent from '@/components/nolangg.vue'

export default {
  name: 'NolanggView',
  components: {
    NolanggComponent,
  }
}
</script>

<style>

</style>