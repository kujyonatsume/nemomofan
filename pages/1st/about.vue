<script setup lang="ts">
const lists = useFetch("/api/list").data
</script>
<template>
  <Title>關於我們 - 涅默Nemesis一周年紀念活動</Title>

  <Meta content="關於我們 - 涅默Nemesis一周年紀念活動" property="title" />
  <Meta content="關於我們 - 涅默Nemesis一周年紀念活動" property="og:title" />
  <Meta content="關於我們 - 涅默Nemesis一周年紀念活動" name="twitter:site" />

  <Meta content="關於我們 - 涅默Nemesis一周年紀念活動" property="og:site_name" />
  
  <Meta content="一周年企劃組工作分配 歡迎加入我們的非官方DC粉絲群 : https://discord.gg/nemesissuki" property="description" />
  <Meta content="一周年企劃組工作分配 歡迎加入我們的非官方DC粉絲群 : https://discord.gg/nemesissuki" property="og:description" />
  <Meta content="一周年企劃組工作分配 歡迎加入我們的非官方DC粉絲群 : https://discord.gg/nemesissuki" name="twitter:description" />

  <Meta content="https://www.nemomofan.com/images/card-x.jpg" property="og:image" />

  <Meta content="https://www.nemomofan.com/1st/about" property="og:url" />

  <div id="about" class="d-flex justify-content-center">
    <div id="auto-row" class="row row-cols-auto">
      <div id="listRow" v-for="(list, key) in lists">
        <h2>{{ key }}</h2>
        <div class="d-flex justify-content-center">
          <div id="listCol" v-for="data in list">
            <img :src="`/images/icon/${data[1]}.jpg`" width="200" height="200">
            <NuxtLink id="name" class="nav-link" :to="'https://twitter.com/' + data[1]" target="_blank"
              :title="'@' + data[1]">{{ data[0] }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
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