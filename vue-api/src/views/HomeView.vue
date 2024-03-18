<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  //?
  async onMounted () {
    this.loaded = false

    try {
      const response = await fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json')
      const data = await response.json();
      const crashlocation = data.reduce((beep, boop) => {
        const borough = boop.borough;
        if(borough === "BROOKLYN"){
          //brooklyn count++
        } else if(borough === "MANHATTAN"){
          //manhattan count++
        } else if(borough === "QUEENS"){
          //queens count++
        } else if(borough === "BRONX"){
          //bronx count++
        } else if(borough === "STATEN ISLAND"){
          //staten island count++
        } else {
          
        }
        }
      })
      console.log(data)


      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}

</script>

<style scoped>

</style>