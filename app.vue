<script setup lang="ts">
import tab_bar from '@/components/tab-bar.vue'

onMounted(() => {
  console.log(import.meta.env);
  
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
  <Title>太陽絆星觀測報告 - 涅默Nemesis 一周年紀念</Title>
  <Link href="site_icon.ico" rel="shortcut icon" type="image/x-icon" />
  <Meta content="text/html; charset=UTF-8" http-equiv="content-type" />
  <Meta content="width=device-width,initial-scale=1.0,user-scalable=yes,minimum-scale=1.0,maximum-scale=3.0"
    name="viewport" />
  <Meta content="TW" name="distribution" />
  <Meta content="夏目" name="author" />
  <Meta content="#dda0dd" name="theme-color" />
  <Meta content="website" property="og:type" />
  <Meta name="keywords" content="涅默Nemesis 涅默Nemesis一周年 絆星紀念活動 涅默Nemesis紀念活動" />
  <Meta name="robots" content="index, follow" />

  <Meta content="涅默Nemesis 一周年紀念活動" property="title" />
  <Meta content="涅默Nemesis 一周年紀念活動" property="og:title" />
  <Meta content="涅默Nemesis 一周年紀念活動" name="twitter:site" />
  <Meta content="涅默Nemesis 一周年紀念活動" property="og:site_name" />

  <Meta content="恭喜默默 一周年啦~~" property="description" />
  <Meta content="恭喜默默 一周年啦~~" property="og:description" />
  <Meta content="恭喜默默 一周年啦~~" name="twitter:description" />

  <Meta content="https://www.nemomofan.com/" property="og:url" />
  <tab_bar title="涅默Nemesis 一周年紀念活動" :routes="[
    { path: '/', text: '太陽絆星觀測報告' },
    { path: '/message', text: '絆星留言版' },
    { path: '/photo', text: '追星趣' },
    { path: '/about', text: '關於我們' }
  ]" />
  <main id="main">
    <NuxtPage />
  </main>
</template>
<style lang="scss">
@import url(https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.css);
////cwTeX 字體
@import url(https://fonts.googleapis.com/earlyaccess/cwtexkai.css); //標楷 cwTeXKai , serif;
@import url(https://fonts.googleapis.com/earlyaccess/cwtexyen.css); // 圓體 cwTeXYen , sans-serif;
@import url(https://fonts.googleapis.com/earlyaccess/cwtexfangsong.css); //仿宋 cwTeXFangSong, serif;
@import url(https://fonts.googleapis.com/earlyaccess/notosanstc.css); //明體 
// 思源字體
@import url(https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap); //黑體 Noto Sans TC
@import url(https://fonts.googleapis.com/css?family=Noto+Serif+TC&amp;display=swap); //宋體 Noto Serif TC

body {
  font-family: 'Noto Serif TC', sans-serif;
//  height: max(1080px, 100vh);
  background-position: center;
  background-attachment: fixed;
  background-image: url(https://www.nemomofan.com/bg-nemo.png);
}

#main {
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fff;
}
</style>