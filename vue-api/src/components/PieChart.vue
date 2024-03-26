<template>
    <h1>Heck yes</h1>
  <Pie v-if="loaded"
      :data="data"
    />
  </template>
  
  <script>
  import { Pie } from 'vue-chartjs'
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { ref, onMounted } from 'vue';
  
  ChartJS.register(Tooltip, Legend,
    ArcElement)
  
  
  export default {
    name: 'Pie',
    components: {Pie},
    data() {
      const loaded = ref(false);
      const data = ref({});
      
    async function getData() {
      try {
        const res = await fetch(
          'https://data.cityofnewyork.us/resource/h9gi-nx95.json'
        )
        let datal = await res.json()
        const brooklynl = []
        const bronxl = []
        const manhattanl = []
        const queensl = []
        const sil = []
  
        const brooklyn = datal.filter((borough) => borough.borough === 'BROOKLYN')
        brooklynl.push(brooklyn.length)
  
        const bronx = datal.filter((borough) => borough.borough === 'BRONX')
        bronxl.chartData.datasets[0].data.push(bronx.length)
  
        const manhattan = datal.filter((borough) => borough.borough === 'MANHATTAN')
        manhattanl.chartData.datasets[0].data.push(manhattan.length)
  
        const queens = datal.filter((borough) => borough.borough === 'QUEENS')
        queensl.chartData.datasets[0].data.push(queens.length)
  
        const si = datal.filter((borough) => borough.borough === 'STATEN ISLAND' )
        sil.chartData.datasets[0].data.push(si.length)
  
        data.value = {
          labels:['brooklyn', 'bronx', 'manhattan', 'queens', 'si'],
          datasets:{
          labels: 'vehicle',
          backgroundColor: '#F87979',
          data: brooklynl
          }
        }
  
        this.loaded = true
      } catch (e) {
        console.error(e)
      }
    }
    onMounted(getData);
    return{
      data,
      loaded
    }
  }}
  </script>
  
  