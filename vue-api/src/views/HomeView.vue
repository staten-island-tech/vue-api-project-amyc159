<template>
  <BarChart aria-describedby="my-data-table" />
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
import {ref, onMounted} from 'vue'



/* const vehicle = ref('')

async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json')
  let data = await res.json()
  vehicle.value = data.results
}
onMounted(() => {
  getData()
}) */
</script>

<style scoped>

</style>