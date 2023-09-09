<script setup lang="ts">
const p = defineProps({ data: Object })
var data = ref(p.data as IUserMessage)

</script>
<template>
  <div id="card-bg" class="d-flex flex-column justify-content-between">
    <p>{{ data!.text }}</p>
    <p id="username">{{ data!.name }}</p>
  </div>
</template>