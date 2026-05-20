<template>
  <div class="datav-container">
    <dv-scroll-ranking-board :config="config" style="width:100%;height:300px" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const config = reactive({
  data: [
    {
      name: 'Component A',
      value: 55
    },
    {
      name: 'Component B',
      value: 120
    },
    {
      name: 'Component C',
      value: 78
    },
    {
      name: 'Component D',
      value: 66
    },
    {
      name: 'Component E',
      value: 80
    },
    {
      name: 'Component F',
      value: 45
    },
    {
      name: 'Component G',
      value: 29
    }
  ],
  unit: 'Unit',
  color: ['#00d2ff', '#3a7bd5']
})
</script>

<style scoped>
.datav-container {
  width: 100%;
  height: 300px;
  padding: 10px;
  border-radius: 8px;
}
</style>
