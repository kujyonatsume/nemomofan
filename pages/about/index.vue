<script setup lang="ts">
const lists = useFetch("/api/list").data
const id = ref<number>(-1)
onMounted(() => {
  var scrollY = window.scrollY
  window.addEventListener("scroll", resizeHandle)
  function resizeHandle() {
    if (id.value > -1) scrollY = window.scrollY
    else window.scrollY = scrollY
  }
})
</script>
<template>
  <Title>關於我們 - 涅默Nemesis一周年紀念活動</Title>
  <Meta property="og:description" content="關於企劃組成員" />

  <Meta content="關於我們 - 涅默Nemesis一周年紀念活動" property="title" />
  <Meta content="關於我們 - 涅默Nemesis一周年紀念活動" property="og:title" />
  <Meta content="關於我們 - 涅默Nemesis一周年紀念活動" name="twitter:site" />
  <Meta content="涅默Nemesis一周年紀念活動" property="og:site_name" />

  <Meta content="企劃組成員及工作分配" property="description" />
  <Meta content="企劃組成員及工作分配" property="og:description" />
  <Meta content="企劃組成員及工作分配" name="twitter:description" />

  <Meta content="https://www.nemomofan.com/about" property="og:url" />

  <div id="about" class="d-flex justify-content-center">
    <div id="auto-row" class="row row-cols-auto">
      <div id="listRow" v-for="(list, key) in lists">
        <h2>{{ key }}</h2>
        <div class="d-flex justify-content-center">
          <div id="listCol" v-for="data in list">
            <img :src="`/images/icon/${data[0]}.jpg`" width="200" height="200">
            <p id="name">{{ data[0] }}</p>
            <a :href="'https://twitter.com/' + data[1]">@{{ data[1] }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <floor />
</template>
<style lang="scss">
#about {
  color: #ff5177;
  top: 20%;
  left: 25%;
  width: 50%;
  position: relative;

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
    }
  }
}
</style>