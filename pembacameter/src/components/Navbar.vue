<template>  
<div class="container-navbar">
<div class="top-bar">
  <div class="row justify-content-start align-items-center ">
     <img src="../assets/Group 2.png" width="90px">
     <div class="col justify-content-start">
      <h2 class="poppins-bold judul">PDAM Tirta Moedal Kota Semarang</h2>
      <div class="row ml-1">
      <p >Call Us: <a  href="tel:123-456-7890">(123) 456-7890</a></p>
          <p style="margin-left:5px;">Email Us: <a  href="mailto:info@yourcompany.com">info@yourcompany.com</a></p>
      </div>
     </div>
  </div>
        <ul class="social-media-list poppins-regular">
          <li><a href="#"><i class="fab fa-facebook-f"></i>  PDAM Kota Semarang</a></li>
          <li><a href="#"><i class="fab fa-twitter"></i>PDAMKotaSMG</a></li>
          <li><a href="#"><i class="fab fa-instagram"></i> pdam_kota_semarang</a></li>
          <li><a href="#"><i class="fab fa-phone"></i>  0811-26800-60</a></li>
        </ul>
         <nav class="navbar navbar-expand-md bg-body-tertiary mb-8">
    <div class="container-fluid justify-content-center align-items-center">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link style="color:#107EFF;" class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
             <router-link style="color:#107EFF;  margin-left:20px;" class="nav-link" to="/contact">Contact</router-link>
          </li>
          <li v-if="!isHomePage" class="nav-item">
             <router-link style="color:#107EFF; margin-left:20px;" class="nav-link" to="/" v-on:click="handleLogout"><i class="fas fa-sign-out-alt mr-2"></i>Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      </div>
   
</div>
</template>

<script>
export default {
  name: "NavbarCom",
  data() {
    return{
      isHomePage: false
    };
  },
  created(){
    this.isHomePage = this.$router.path === "/";
  },
  watch: {
    $route(to) {
      this.isHomePage = to.path === "/";
    }
  },
  methods: {
    async handleLogout() {
      try {
        const response = await fetch('http://localhost/BE/be/public/api/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: "bearer " + localStorage.getItem("token"),
          }
        });

        if (response.ok) {
          localStorage.removeItem('token');
          this.$router.push('/login');
          console.log(response)
        } else {
          console.error('Failed to logout:', response.statusText);
          // Handle error if needed
        }
      } catch (error) {
        console.error('Failed to logout:', error);
      }
    }
  }
};
</script>

<style scoped>

</style>