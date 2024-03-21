<template>
  <h1>Heck yes</h1>
<Doughnut
id="my-chart2-id"
    :options="chart2Options"
    :data="chart2Data"
  />
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)


export default {
  name: 'DoughNut',
  components: {
    Doughnut
  },
  data() {
    return {chartData: {
        labels: [ 'Brooklyn', 'Bronx', 'Queens', 'Manhattan', 'Staten Island' ],
        datasets: [ {backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'], data: [40, 20, 12, 3, 19] } ]
      },
      chartOptions: {
        responsive: true
      }
  }
}
}
</script>

