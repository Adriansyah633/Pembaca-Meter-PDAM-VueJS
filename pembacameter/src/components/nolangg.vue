<template>
  <div class="container mt-5">
    <header class="h3 justify-content-center text-center poppins-semibold" style="margin:10px; background-color: #55a3ec;color: white;">
      INPUT DATA MELALUI BENDEL
    </header>
    <div class="row justify-content-center align-items-center">
      <div class="col mb-4">
        <div class="row md-3">
        <router-link to="/dashboard" class="btn btn-primary poppins-semibold">
          Kembali
        </router-link>
        </div>
      </div>
      <div class="col-md-3">
        <input
          type="text"
          name="cari-data"
          v-model="search"
          class="form-control"
        />
      </div>
      <div class="col-md-3">
        <button
          class="btn btn-md btn-success"
          name="cari_nolangg"
          v-on:click="cari_data_nolangg()">Search</button>
      </div>
    </div>
    <table
      class="table table-hover table-striped table-responsive"
      id="my-table"
      :pelanggan="pelanggan"
      :per-page="perPage"
      :current-page="currentPage"
    >
    <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        @change="loadData"
      ></b-pagination>
      <thead>
        <tr>
          <th class="text-center">No</th>
          <th class="text-center">ID Pelanggan</th>
          <th class="text-center">Periode</th>
          <th class="text-center">DISM</th>
          <th class="text-center">Lalu</th>
          <th class="text-center">Kini</th>
          <th class="text-center">M3</th>
          <th class="text-center">Status</th>
          <th class="text-center">Keterangan</th>
          <th class="text-center">Data</th>
          <th class="text-center">Cabang</th>
          <th class="text-center">Aksi</th>
          <th class="text-center">Tandai</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pel, index) in pelanggan" :key="index">
          <td class="text-center">{{ index + 1 }}</td>
          <td>{{ pel.nolangg }}</td>
          <td>{{ pel.periode }}</td>
          <td>{{ pel.dism }}</td>
          <td>{{ pel.lalu }}</td>
          <td>{{ pel.kini }}</td>
          <td>{{ pel.m3 }}</td>
          <td>{{ pel.status_meter.status}}</td>
          <td>{{ pel.kt }}</td>
          <td>{{ pel.status_baca.nm_status}}</td>
          <td>{{ pel.cabang.nm_cabang }}</td>
          <td>
            <router-link :to="'/Edit/' + pel.nolangg">
              <button class="btn btn-md btn-success"><i class="fa-solid fa-pen-to-square"></i></button>
            </router-link>
          </td>
          <td class="text-center" width="100%">
           <div class="form-check form-check-inline">
            <input
            class="form-check-input" 
            type="checkbox"
            style="transform: scale(2);"
            >
           </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "NolanggComponent",
  data() {
    return {
      bendel:"",
      kode :"",
      pelanggan: "bendelData",
      search: this.$route.query.search,
      bendelData: [],
      pagination: {},
      perPage: 10,
      currentPage: 1,
      totalRows: 0,
    };
  },
  computed: {
    rows() {
      return this.pelanggan.length;
    },
  },
  methods: {
    loadData() {
      const params = {
        page: this.currentPage,
        perPage: this.perPage,
      };
      const option = {
        headers: { Authorization: "bearer " + localStorage.getItem("token") },
      };
      const url = `http://localhost/BE/be/public/api/pelanggan?page=${this.currentPage}&per_page=${this.perPage}`;
      this.$axios
        .get(url, option, { params })
        .then((response) => {
          this.pelanggan = response.data.data;
          this.pagination = response.data;
          this.totalRows = response.data.total;
        })
        .catch((error) => console.error("Error:", error));
    },

    tb_pelanggan() {
      this.loadData();
    },
    cari_data_nolangg(){
        this.cari_data_dism();
    },
  cari_data_dism() {
    const token = localStorage.getItem('token');
    const kode = localStorage.getItem("kode");
    const params = {
        page: this.currentPage,
        perPage: this.perPage,
      };
    const url = `http://localhost/BE/be/public/api/bendel`;
    const data = {
        bendel: this.search,
        kode : kode
    };
    const headers = {
        Authorization: "Bearer " + token,
    };

    this.$axios.post(url, data, { headers }, {params})
        .then(response => {
            console.log(response);
            this.pelanggan = response.data;
            this.totalRows = response.data.total;
            this.pagination = response.data;
            this.currentPage= 1;
            this.perPage = 10;
        })
        .catch(error => console.error("Error:", error));
}
  },
  mounted() {
    this.cari_data_nolangg();
  },
};
</script>

<style>
</style>