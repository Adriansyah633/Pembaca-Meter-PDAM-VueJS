<template>
    <div class="sidebar w-64 min-h-screen text-white p-4">
      <div class="text-2xl font-bold mb-4">Logo</div>
      <ul class="list-reset">
        <li class="mb-2">
          <router-link
            style="color: white"
            :to="{ name: 'Dashboard' }"
            class="block p-2 rounded hover:bg-gray-700"
            exact-active-class="text-blue-500"
          >
            <i class="fas fa-tachometer-alt fa-fw mr-2"></i>
            Dashboard
          </router-link>
        </li>
        <li class="mb-2">
          <router-link
          style="color: white"
            :to="{ name: 'Pelanggan' }"
            class="block p-2 rounded hover:bg-gray-700"
            exact-active-class="text-blue-500"
          >
            <i class dist-class="fas fa-user fa-fw mr-2"></i>
            Pelanggan
          </router-link>
        </li>
        <li class="mb-2">
          <router-link
          style="color: white"
            :to="{ name: 'Riwayat' }"
            class="block p-2 rounded hover:bg-gray-700"
            exact-active-class="text-blue-500"
          >
            <i class="fas fa-history fa-fw mr-2"></i>
            Riwayat
          </router-link>
        </li>
        <li class="mb-2">
          <router-link
          style="color: white"
            :to="{ name: 'Pengguna' }"
            class="block p-2 rounded hover:bg-gray-700"
            exact-active-class="text-white-500"
          >
            <i class="fas fa-user-cog fa-fw mr-2"></i>
            Pengguna
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "SidebarCom",
  };
  </script>
  
  <style scoped>
  .sidebar{
  background: linear-gradient(to right, #0b99eb, #1127ec);  
  padding: 10px;
  font-size: 20px;
  box-shadow: #107EFF;
  width: 400px;
  }
  .list-reset {
    list-style: none;
  }
  
  li {
    transition: background-color 0.3s ease;
  }
  
  .router-link {
    text-decoration: none;
    display: block;
    color: white;
  }
  
  i {
    width: 1.5em;
    text-align: center;
  }
  
  .hover:hover {
    background-color: #4a4a4a;
  }
  </style>