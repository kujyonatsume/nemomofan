<script setup lang="ts">
var videoUrl = ref("https://drive.google.com/file/d/1GVXFKYLMcAWYRl0MnB4tfjjoao5d41wZ/preview")

</script>
<template>
  <div class="d-flex justify-content-center">
    <iframe :src=videoUrl width="1440" height="810"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>
  </div>
</template>