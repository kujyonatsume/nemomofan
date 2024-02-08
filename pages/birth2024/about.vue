<script setup lang="ts">
const lists = ref({
  總召: [['臘肉', 'ykuilru1']],
  企劃協作: [['艾路', 'bkb0408'], ['凌晴', 'ymie0204'], ['無面騎士restar', 'restar_rider',]],
  網站及拼圖製作: [['夏目', '_natsume0304'],],
  生日祝賀版設計: [['Justin Huang', 'justin19980213'], ['ながと', 'nagato191109'], ['夏目', '_natsume0304']],
  影片剪輯: [['臘肉', 'ykuilru1'], ['懷特', 'SxWhite3'], ['ながと', 'nagato191109'], ['小亞', 'shinikonotDD'],],
  歌曲製作: [['RavenClaw', 'RavenCl06474794'], ['斑無', 'MadaraNashi']],
  混音師: [['Teddy Wang @TAKEOFF MUSIC STUDIO', '']],
  繪師: [['熱晴', 'PA5510N0423'], ['奶油醬油', 'CSS74134570'],],
})
</script>
<template>
  <Title>關於我們 - 涅默Nemesis2024生日企劃</Title>

  <Meta content="關於我們 - 涅默Nemesis2024生日企劃" property="title" />
  <Meta content="關於我們 - 涅默Nemesis2024生日企劃" property="og:title" />
  <Meta content="關於我們 - 涅默Nemesis2024生日企劃" name="twitter:site" />

  <Meta content="歡迎加入我們的非官方DC粉絲群 : https://discord.gg/nemesissuki" property="description" />
  <Meta content="歡迎加入我們的非官方DC粉絲群 : https://discord.gg/nemesissuki" property="og:description" />
  <Meta content="歡迎加入我們的非官方DC粉絲群 : https://discord.gg/nemesissuki" name="twitter:description" />

  <Meta
    content="https://static.wixstatic.com/media/5d16f3_539ad0c2513e4467a13841b87e20398d%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/5d16f3_539ad0c2513e4467a13841b87e20398d%7Emv2.jpg"
    property="og:image" />
  <Meta
    content="https://static.wixstatic.com/media/5d16f3_539ad0c2513e4467a13841b87e20398d%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/5d16f3_539ad0c2513e4467a13841b87e20398d%7Emv2.jpg"
    property="twitter:image" />

  <Meta content="https://www.nemomofan.com/1st/about" property="og:url" />

  <Body id="open">
    <div id="about" class="d-flex justify-content-center">
      <div id="auto-row" class="row-cols-auto">
        <div id="listRow" v-for="(list, key) in lists">
          <h2>{{ key }}</h2>
          <div class="d-flex justify-content-center">
            <div id="listCol" v-for="data in list">
              <img :src="`/images/icon/${data[1]}.jpg`" width="180" height="180">
              <NuxtLink id="name" class="nav-link" :to="'https://twitter.com/' + data[1]" target="_blank"
                :title="'@' + data[1]">{{ data[0] }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Body>
</template>
<style lang="scss">
#about {
  color: #ff5177;
  margin-top: 10vh;
  left: 15vw;
  width: 70vw;
  position: relative;

  #auto-row {
    min-width: 920px;
  }

  #auto-row>* {
    padding: unset;
  }

  #listRow {
    text-align: center;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
  }

  #listCol {
    border-radius: 20px;
    margin: 10px;
    padding: 5px !important;
    background-color: rgba(255, 255, 255);

    img {
      border-radius: 20px 20px 0px 0px
    }

    #name {
      font-size: 20px;
      margin: unset;
      border-radius: 0px 0px 20px 20px !important;
    }

    #name:hover {
      background-color: #ffbebe;
    }
  }
}
</style>