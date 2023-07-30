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
<style lang="scss">
#card-bg {
  width: 400px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url(https://www.nemomofan.com/bg-card.png);
}
</style>