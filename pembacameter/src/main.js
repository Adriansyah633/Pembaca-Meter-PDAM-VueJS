import Vue from 'vue';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/main.css';
import '@fortawesome/fontawesome-free/css/all.css';



Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

// Menambahkan axios sebagai properti global
Vue.prototype.$axios = axios;

const app = createApp(App);
app.use(router); // Mendaftarkan Vue Router di sini
app.mount('#app');
console.log(app.version);
