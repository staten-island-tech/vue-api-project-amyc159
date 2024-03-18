<template>
  
  <!-- <BarChart aria-describedby="my-data-table" /> -->
  <!-- <Bar
id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  /> -->
  <table id="my-data-table">
    <caption>Motor Vehicle Collisions within the Boroughs</caption>
    <thead>
      <tr>
        <th>Brooklyn</th>
        <th>Bronx</th>
        <th>Manhattan</th>
        <th>Staten Island</th>
        <th>Queens</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>987</td>
        <td>1209</td>
        <td>825</td>
        <td>777</td>
        <td> 987</td>
      </tr>
    </tbody>
  </table> 
</template> 


<script>
import { mapGetters } from 'pinia'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}

/* const vehicle = ref('')

async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json')
  let data = await res.json()
  vehicle.value = data.results
}
onMounted(() => {
  getData()
})  */
</script>

<style scoped>
</style>