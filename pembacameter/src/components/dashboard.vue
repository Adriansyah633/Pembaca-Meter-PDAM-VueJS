<template>
  <div class="dahlah">
    <div class="carousel shadow">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption=""
          text=""
          img-src="https://pdamkotasmg.co.id/packages/upload/slider/A9Jx0Bg.jpg"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide
          img-src="https://pdamkotasmg.co.id/packages/upload/slider/2iTJq1e.jpg"
        >
          <h1></h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide
          img-src="https://pdamkotasmg.co.id/packages/upload/slider/3dBR85p.jpg"
        ></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://pdamkotasmg.co.id/packages/upload/slider/23SDrLC.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <div class="row row-dashboard">
      <div class="col-md-8 ml-5">
        <div class="container gradient-container rounded-container shadow">
          <div class="container">
            <div class="container">
              <div
                class="card mt-4 mb-4 poppins-regular shadow"
                style="max-width: 400px"
              >
                <div class="row no-gutters">
                  <div
                    class="col-md-4 d-flex align-items-center justify-content-center"
                  >
                    <img src="../assets/petugas.png" width="100px">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body" style="background-color:#107EFF; color:white;">
                      <h5 class="card-title">
                        Selamat Datang <br>
                         {{ nm_petugas }}
                      </h5>
                      <p class="card-text">NPP : {{ kode }} Pembaca Meter.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-for="bar in bars" v-bind:key="bar" class="row mb-1">
                <div class="col-sm-2">{{ bar.variant }}:</div>
                <div class="col-sm-10 pt-1">
                  <b-progress
                    :value="bar.value"
                    :variant="bar.variant"
                    :key="bar.variant"
                  ></b-progress>
                </div>
              </div>

              <div class="row mt-4 justify-content-between">
                <ChartComponent
                  :chart-data="chartData"
                  :chart-options="chartOptions"
                  style="width: 800px; height: 400px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="container gradient-container rounded-container shadow">
          <div class="card mb-3 poppins-regular">
            <div class="card-body" style="position:relative">
              <h5 class="card-title poppins-semibold"><img src="../assets/date.png" width="60px">   Waktu dan Tanggal</h5>
              <p class="card-text">
                Jam :  {{ new Date().getHours() }}:{{ new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes() }}
              </p>
              <p class="card-text">
                Tanggal : {{ new Date().toLocaleDateString() }}
              </p>
            </div>
          </div>
          <div class="col align-items-center card-opsi">
            <div class="mb-3">
              <b-button
                v-b-modal.modal-prevent-closing-1
                class="btn btn-block poppins-semibold shadow"
                style="height: 110px;margin: 0; font-size: 24px; display:flex; align-items: center;
                 background-color:#59D5E0; border:none;"
                @click="$bvModal.show('bv-modal-example-1')"
                ><img src="../assets/nolangg.png" width="90px"> Input By
                Nolangg</b-button
              >
              <b-modal id="bv-modal-example-1" hide-footer>
                <template #modal-title> Cari Data Nolangg </template>
                <div class="d-block text-left">
                  <label>Masukkan Nomor Pelanggan</label>
                  <input
                    type="text"
                    name="cari_data"
                    v-model="search"
                    class="form-control mb-2"
                  />
                  <button
                    class="btn btn-md btn-success"
                    v-on:click="cari_data_nolangg()"
                  >
                    Search
                  </button>
                  <div v-if="showWarning" class="alert alert-danger">
                    <strong>Peringatan!</strong> Data Tidak Ditemukan!!
                  </div>
                </div>
              </b-modal>
            </div>
            <div>
              <b-button
                v-b-modal.modal-prevent-closing-1
                class="btn btn-block poppins-semibold mb-3 shadow"
                style="height: 110px; font-size: 24px; display:flex; align-items: center; 
                background-color:#FAA300; border:none;"
                @click="$bvModal.show('bv-modal-example')"
                ><img src="../assets/bendel.png" width="90px">Input By
                Bendel</b-button
              >
              <b-modal id="bv-modal-example" hide-footer>
                <template #modal-title> Cari Data Bendel </template>
                <div class="d-block text-left">
                  <label>Masukkan Nomor Bendel(4 angka DISM)</label>
                  <input
                    type="text"
                    name="cari_data_dism"
                    v-model="search"
                    class="form-control mb-2"
                  />
                  <button
                    class="btn btn-md btn-success"
                    v-on:click="cari_data_dism()"
                  >
                    Search
                  </button>
                  <div v-if="showWarning" class="alert alert-danger">
                    <strong>Peringatan!</strong> Bendel Tidak Ditemukan!!
                  </div>
                </div>
              </b-modal>
            </div>
           
              <b-button
                class="btn btn-block btn-success poppins-semibold shadow"
                style="height: 110px; font-size: 24px; display:flex; align-items: center; background-color:#F4538A; border:none;"
                v-on:click="getdetailpelanggan()"
                to="/riwayat"
                ><img src="../assets/riwayat.png" width="90px">Riwayat Baca</b-button
              >
    
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="footer poppins-semibold">
        <p>© 2018 Perumda Air Minum Tirta Moedal Kota Semarang  •   dikembangkan oleh dinustek.</p>
        <h6>Pembaca Meter</h6>
      </div>
    </footer>
  </div>
</template>

<script>
import ChartComponent from "./ChartComponent.vue";
export default {
  name: "DashboardComponent",
  components: {
    ChartComponent,
  },
  data() {
    return {
      showWarning: false,
      name: "",
      nm_petugas: "",
      kode: "",
      nameState: null,
      submittedNames: [],
      bars: [
        { variant: "success", value: "75" },
        { variant: "info", value: "124" },
      ],
      timer: null,
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Agustus",
          "September",
          "Oktober",
          "November",
          "Desember",
        ],
        datasets: [
          {
            label: "DATA METER",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            data: [56, 78, 43, 60, 50, 98, 76, 77, 56, 87, 65, 43],
          },
        ],
      },
      chartOptions: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
  },
  methods: {
    getfromLocalStorage() {
      this.nm_petugas = localStorage.getItem("nm_petugas");
      this.kode = localStorage.getItem("kode");
    },
    cari_data_nolangg() {
      const nolangg = this.search;
      const data = {
        nolangg: nolangg,
      };
      const headers = {
        Authorization: "bearer " + localStorage.getItem("token"),
      };
      const url = "http://localhost/BE/be/public/api/pelanggan-check";
      this.$axios
        .post(url, data, { headers })
        .then((response) => {
          console.log(response.data);
          const kode = response.data.kode;
          if (kode === "1") {
            this.$router.push("/Edit/" + nolangg);
          } else if (kode === "0") {
            this.showWarning = true;
            setTimeout(() => {
              this.showWarning = false;
            }, 3000);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cari_data_dism() {
      const token = localStorage.getItem("token");
      const kode = localStorage.getItem("kode");
      const bendel = this.search.substring(0, 4);
      const data = {
        kode: kode,
        bendel: bendel,
      };
      const headers = {
        Authorization: "bearer " + token,
      };
      const url = "http://localhost/BE/be/public/api/bendel-check";
      this.$axios
        .post(url, data, { headers })
        .then((response) => {
          console.log(response.data);
          const kode = response.data.kode;
          if (kode === "1") {
            this.$router.push({
              path: "/nolangg",
              query: { search: this.search },
            });
          } else if (kode === "0") {
            this.showWarning = true;
            setTimeout(() => {
              this.showWarning = false;
            }, 2500);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getfromLocalStorage();
    this.timer = setInterval(() => {
      this.bars.forEach((bar) => (bar.value = 25 + Math.random() * 75));
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style>
/* Tambahkan styling sesuai kebutuhan */
</style>
