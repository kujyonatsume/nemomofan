<template>
  <Title>2024生日紀念影片 - 涅默Nemesis2024生日企劃</Title>

  <Meta content="2024生日紀念影片 - 涅默Nemesis2024生日企劃" property="title" />
  <Meta content="2024生日紀念影片 - 涅默Nemesis2024生日企劃" property="og:title" />

  <Meta content="這，是我所觀測到的她 - 獻給涅默與所有絆星" property="description" />
  <Meta content="這，是我所觀測到的她 - 獻給涅默與所有絆星" property="og:description" />
  <Meta content="這，是我所觀測到的她 - 獻給涅默與所有絆星" name="twitter:description" />

  <Meta
    content="https://static.wixstatic.com/media/5d16f3_539ad0c2513e4467a13841b87e20398d%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/5d16f3_539ad0c2513e4467a13841b87e20398d%7Emv2.jpg"
    property="og:image" />
  <Meta
    content="https://static.wixstatic.com/media/5d16f3_539ad0c2513e4467a13841b87e20398d%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/5d16f3_539ad0c2513e4467a13841b87e20398d%7Emv2.jpg"
    property="twitter:image" />

  <Meta content="https://www.nemomofan.com/1st" property="og:url" />

  <Body id="open" :style="'backdrop-filter:blur(20px)'">
    <div class="d-flex justify-content-center">
      <iframe id="video" src="https://www.youtube.com/embed/LQInvdiB4vA?si=JPHH1nR4B2LOG9Pp"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  </Body>
</template>
<style lang="scss">

$h: calc(100vh - 95px);

#video {
  height: $h;
  width: calc($h / 9 * 16);
}</style>