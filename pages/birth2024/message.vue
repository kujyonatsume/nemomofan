<script setup lang="ts">

</script>
<template>
  <Title>太陽伴星觀測記錄 - 涅默Nemesis2024生日企劃</Title>

  <Meta content="太陽伴星觀測記錄 - 涅默Nemesis2024生日企劃" property="title" />
  <Meta content="太陽伴星觀測記錄 - 涅默Nemesis2024生日企劃" property="og:title" />

  <Meta content="這裡記錄著我們所觀測到的她 每一次的觀測都帶給我們不同的心情~" property="description" />
  <Meta content="這裡記錄著我們所觀測到的她 每一次的觀測都帶給我們不同的心情~" property="og:description" />
  <Meta content="這裡記錄著我們所觀測到的她 每一次的觀測都帶給我們不同的心情~" name="twitter:description" />

  <Meta
    content="https://static.wixstatic.com/media/5d16f3_539ad0c2513e4467a13841b87e20398d%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/5d16f3_539ad0c2513e4467a13841b87e20398d%7Emv2.jpg"
    property="og:image" />
  <Meta
    content="https://static.wixstatic.com/media/5d16f3_539ad0c2513e4467a13841b87e20398d%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/5d16f3_539ad0c2513e4467a13841b87e20398d%7Emv2.jpg"
    property="twitter:image" />

  <Meta content="https://www.nemomofan.com/1st/message" property="og:url" />

  <Body id="open">
    <div class="row justify-content-center">

    </div>
  </Body>
</template>
<style lang="scss">

@mixin cardsize($height, $width, $font: 16px) {

  #card-bg {
    width: 100%;
    width: $width;
    height: $height;
    font-size: $font;

    color: #ff5177;
    background-color: #ffdee9;
    background-repeat: no-repeat;
    background-image: url(/images/bg-card.png);

    //background-position-y: calc(($height - 85px) * $size);
    background-size: 75px;
    border-radius: 10px;

    #username {
      text-align: center;
      position: relative;
    }
  }
}

@include cardsize(250px, 400px);

@media(max-width:820px) {
  @include cardsize(300px, 300px)
}

@media(max-width:500px) {
  @include cardsize(250px, 200px, 8px)
}
</style>