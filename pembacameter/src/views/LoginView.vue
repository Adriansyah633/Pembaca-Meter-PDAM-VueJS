<template>
  <div class="login">
    <div class="container gradient-container rounded-container mt-5">
      <LoginComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from '@/components/login.vue'

export default {
  name: 'LoginView',
  components: {
    LoginComponent
  }
}
</script>

<style>

</style>