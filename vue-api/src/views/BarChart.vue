<template>
    <h1>Car Wham Whams</h1>
  <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
            labels: [ 
                'Brooklyn',
                'Bronx', 
                'Queens', 
                'Manhattan', 
                'Staten Island' 
            ],
            datasets: [{ 
                label: 'Number of Accidents in Each Borough',
                data: [], 
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
              ],
          }]
          
        },
        chartOptions: {
          responsive: true
        }
      }
    },
    async mounted() {
        try {
            const response = await fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json')
            let data = await response.json()
            
            const brooklyn = data.filter((location) => location.borough === 'BROOKLYN')
            this.chartData.datasets[0].data.push(brooklyn.length)

            const manhattan = data.filter((location) => location.borough === 'MANHATTAN')
            this.chartData.datasets[0].data.push(manhattan.length)

            const statenisland = data.filter((location) => location.borough === 'STATEN ISLAND')
            this.chartData.datasets[0].data.push(statenisland.length)

            const bronx = data.filter((location) => location.borough === 'BRONX')
            this.chartData.datasets[0].data.push(bronx.length)

            const queens = data.filter((location) => location.borough === 'QUEENS')
            this.chartData.datasets[0].data.push(queens.length)


        }catch (e) {
            console.error(e)
        }
        console.log(this.chartData)
    }
  }
  </script>