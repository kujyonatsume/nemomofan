<script setup lang="ts">
const p = defineProps({
  num: Number,
  msg: String,
  name: String
})
</script>
<template>
  <div :id="'card-' + num">
    <div id="card-bg">
      <p id="card-text">{{ name }}<br>{{ msg }}</p>
    </div>
  </div>
</template>
