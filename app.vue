<script setup lang="ts">
import tab_bar from '@/components/tab-bar.vue'
const ds = ref('')
const title = ref('一周年倒數計時')
const is926 = ref(false)
getdate()
onMounted(() => {
  //  if (import.meta.env.DEV) alert(document.body.clientHeight + ',' + document.body.clientWidth)
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  setInterval(getdate, 1000)
})
function getdate() {
  var date = new Date('2023/9/26').getTime() - Date.now()
  if(is926.value = date < 0) title.value = '涅默Nemesis 一周年紀念'
  const d = new Date(date);
  ds.value = `${d.getUTCDate()} 天 ${d.getUTCHours()} 小時 ${d.getUTCMinutes()} 分鐘 ${d.getUTCSeconds()} 秒`

}
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
function handleResize() {
  if ($('body').width()! < 650) {
    $('body').css('background-position-x', `-220px`);
  }
  else if ($('body').width()! < 870) {
    $('body').css('background-position-x', `${$('body').width()! - 870}px`);
  }
  else {
    $('body').css('background-position-x', 'none');
  }
}
</script>
<template>
  <Title>{{ title }}</Title>
  <Link href="site_icon.ico" rel="shortcut icon" type="image/x-icon" />
  <Meta content="text/html; charset=UTF-8" http-equiv="content-type" />
  <Meta content="width=device-width,initial-scale=1.0,user-scalable=yes,minimum-scale=1.0,maximum-scale=3.0"
    name="viewport" />
  <Meta content="TW" name="distribution" />
  <Meta content="夏目" name="author" />
  <Meta content="website" property="og:type" />

  <Meta content="#dda0dd" name="theme-color" />

  <tab_bar v-if="is926" title="涅默Nemesis 一周年紀念活動" :routes="[
    { path: '/video', text: '太陽伴星觀測宣傳片' },
    { path: '/message', text: '絆星留言版' },
    { path: '/photo', text: '追星趣' },
    { path: '/about', text: '關於我們' }
  ]" />
  <main id="main">
    <NuxtPage v-if="is926" />
    <div v-else id="timer">
      <h2>倒數</h2>
      <h1>{{ ds }}</h1>
    </div>
  </main>
</template>
<style lang="scss">
body {
  font-family: 'SetoFont', 'Noto Serif TC', sans-serif;
  background-size: cover;
  background-position: none;
  background-attachment: fixed;
  background-image: url(/images/2.jpg);
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}

#timer {
  position: relative;
  top: 25vh;
  width: 100%;
  height: 50vh;
  background-color: #ffbebe85;
  text-align: center;
  font-size: xx-large;
  h2 {
    position: relative;
    top: 5vh;
    font-size: 72px;
  }
  h1 {
    position: relative;
    top: 15vh;
  }
}

body::-webkit-scrollbar {
  width: 0 !important;
}

#main {
  padding-top: 10px;
  padding-bottom: 10px;
}

#floor {
  color: #ffbebe;
  background-color: rgb(46, 0, 0);
  padding: 5px;
  width: 100%;
}

a,
a:hover {
  text-decoration: none;
  color: #ffbebe;
}
</style>