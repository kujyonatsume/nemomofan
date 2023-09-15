<script setup lang="ts">
const messages = ref((await useFetch('/api/message')).data)
const id = ref<number>(-1)
onMounted(() => {
  var scrollY = window.scrollY
  window.addEventListener("scroll", scrollHandle)
  function scrollHandle() {
    if (id.value > -1) scrollY = window.scrollY
    else window.scrollY = scrollY
  }
})

function CardClick(i: number) {
  $('body').css('overflow', i > -1 ? 'hidden' : '');
}

function BigCardMount() {
  resizeHandle()
  window.addEventListener('resize', resizeHandle)
  function resizeHandle() {
    var bigcard = $('#card-s2');
    var cardbg = $('#card-all');
    if (!bigcard) return
    bigcard.css('top', ((cardbg.height()! - bigcard.outerHeight(true)!) / 2) + 'px')
      .css('left', ((cardbg.width()! - bigcard.outerWidth(true)!) / 2) + 'px')
  }
}

</script>
<template>
  <Title>太陽伴星觀測記錄 - 涅默Nemesis一周年紀念活動</Title>

  <Meta content="太陽伴星觀測記錄 - 涅默Nemesis一周年紀念活動" property="title" />
  <Meta content="太陽伴星觀測記錄 - 涅默Nemesis一周年紀念活動" property="og:title" />
  <Meta content="太陽伴星觀測記錄 - 涅默Nemesis一周年紀念活動" name="twitter:site" />

  <Meta content="這裡記錄著我們所觀測到的她 每一次的觀測都帶給我們不同的心情~" property="description" />
  <Meta content="這裡記錄著我們所觀測到的她 每一次的觀測都帶給我們不同的心情~" property="og:description" />
  <Meta content="這裡記錄著我們所觀測到的她 每一次的觀測都帶給我們不同的心情~" name="twitter:description" />


  <Meta content="https://www.nemomofan.com/message" property="og:url" />

  <div class="row justify-content-center">
    <div id="card-s1" v-for="(data, i) in messages" @click="() => CardClick(id = i)">
      <BigCard :data="data" :mount="false" v-if="id != i" />
    </div>
  </div>
  <div v-if="id > -1" id="card-all" class="fixed-top" @click="() => CardClick(id = -1)">
    <div id="card-s2" style="position: fixed;">
      <BigCard :data="messages![id]" @vue:mounted="() => BigCardMount()" />
    </div>
  </div>
</template>
<style lang="scss">
#card-all {
  width: 100vw;
  height: 100vh;
  z-index: 1031;
  background-color: #0004;
}

@mixin cardsize($height, $width, $font: 16px) {
  @for $size from 1 through 2 {

    //#card
    #card-s#{$size} {
      @if $size ==1 {
        margin: 5px;
      }

      padding: unset;
      width: calc($width * $size);
      height: calc($height * $size);

      #card-bg {
        width: 100%;
        height: 100%;
        padding: calc(10px * $size);
        font-size: calc($font * $size);

        color: #ff5177;
        background-color: #ffdee9;
        background-repeat: no-repeat;
        background-image: url(/images/bg-card.png);

        background-position-y: calc(($height - 85px) * $size);
        background-size: calc(75px * $size);
        border-radius: calc(10px * $size);

        #username {
          text-align: center;
          position: relative;
        }
      }
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