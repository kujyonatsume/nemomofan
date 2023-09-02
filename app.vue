<script setup lang="ts">
import tab_bar from '@/components/tab-bar.vue'

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
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
  <Title>太陽伴星觀測報告 - 涅默Nemesis 一周年紀念</Title>
  <Link href="site_icon.ico" rel="shortcut icon" type="image/x-icon" />
  <Meta content="text/html; charset=UTF-8" http-equiv="content-type" />
  <Meta content="width=device-width,initial-scale=1.0,user-scalable=yes,minimum-scale=1.0,maximum-scale=3.0"
    name="viewport" />
  <Meta content="TW" name="distribution" />
  <Meta content="夏目" name="author" />
  <Meta content="website" property="og:type" />
  <Meta name="keywords" content="涅默Nemesis 涅默Nemesis一周年 絆星紀念活動 涅默Nemesis紀念活動" />
  <Meta name="robots" content="index, follow" />

  <Meta content="#dda0dd" name="theme-color" />

  <Meta content="涅默Nemesis 一周年紀念活動" property="og:site_name" />

  <Meta content="涅默Nemesis 一周年紀念活動" property="title" />
  <Meta content="涅默Nemesis 一周年紀念活動" property="og:title" />
  <Meta content="涅默Nemesis 一周年紀念活動" name="twitter:site" />

  <Meta content="恭喜默默 一周年啦~~" property="description" />
  <Meta content="恭喜默默 一周年啦~~" property="og:description" />
  <Meta content="恭喜默默 一周年啦~~" name="twitter:description" />

  <Meta content="https://www.nemomofan.com/" property="og:url" />
  <tab_bar title="涅默Nemesis 一周年紀念活動" :routes="[
    { path: '/', text: '太陽伴星觀測報告' },
    { path: '/message', text: '絆星留言版' },
    { path: '/photo', text: '追星趣' },
    { path: '/about', text: '關於我們' }
  ]" />
  <main id="main">
    <NuxtPage />
  </main>

</template>
<style lang="scss">
body {
  font-family: 'SetoFont', 'Noto Serif TC', sans-serif;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-image: url(/images/2.jpg);
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
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

a, a:hover {
  color: #ffbebe;
}

</style>