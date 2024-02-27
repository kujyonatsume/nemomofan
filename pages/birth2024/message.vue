<script setup lang="ts">
const list = ref([
  "神綵",
  "貄柚",
  "茶拿鐵紅",
  "ながと",
  "雪城泉Izumi",
  "Felix",
  "餐桌原",
  "諾米糰子",
  "小亞",
  "是南瓜麻糬又是南瓜湯",
  "麵店賣水餃",
  "涅絆黑洞倫十分",
  "千萬本費南雪",
  "小狼",
  "子廷",
  "情易",
  "最喜歡捏摸的東邁",
  "Justin_Huang",
  "斑無",
  "千束",
  "Ro_Chen",
  "Arno竹子",
  "阿軒Axuan",
  "紅薑小籠包",
  "WatchXD",
  "魚兒",
  "楓カエデ",
  "龍影",
  "河豚",
  "Sun_Sun",
  "Qurakue",
  "Sora",
  "凱恩",
  "無面騎士restar",
  "kurumi",
  "咻比嘟華",
  "linlowshi",
  "可樂",
  "鋼彈盪單槓",
  "達納特斯",
  "White懷特",
  "木子_Muzi",
  "羽蔚凌晴",
  "小翼小意義",
  "はなことわる",
  "Alopex",
  "林Raven過勞Claw",
  "一生推的絆星",
  "絆顆花生飛魚吐司",
  "雙層哈士堡"
])
</script>
<template>
  <Title>生日祝賀版 - 涅默Nemesis2024生日企劃</Title>

  <Meta content="生日祝賀版 - 涅默Nemesis2024生日企劃" property="title" />
  <Meta content="生日祝賀版 - 涅默Nemesis2024生日企劃" property="og:title" />

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
      <a class="col-3" target="_blank" v-for="name in list" :href="'/images/message/' + name + '.svg'">
        <img :src="'/images/message/' + name + '.svg'"></a>
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
