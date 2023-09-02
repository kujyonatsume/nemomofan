<script setup lang="ts">
import tab_bar from '@/components/tab-bar.vue'

onMounted(() => {
  ResetfloorPos()
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', ResetfloorPos)
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
  <footer id="floor" class="text-center position-absolute">
    Copyright© 2023 九条夏目 | <a href="https://github.com/kujyonatsume/nemomofan" target="_blank"> <svg
        xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-github">
        <path
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>原始碼</a>
  </footer>
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