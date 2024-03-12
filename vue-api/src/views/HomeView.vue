<!-- Composite -->

<script setup>
import {ref, onMounted} from 'vue'

const vehicle = ref('')

async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json')
  let data = await res.json()
  vehicle.value = data.results
}
onMounted(() => {
  getData()
})

</script>

<style scoped>

</style>