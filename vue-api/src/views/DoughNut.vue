<template>
  <h1>Heck yes</h1>
<Pie v-if="loaded"
id="my-chart2-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(Tooltip, Legend,
  ArcElement)


export default {
  name: 'Pie',
  components: {Pie},
    chartData: {
      type: Object,
      required: true
    }
  ,
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [
          'Brooklyn',
          'Queens',
          'Manhattan',
          'Bronx',
          'Staten Island'
        ],
        datasets: [
          {
            label: 'Bourough Crash data',
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        backgroundColor: [
          'rgba(0, 127, 95, 0.2)',
          'rgba(43, 147, 72, 0.2)',
          'rgba(85, 166, 48, 0.2)',
          'rgba(128, 185, 24, 0.2)',
          'rgba(170, 204, 0, 0.2)',
          'rgba(191, 210, 0, 0.2)',
          'rgba(212, 215, 0, 0.2)',
          'rgba(221, 223, 0, 0.2)',
          'rgba(238, 239, 32, 0.2)'
        ],
        borderColor: [
          '#007F5F',
          '#2B9348',
          '#55A630',
          '#80B918',
          '#AACC00',
          '#BFD200',
          '#D4D700',
          '#DDDF00',
          '#EEEF20'
        ],
        borderWidth: 2.5
      }
    }
  },
  async mounted() {
    try {
      const res = await fetch(
        'https://data.cityofnewyork.us/resource/h9gi-nx95.json'
      )
      let data = await res.json()
      const brooklyn = data.filter((Bourough) => Bourough.bourough === 'BROOKLYN')
      this.chartData.datasets[0].data.push(brooklyn.length)

      const bronx = data.filter((Bourough) => Bourough.bourough === 'BRONX')
      this.chartData.datasets[0].data.push(bronx.length)

      const manhattan = data.filter((Bourough) => Bourough.bourough === 'MANHATTAN')
      this.chartData.datasets[0].data.push(manhattan.length)

      const queens = data.filter((Bourough) => Bourough.bourough === 'QUEENS')
      this.chartData.datasets[0].data.push(queens.length)

      const si = data.filter((Bourough) => Bourough.bourough === 'STATEN ISLAND'
      )
      this.chartData.datasets[0].data.push(si.length)

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
    console.log(this.chartData)
  }
}
</script>

