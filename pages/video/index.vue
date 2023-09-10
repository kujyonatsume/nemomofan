<script setup lang="ts">
var videoUrl = "https://www.youtube.com/embed/LgTR3GCxLIM?si=t5RzByDDT_UBYkkv"
</script>
<template>
  <Title>太陽伴星觀測報告 - 涅默Nemesis 一周年紀念</Title>

  <Meta content="絆星留言板 - 涅默Nemesis一周年紀念活動" property="title" />
  <Meta content="絆星留言板 - 涅默Nemesis一周年紀念活動" property="og:title" />
  <Meta content="絆星留言板 - 涅默Nemesis一周年紀念活動" name="twitter:site" />
  <Meta content="涅默Nemesis一周年紀念活動" property="og:site_name" />

  <Meta content="快來和我們一起留言恭喜默默一周年吧~" property="description" />
  <Meta content="快來和我們一起留言恭喜默默一周年吧~" property="og:description" />
  <Meta content="快來和我們一起留言恭喜默默一周年吧~" name="twitter:description" />

  <Meta content="https://www.nemomofan.com/video" property="og:url" />
  
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