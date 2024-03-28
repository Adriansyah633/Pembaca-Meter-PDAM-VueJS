<template>
  <div id="app">
    <router-view @authenticated="setAuthenticated"></router-view>
  </div>
</template>


<script>

export default {
  name: 'App',
  data(){
    return{
      authenticated: JSON.parse(localStorage.getItem('status'))
    }
  },
  mounted(){
    if(!this.authenticated){
      this.$router.replace({name : "Login"});
    }
  },
  methods:{
    setAuthenticated(status){
      this.authenticated=status
    },
    logout(){
      this.authenticated=false
      localStorage.removeItem('status')
      localStorage.removeItem('token')
    }
  }
}
</script>


<style>

</style>
