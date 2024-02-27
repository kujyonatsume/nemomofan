<script setup lang="ts">

</script>
<template>
  <Title>涅默Nemesis 趣味拼圖</Title>

  <Meta content="趣味拼圖 - 涅默Nemesis2024生日企劃" property="title" />
  <Meta content="趣味拼圖 - 涅默Nemesis2024生日企劃" property="og:title" />

  <Meta content="2024生日拼圖" property="description" />
  <Meta content="2024生日拼圖" property="og:description" />
  <Meta content="2024生日拼圖" name="twitter:description" />

  <Meta
    content="https://static.wixstatic.com/media/5d16f3_12f15efdd8aa4081b45c142c0da5f0e9%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/5d16f3_12f15efdd8aa4081b45c142c0da5f0e9%7Emv2.jpg"
    property="og:image" />
  <Meta
    content="https://static.wixstatic.com/media/5d16f3_12f15efdd8aa4081b45c142c0da5f0e9%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/5d16f3_12f15efdd8aa4081b45c142c0da5f0e9%7Emv2.jpg"
    property="twitter:image" />

  <Meta content="https://www.nemomofan.com/2nd-birth" property="og:url" />

  <Body id="Puzzlebody" oncontextmenu="return false">
    <div class="d-flex justify-content-center">
      <Puzzle src="/images/birth.png" :size=80 :percent=0.6 />
    </div>
  </Body>
</template>
<style lang="scss">
body#Puzzlebody {
  font-family: 'SetoFont', 'Noto Serif TC', sans-serif;
  -ms-overflow-style: none;
  background-color: blanchedalmond;
  background-image: none;
  user-select:none; /* standard syntax */
  -webkit-user-select:none; /* for Chrome、Safari */
  -moz-user-select:none;  /* for Mozilla、Firefox */
}
</style>