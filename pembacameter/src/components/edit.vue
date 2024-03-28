<template>
  <div class="container">
    <h2
      class="poppins-semibold text-center justify-content-center mb-3"
      style="
        background: #107eff;
        align-items: center;
        padding: 10px;
        color: white;
        border-radius: 5px;
      "
    >
      Input Data Meter
    </h2>
    <div class="row">
      <div class="col-md-6">
        <!-- Kolom untuk menampilkan lokasi saat ini -->
    <div class="input">
      <label for="currentLocation" class="poppins-semibold">Lokasi Saat Ini</label>
      <textarea
        style="background-color: #65B741; color: white;"
        v-if="currentLocation"
        v-model="currentLocationDisplay"
        class="poppins-regular form-control"
        name="currentLocation"
        placeholder="Latitude, Longitude"
        aria-label="Lokasi Saat Ini"
        aria-describedby="addon-wrapping"
        disabled
      ></textarea>
      <div v-else>
        <span class="text-muted">Mendapatkan lokasi saat ini...</span>
      </div>
    </div>
        <div class="input">
          <label for="alamat" class="poppins-semibold">Alamat</label>
          <textarea
            type="text"
            v-model="alamat"
            class="poppins-regular form-control"
            name="alamat"
            placeholder="Alamat Pelanggan"
            aria-label="Alamat Pelanggan"
            aria-describedby="addon-wrapping"
          ></textarea>
        </div>
        <div class="row align-items-center">
          <div class="col-md-4">
            <label for="nolangg" class="poppins-semibold">ID Pelanggan</label>
          </div>
          <div class="col-md-8">
            <div class="input">
              <input
                type="text"
                v-model="nolangg"
                class="poppins-regular form-control"
                placeholder="Nomor Pelanggan"
                aria-label="Nomor Pelanggan"
                aria-describedby="addon-wrapping"
                :disabled="true"
              />
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-4">
            <label for="nolangg" class="poppins-semibold">DISM</label>
          </div>
          <div class="col-md-8">
            <div class="input">
              <input
                type="text"
                v-model="dism"
                class="poppins-regular form-control"
                placeholder="Nomor Pelanggan"
                aria-label="Nomor Pelanggan"
                aria-describedby="addon-wrapping"
                :disabled="true"
              />
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-4">
            <label for="nolangg" class="poppins-semibold">Lalu</label>
          </div>
          <div class="col-md-8">
            <div class="input">
              <input
                type="text"
                v-model="lalu"
                class="poppins-regular form-control"
                placeholder="Nomor Pelanggan"
                aria-label="Nomor Pelanggan"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-4">
            <label for="nolangg" class="poppins-semibold">Periode</label>
          </div>
          <div class="col-md-8">
            <div class="input">
              <input
                type="text"
                v-model="periode"
                class="poppins-regular form-control"
                placeholder="Nomor Pelanggan"
                aria-label="Nomor Pelanggan"
                aria-describedby="addon-wrapping"
                :disabled="true"
              />
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-4">
            <label for="nolangg" class="poppins-semibold">Status Data</label>
          </div>
          <div class="col-md-8">
            <div class="input">
              <input
                type="text"
                v-model="dt"
                class="poppins-regular form-control"
                placeholder="Nomor Pelanggan"
                aria-label="Nomor Pelanggan"
                aria-describedby="addon-wrapping"
                :disabled="true"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <!-- Kolom untuk Status Data -->
        <div class="row align-items-center">
          <div class="col-md-4">
            <label for="st" class="poppins-semibold">Kini</label>
          </div>
          <div class="col-md-8">
            <div class="input">
              <input
                type="text"
                v-model="kini"
                class="poppins-regular form-control"
                placeholder="Masukkan meter kini"
                aria-label="Status Data"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-4">
            <label for="st" class="poppins-semibold">Keterangan</label>
          </div>
          <div class="col-md-8">
            <div class="input">
              <textarea
                type="text"
                v-model="kt"
                class="poppins-regular form-control"
                placeholder="Tambahkan Keterangan"
                aria-label="Status Data"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-4">
            <label for="st" class="poppins-semibold">Status Meter</label>
          </div>
          <div class="col-md-8">
            <div class="input">
              <select v-model="st" class="form-control">
              <option value="">Pilih Status Meter</option>
              <option v-for="all_status_meter in all_status_meter" :key="all_status_meter.kode" :value="all_status_meter.status">{{ all_status_meter.status }}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-4">
            <label for="foto_meter" class="poppins-semibold">Foto Meter</label>
          </div>
          <div class="col-md-8">
            <div class="input mb-5 display-flex">
              <Vue2Dropzone
                ref="myVueDropzone"
                id="dropzone"
                :options="dropzoneOptions"
                @vdropzone-file-added="fileAdded"
                @vdropzone-removed-file="fileRemoved"
              >
                <div class="dz-message text-center" style="margin:10px;">
                  <i class="fas fa-cloud-upload fa-3x"></i>
                  <h3>Drop files here or click to upload.</h3>
                </div>
              </Vue2Dropzone>
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-6">
            <router-link
              to="/dashboard/"
              class="btn btn-success btn-block poppins-semibold"
            >
              KEMBALI
            </router-link>
          </div>
          <div class="col-md-6">
            <button
              class="btn btn-primary btn-block poppins-semibold"
              @click="simpandata"
            >
              SIMPAN DATA
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import { required } from "vuelidate/lib/validators";
export default {
  name: "EditComponent",
  components:{
    Vue2Dropzone,
  },
  data() {
    return {
      nolangg: "",
      alamat: "",
      dism: "",
      lalu: "",
      st: "",
      dt:"",
      status_meter: "",
      status_baca:"",
      periode: "",
      map: null,
      file:null,
      all_status_meter: [],
      currentLocation: null,
      currentLocationDisplay: null,
      lokasi:"",
      dropzoneOptions: {
        url: "http://localhost/BE/be/public/api/getdetail?nolangg=${this.$route.params.nolangg}",
        thumbnailWidth: 150,
        thumbnailHeight: 150,
        maxFilesize: 2, // in MB
        maxFiles: 1,
        acceptedFiles: "image/*",
        dictDefaultMessage:"<i class='fas fa-cloud-upload'></i> Drop files here or click to upload.",
        addRemoveLinks: true,
    },
    };
  },
  validations:{
    file: {
      required,
   },
  },
  methods: {
    getdetailpelanggan() {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      this.$axios
        .get(
          `http://localhost/BE/be/public/api/getdetail?nolangg=${this.$route.params.nolangg}`,
          config
        )
        .then((result) => {
          this.nolangg = result.data.nolangg;
          this.alamat = result.data.alamat;
          this.dism = result.data.dism;
          this.lalu = result.data.lalu;
          this.dt = result.data.status_baca.nm_status;
          this.st = result.data.status_meter.status;
          this.periode = result.data.periode;
          this.status_meter = result.data.status_meter.status;
          this.all_status_meter = result.data.all_status_meter;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    simpandata() {
      const headers = {
        Authorization: "Bearer " + localStorage.getItem("token"),
      };
      const selectedStatus = this.all_status_meter.find(status => status.status === this.st);
     
      const data = {
        nolangg: this.nolangg,
        dism: this.dism,
        periode: this.periode,
        alamat: this.alamat,
        lalu: this.lalu,
        dt : this.dt.kode,
        st: selectedStatus.kode,
        kini: this.kini,
        kt: this.kt,
        file: this.file,
      };
      this.$axios
        .post(
          `http://localhost/BE/be/public/api/edit/${this.$route.params.nolangg}`,
          data,
          { headers }
        )
        .then((response) => {
          console.log("Data berhasil disimpan:", response.data);
          this.$router.push(`/riwayat`);
        })
        .catch((error) => {
          console.error("Error Saving Data:", error);
        });
    },
    fileAddes(file) {
      this.file = file;
    },
    fileRemoved(){
      this.file = null;
    },
    getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.showPosition,
          this.showError
        );
      } else {
        alert("Geolocation tidak didukung oleh browser ini.");
      }
    },
    showPosition(position) {
      this.currentLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      this.getAddressFromCoordinates(this.currentLocation.latitude, this.currentLocation.longitude);
    },
    showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert("Akses Lokasi Ditolak.");
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Informasi Lokasi Tidak Tersedia.");
          break;
        case error.TIMEOUT:
          alert("Permintaan Lokasi Melebihi Waktu.");
          break;
        case error.UNKNOWN_ERROR:
          alert("Kesalahan Tidak Diketahui.");
          break;
      }
    },
    getAddressFromCoordinates(latitude, longitude) {
      // Ganti API_KEY dengan kunci API Google Maps Geocoding Anda
      const API_KEY = "AIzaSyDEnROEdWNv2FCGflnEODYyhPp9EqDNnTg";
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;
      
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.status === "OK") {
            // Ambil alamat pertama dari hasil geocoding
            const address = data.results[0].formatted_address;
            // Set nilai textarea untuk menampilkan alamat saat ini
            this.currentLocationDisplay = address;
          } else {
            throw new Error(data.status);
          }
        })
        .catch(error => {
          console.error("Error fetching address:", error);
        });
    },
  },
  mounted() {
    this.getdetailpelanggan();
    // this.getAvailableStatusMeter();
    this.getCurrentLocation();
  },
};
</script>

<style>
</style>
