<!-- Composite -->

<script setup>
import {ref, onMounted} from 'vue'
import BarChart from '@/components/BarChart.vue';

const vehicle = ref('')

async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json')
  let data = await res.json()
  vehicle.value = data.results
  console.log(vehicle.value)
  return vehicle
} catch(error) {
  console.log(error)
}
onMounted(() => {
  getData()
})

</script>

<style scoped>

</style>