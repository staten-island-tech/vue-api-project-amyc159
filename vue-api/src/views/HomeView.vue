<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {ref, onMounted} from 'vue'

const vehicle = ref('')
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
