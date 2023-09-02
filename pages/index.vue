<script setup lang="ts">
var videoUrl =
  import.meta.env.DEV ? "https://drive.google.com/file/d/1GVXFKYLMcAWYRl0MnB4tfjjoao5d41wZ/preview" :
  "https://www.youtube.com/embed/dglXSGJq_iE?si=1G8Ci0LXwZsrxRkI"
</script>
<template>
  <div class="d-flex justify-content-center">
    <iframe :src=videoUrl width="1280" height="720"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>
  </div>
  <floor />
</template>