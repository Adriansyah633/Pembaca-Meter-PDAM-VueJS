<template>
  <div class="row align-content-center">
    <div class="col">
      <img src="../assets/Group 63.png" width="100%" />
    </div>
    <div class="col">
      <div class="justify-content-center align-self-center">
        <h2 class="poppins-semibold"><strong>Regristasi</strong> Akun anda</h2>
        <h4 class="poppins-regular">Hallo,Selamat Datang!</h4>
        <p class="poppins-regular">Masukkan Nama dan NPP anda</p>
        <div class="input">
            <label class="poppins-semibold" for=name>Nama</label>
          <input
            type="text"
            class="poppins-regular-italic form-control"
            placeholder="Masukkan Nama"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div class="input">
            <label class="poppins-semibold" for=npp>NPP</label>
          <input
            type="text"
            class="poppins-regular-italic form-control"
            placeholder="Masukkan NPP"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div class="input">
            <label class="poppins-semibold" for=email>Email</label>
          <input
            type="text"
            class="poppins-regular-italic form-control"
            placeholder="Masukkan Email"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div class="input">
            <label class="poppins-semibold" for=password>Password</label>
          <input
            type="text"
            class="poppins-regular-italic form-control"
            placeholder="Masukkan Password"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div class="text-center">
          <router-link to="/Login" class="btn btn-primary poppins-semibold">
          Daftar
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DaftarComponent",
};
</script>

<style>
</style>