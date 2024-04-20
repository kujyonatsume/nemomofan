<script setup lang="ts">
const lists = ref([
  [{ title: '總召', list: [{ name: '臘肉', id: 'ykuilru1' }] },{ title: '企劃協作', list: [{ name: '艾路', id: 'bkb0408' }, { name: '凌晴', id: 'ymie0204' }, { name: '無面騎士restar', id: 'restar_rider' }] }],
  [
    { title: '網站及拼圖製作', list: [{ name: '夏目', id: '_natsume0304' }] },
    { title: '生日祝賀版設計', list: [{ name: 'Justin Huang', id: 'justin19980213' }, { name: 'ながと', id: 'nagato191109' }] }
  ],
  [
    { title: '影片剪輯', list: [{ name: '臘肉', id: 'ykuilru1' }, { name: '懷特', id: 'SxWhite3' }] },
    { title: '影片協助', list: [{ name: 'ながと', id: 'nagato191109' }, { name: '小亞', id: 'shinikonotDD' }] }
  ],
  [
    { title: '絆ノ奇跡、星座になれたら製作', list: [{ name: 'RavenClaw', id: 'RavenCl06474794' }, { name: '斑無', id: 'MadaraNashi' }] },
    { title: '混音師', list: [{ name: 'Teddy Wang @TAKEOFF MUSIC STUDIO', id: '' }] }
  ],
  [{ title: '繪師', list: [{ name: '熱晴', id: 'PA5510N0423' }, { name: '奶油醬油', id: 'CSS74134570' }] }]
])
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
        <div class="d-flex justify-content-center" v-for="cols in lists">
          <div id="listRow" v-for="col in cols">
            <h2 style="padding:0px 10px;">{{ col.title }}</h2>
            <div class="d-flex justify-content-center">
              <div id="listCol" v-for="data in col.list">
                <img :src="`/images/icon/${data.id}.jpg`" width="240" height="240">
                <NuxtLink id="name" class="nav-link" :to="'https://twitter.com/' + data.id" target="_blank"
                  :title="'@' + data.id">{{ data.name }}</NuxtLink>
              </div>
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
    padding: 3px 5px;
    margin: 10px;
  }

  #listCol {
    border-radius: 20px;
    margin: 5px;
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