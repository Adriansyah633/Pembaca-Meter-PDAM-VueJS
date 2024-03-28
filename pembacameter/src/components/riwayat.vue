<template>
  <div class="container">
    <h4 class="riwayat text-center poppins-semibold">RIWAYAT BACA DATA</h4>
    <div class="row justify-content-center align-items-center">
      <div class="col mb-4">
        <div class="row md-3 ml-2">
        <router-link to="/dashboard" class="btn btn-primary poppins-semibold">
          Kembali
        </router-link>
        </div>
      </div>
      <div class="col-md-6 d-flex justify-content-end">
        <input
          type="text"
          name="cari-data"
          v-model="search"
          class="form-control mr-2"
        />
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
          <td style="padding: 10px; display: flex;">
            <router-link :to="'/Edit/' + pel.nolangg">
              <button class="btn btn-md btn-success mr-1" v-if="pel.canEdit" @click="editData(pel.nolangg)"><i class="fa-solid fa-pen-to-square"></i></button>
            </router-link>
            <button class="btn btn-md btn-danger ml-1" @click="deleteConfirm(pel.nolangg)"><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 <script>

    export default{
        name: "RiwayatComponent",
        data() {
            return{
                pelanggan: [],
                perPage: 10,
                currentPage:1,
                search:"",
                petugas:"",
                pagination: "",
                totalRows: "",
                riwayat:[],

            };
        },
         methods: {
      // Mengambil detail pelanggan dari backend
      getDetailPelanggann() {
        const kode = localStorage.getItem("kode");
         const headers ={
          Authorization : "Bearer "  + localStorage.getItem('token'),
        };
        const params={
          petugas : kode
        }
      const url = `http://localhost/BE/be/public/api/riwayat?petugas=${params.petugas}`; 
      console.log(url)
      this.$axios.get(url, {headers})
        .then((response) => {
          this.pelanggan = response.data;
          console.log(response.data)
          this.pagination = response.data;
          this.totalRows = response.data.total;
        })
        .catch((error) => console.error("Error:", error));
      },
      deleteConfirm(nolangg) {
      if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
        this.deleteData(nolangg);
      }
    },
    deleteData(nolangg) {
      const headers ={
          Authorization : "Bearer "  + localStorage.getItem('token'),
        };
      this.$axios
        .delete(`http://localhost/BE/be/public/api/riwayat/{nolangg}`, headers)
        .then(() => {
          // Hapus data dari array pelanggan setelah berhasil dihapus dari backend
          this.pelanggan = this.pelanggan.filter((pel) => pel.nolangg !== nolangg);
          // Tampilkan pesan sukses
          this.$toast.success("Data berhasil dihapus.");
        })
        .catch((error) => console.error("Error:", error));
    },
    },
    mounted() {
    this.getDetailPelanggann();
  },
    }
 </script>