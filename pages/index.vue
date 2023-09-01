<script setup lang="ts">
var DEV = ref(import.meta.env.DEV)
onMounted(ResetfloorPos)
</script>
<template>
  <div class="d-flex justify-content-center">
    <iframe v-if="DEV" src="https://drive.google.com/file/d/1GVXFKYLMcAWYRl0MnB4tfjjoao5d41wZ/preview" width="1600"
      height="900" allow="autoplay"></iframe>
  </div>
</template>