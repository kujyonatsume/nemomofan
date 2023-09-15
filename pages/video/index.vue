<script setup lang="ts">
var videoUrl = "https://www.youtube.com/embed/rZrFIkVnXZs?si=LL9_kNIbQGC_bRII&autoplay=1"
onMounted(() => {

})
</script>
<template>
  <Title>太陽伴星觀測總集 - 涅默Nemesis 一周年紀念</Title>

  <Meta content="太陽伴星觀測總集 - 涅默Nemesis一周年紀念活動" property="title" />
  <Meta content="太陽伴星觀測總集 - 涅默Nemesis一周年紀念活動" property="og:title" />
  <Meta content="太陽伴星觀測總集 - 涅默Nemesis一周年紀念活動" name="twitter:site" />

  <Meta content="這，是我所觀測到的她 - 獻給涅默與所有絆星" property="description" />
  <Meta content="這，是我所觀測到的她 - 獻給涅默與所有絆星" property="og:description" />
  <Meta content="這，是我所觀測到的她 - 獻給涅默與所有絆星" name="twitter:description" />

  <Meta content="https://www.nemomofan.com/video" property="og:url" />

  <div class="d-flex justify-content-center">
    <iframe id="video" :src=videoUrl
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"></iframe>
  </div>
</template>
<style lang="scss">
#video {
  height: calc(100vh - 95px);
  width: 100vw;
}
</style>