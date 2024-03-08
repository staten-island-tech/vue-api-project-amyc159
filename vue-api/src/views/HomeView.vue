<script setup>
import {ref, onMounted} from 'vue'
<<<<<<< Updated upstream
=======

const vehicle = ref('')

async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json')
  let data = await res.json()
  vehicle.value = data.results
}
onMounted(() => {
  getData()
})

>>>>>>> Stashed changes
</script>

<style scoped>

</style>