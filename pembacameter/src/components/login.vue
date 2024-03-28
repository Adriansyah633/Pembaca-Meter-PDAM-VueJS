<template>
  <div class="row align-content-center">
    <div class="col">
      <img src="../assets/Group 63.png" width="100%" />
    </div>
    <div class="col">
       <div class="row justify-content-start align-items-center mb-5">
      <img src="../assets/Group 2.png">
      <div class="col">
      <h4 class="poppins-semibold" style="color:#107EFF;">Perumda Air Minum Tirta Moedal</h4>
      <h5 class="poppins-regular">Kota Semarang</h5>
      </div>
      </div>
      <div class="d-flex h-50">
        <div class="justify-content-center align-self-center">
          <div class="text-center">
            <h2 class="poppins-black">Selamat Datang Kembali!</h2>
            <p>
              <b-icon-person
                style="width: 50px; height: 50px"
                variant="primary"
              ></b-icon-person>
            </p>
          </div>
          <div class="input">
            <label class="poppins-semibold">NPP</label>
            <input
              v-model="kode"
              type="text"
              class="poppins-regular-italic form-control"
              placeholder="Masukkan NPP"
              aria-label="NPP"
            />
          </div>
          <div class="input">
            <label class="poppins-semibold">Password</label>
            <input
              v-model="password"
              type="password"
              class="poppins-regular-italic form-control"
              placeholder="Masukkan Password"
              aria-label="Password"
            />
          </div>
          <div class="text-center">
            <button v-on:click="login()" class="btn btn-primary poppins-semibold">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "LoginComponent",
  data() {
    return {
      kode:'',
      password:'',
    };
  },
   methods: {
     login(){
       var user={
          kode:this.kode,
          password:this.password,
       };
       axios.post("http://localhost/BE/be/public/api/login", user, {
       }).then((result) => {
         localStorage.setItem('token', result.data.data.token);
         localStorage.setItem('role', result.data.data.role);
         localStorage.setItem('cabang', result.data.data.cabang);
         localStorage.setItem('kode', result.data.data.kode);
         localStorage.setItem('nm_petugas', result.data.data.nm_petugas);
         localStorage.setItem('nolangg', result.data.data.nolangg);
         localStorage.setItem('petugas', result.data.data.petugas);
         localStorage.setItem('status',true)
         this.$emit('authenticated',true)
        //  console.log(result.data.data.token)
         this.$router.replace({name: "dashboard"})
       }).catch(error=>{
        console.log(error);
        alert('Password salah atau pengguna tidak ditemukan.');
       })
    }
   },
   mounted(){
    this.$emit("authenticated", false)
   }
};
</script>

<style>
</style>
