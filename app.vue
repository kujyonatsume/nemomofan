<script setup lang="ts">
import tab_bar from '@/components/tab-bar.vue'
const ds = ref()
const is926 = ref(false)

onBeforeMount(() => {
  is926.value = /localhost|([0-9]{1,3}.?){4}|beta/.test(location.hostname)
  console.log(is926.value);
  window.addEventListener('scroll', handleScroll)
  var timer: NodeJS.Timer
  const interval = {
    start: () => timer = setInterval(getdate, 1000),
    clear: () => clearInterval(timer)
  }

  if (!is926.value) {
    interval.start()
  }

  function getdate() {
    var date = Date.parse('2023/9/26 20:00:00') - Date.now()
    is926.value = date < 1
    if (is926.value) {
      interval.clear()
    } else {
      const d = new Date(date);
      ds.value = `${d.getUTCDate() - 1} 天 ${d.getUTCHours()} 小時 ${d.getUTCMinutes()} 分鐘 ${d.getUTCSeconds()} 秒`
    }
  }
})

function handleScroll() {
  var $tab_bar = $('#tab-bar'),
    scrollPos = $(window).scrollTop(),
    title_h = $('#top-title').outerHeight(true)!
  if (scrollPos == 0) {
    $tab_bar.animate({ top: '0px' });
  }
  else if ($tab_bar.css('top') == '0px') {
    $tab_bar.animate({ top: -title_h + 'px' });
  }
}

</script>
<template>
  <Title>涅默Nemesis 一周年紀念</Title>
  <Link href="site_icon.ico" rel="shortcut icon" type="image/x-icon" />
  <Meta content="text/html; charset=UTF-8" http-equiv="content-type" />
  <Meta content="width=device-width,initial-scale=1.0,user-scalable=yes,minimum-scale=1.0,maximum-scale=3.0"
    name="viewport" />
  <Meta content="TW" name="distribution" />
  <Meta content="夏目" name="author" />
  <Meta content="website" property="og:type" />

  <Meta content="#dda0dd" name="theme-color" />

  <Head v-if="!is926">
    <Meta content="涅默Nemesis一周年紀念活動" property="title" />
    <Meta content="涅默Nemesis一周年紀念活動" property="og:title" />
    <Meta content="涅默Nemesis一周年紀念活動" name="twitter:site" />
    <Meta content="涅默Nemesis一周年紀念活動" property="og:site_name" />

    <Meta content="涅默一周年 倒數計時" property="description" />
    <Meta content="涅默一周年 倒數計時" property="og:description" />
    <Meta content="涅默一周年 倒數計時" name="twitter:description" />

    <Meta content="https://www.nemomofan.com/" property="og:url" />
  </Head>

  <Body v-if="is926" id="open">
    <tab_bar title="涅默Nemesis 一周年紀念活動" :routes="[
      { path: '/video', text: '觀測總集' },
      { path: '/photo', text: '觀測報告' },
      { path: '/message', text: '觀測記錄' },
      { path: '/about', text: '關於我們' }
    ]" />

    <main>
      <div id="page">
        <NuxtPage />
      </div>
    </main>
    <floor />
  </Body>

  <Body v-else id="close">
    <div id="timer" class="d-flex justify-content-center">
      <img src="">
      <div>
        <h2>倒數</h2>
        <h1>{{ ds }}</h1>
      </div>
      <img src="">
    </div>
  </Body>
</template>
<style lang="scss">
body {
  font-family: 'SetoFont', 'Noto Serif TC', sans-serif;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}

body::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
}

#close {
  background-image: url(/images/bg-close.jpg);
}

#open {
  background-image: url(/images/bg-open.jpg);
}

#timer {
  position: relative;
  top: 25vh;
  height: 50vh;
  text-align: center;
  font-size: xx-large;
  background-color: #ffbebe85;

  h2 {
    padding-top: 10vh;
    padding-bottom: 10vh;
    font-size: 72px;
  }
}

main {
  min-height: 100vh;
  padding-top: 150px;

  #page {
    margin-bottom: 34px;
  }
}

a,
a:hover {
  text-decoration: none;
  color: #ffbebe;
}
</style>