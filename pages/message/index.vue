<script setup lang="ts">
const messages = ref<UserMessage[]>();
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
var { data } = await useFetch('/api/message')
messages.value = data.value || []

function BigCardMount() {
  resizeHandle()
  window.addEventListener('resize', resizeHandle)
  function resizeHandle() {
    var bigcard = $('#card-s2');
    var cardbg = $('#card-all');
    if (!bigcard) return
    bigcard.css('top', ((cardbg.height()! - bigcard.height()!) / 2) + 'px').css('left', ((cardbg.width()! - bigcard.width()!) / 2) + 'px')
  }
}

</script>
<template>
  <Title>絆星留言板 - 涅默Nemesis一周年紀念活動</Title>

  <Meta content="絆星留言板 - 涅默Nemesis一周年紀念活動" property="title" />
  <Meta content="絆星留言板 - 涅默Nemesis一周年紀念活動" property="og:title" />
  <Meta content="絆星留言板 - 涅默Nemesis一周年紀念活動" name="twitter:site" />
  <Meta content="涅默Nemesis一周年紀念活動" property="og:site_name" />

  <Meta content="快來和我們一起留言恭喜默默一周年吧~" property="description" />
  <Meta content="快來和我們一起留言恭喜默默一周年吧~" property="og:description" />
  <Meta content="快來和我們一起留言恭喜默默一周年吧~" name="twitter:description" />

  <Meta content="https://www.nemomofan.com/message" property="og:url" />

  <div class="row row-cols-auto justify-content-center">
    <div id="card-s1" v-for="(data, i) in messages" @click="() => CardClick(id = i)">
      <BigCard :data="data" :mount="false" v-if="id != i" />
    </div>
  </div>
  <div v-if="id > -1" id="card-all" class="fixed-top" @click="() => CardClick(id = -1)">
    <div id="card-s2" style="position: fixed;">
      <BigCard :data="messages![id]" @vue:mounted="() => BigCardMount()" />
    </div>
  </div>
  <floor />
</template>
<style lang="scss">
#card-all {
  width: 100vw;
  height: 100vh;
  z-index: 1031;
  background-color: #0004;
}

//#card
@for $size from 1 through 2 {
  #card-s#{$size} {
    $height: 250px;
    $width: 350px;
    
    @if $size == 1 {
      margin: 5px;
    }

    padding: unset;
    width: calc($width * $size);
    height: $height;

    #card-bg {
      width: 100%;
      height: calc($height * $size);
      padding: calc(10px * $size);
      font-size: calc(16px * $size);

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
        margin-top: 10px;
      }
    }
  }
}
</style>