<script setup lang="ts">
var videoUrl = "https://www.youtube.com/embed/LgTR3GCxLIM?si=t5RzByDDT_UBYkkv"
</script>
<template>
  <div class="d-flex justify-content-center">
    <iframe id="video" :src=videoUrl
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>
  </div>
  <floor />
</template>
<style lang="scss">
#video {
  width: 1280px;
  height: 720px;
}
</style>