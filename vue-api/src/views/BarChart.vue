<template>
    <h1>Line of Duty Deaths</h1>
  <Bar
      v-if="loaded"
      :data="chartData"
    />
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
        return{
        loaded: ref(false),
        chartData: {
            labels: [ 
                'Firefighters',
                'Captains', 
                'Lieutenants', 
                'Batallion Chief', 
                'Engineer',
                'Assistant Engineer' 
            ],
            datasets: [{ 
                label: 'Number of Deaths',
                data: [], 
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(50, 150, 100, 0.2)',
              ]
          }]
        }
       }
      }, 
    async getData(){
        try {
            this.loaded.value = false
            const res = await fetch('https://data.cityofnewyork.us/resource/32y8-s55c.json')
            let data = await res.json()
            console.log(data)
            const firefighter = data.filter((person) => person.rank === 'FIREFIGHTER')
            this.datasets.data.value.push(firefighter.length)

            const captain = data.filter((person) => person.rank === 'CAPTAIN')
            this.datasets.data.value.push(captain.length)

            const lieutenant = data.filter((person) => person.rank === 'LIEUTENANT')
            this.datasets.data.value.push(lieutenant.length)

            const batallion = data.filter((person) => person.rank === 'BATALLION CHIEF')
            this.datasets.data.value.push(batallion.length)

            const engineer = data.filter((person) => person.rank === 'ENGINEER')
            this.datasets.data.value.push(engineer.length)

            const assistant = data.filter((person) => person.rank === 'ASSISTANT ENGINEER')
            this.datasets.data.value.push(assistant.length)

            this.loaded.valueOf = true;
        }catch (e) {
            console.error(e)
        }
    },
     onMounted(getData){
        return{
            loaded,
            chartData,
        }
     }
    }

  </script>