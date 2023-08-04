<script setup lang="ts">
import img_Meta from "@/components/img_Meta.vue"
const messages = ref<UserMessage[]>();
const id = ref<number>(-1)
onMounted(() => {
  var scrollY = window.scrollY
  window.addEventListener("scroll", resizeHandle)
  function resizeHandle() {
    if (id.value > -1) scrollY = window.scrollY
    else window.scrollY = scrollY
  }
})
function CardClick(i: number) {
  $('body').css('overflow', i > -1 ? 'hidden' : '');
}
var { data } = await useFetch('/api/message')
messages.value = data.value || []

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
  <img_Meta />
  <div class="d-flex justify-content-center">
    <div class="row row-cols-auto" style="width: 95%; justify-content: center !important;">
      <div style="padding: 5px; justify-content:left !important" v-for="(data, i) in messages">
        <div id="card-s1" @click="() => CardClick(id = i)">
          <div id="card-bg" class="d-flex flex-column justify-content-between" v-if="id != i">
            <p>{{ data.text }}</p>
            <p id="username">{{ data.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="id > -1" id="card-all" class="fixed-top" @click="() => CardClick(id = -1)">
      <div id="card-s2" style="position: fixed;">
        <BigCard :data="messages![id]" />
      </div>
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
    $height: 200px;
    width: calc(350px * $size);
    height: $height;

    #card-bg {
      width: 100%;
      height: calc($height * $size);
      padding: calc(10px * $size);
      font-size: calc(16px * $size);

      color: brown;
      font-style: italic;
      font-family: '辰宇落雁';
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