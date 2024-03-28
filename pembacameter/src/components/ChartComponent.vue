<template>
  <div>
    <canvas ref="myChart" width="400" height="200"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'ChartComponent',
  props: {
    chartData: Object, // Objek data untuk grafik
    chartOptions: Object, // Opsi konfigurasi untuk grafik
  },
  mounted() {
    this.$nextTick(() => {
      this.renderChart();
    });
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.myChart.getContext('2d');
      new Chart(ctx, {
        type: 'line', 
        data: this.chartData, 
        options: this.chartOptions, 
      });
    },
  },
};
</script>
