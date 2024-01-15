<script setup lang="ts">

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
  /*
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
  */
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
  <Title>涅默Nemesis 一周年紀念活動</Title>

  <Link href="site_icon.ico" rel="shortcut icon" type="image/x-icon" />

  <Meta content="涅默Nemesis 一周年紀念活動" property="og:site_name" />
  
  <Meta content="涅默Nemesis 一周年紀念倒數" property="title" />
  <Meta content="涅默Nemesis 一周年紀念倒數" property="og:title" />


  <Meta content=一周年紀念活動 property="description" />
  <Meta content=一周年紀念活動 property="og:description" />
  
  <Meta content="https://static.wixstatic.com/media/5d16f3_12f15efdd8aa4081b45c142c0da5f0e9%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/5d16f3_12f15efdd8aa4081b45c142c0da5f0e9%7Emv2.jpg" property="og:image" />
  <Meta content="https://static.wixstatic.com/media/5d16f3_12f15efdd8aa4081b45c142c0da5f0e9%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/5d16f3_12f15efdd8aa4081b45c142c0da5f0e9%7Emv2.jpg" property="twitter:image" />

  <Meta content="http://www.nemomofan.com/1st" property="og:url" />

  <Body id="open">

    <tab-bar title="涅默Nemesis 一周年紀念活動" :routes="[
      { path: '/1st', text: '觀測總集' },
      { path: '/1st/photo', text: '觀測報告' },
      { path: '/1st/message', text: '觀測感言' },
      { path: '/1st/about', text: '關於我們' }
    ]" />
    <main>
      <div id="page">
        <NuxtPage />
      </div>
    </main>
    <floor />
  </Body>
  <!--
  <Body v-else id="close">
    <div id="timer" class="d-flex justify-content-center">
      <div>
        <h2>倒數</h2>
        <p>{{ ds }}</p>
        <iframe id="video" src="https://www.youtube.com/embed/LgTR3GCxLIM?si=7nZzIV6OzVnVcdCi"
          style="width:480px; height:270px"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowfullscreen></iframe>
      </div>
      <img id="wedding" src="/images/wedding.png" style="padding-left: 10px;">
    </div>
  </Body>
  -->
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

#open::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
}

#close {
  background-image: url(/images/bg-close.jpg);
}

#timer {
  position: relative;
  top: 25vh;
  height: 50vh;
  text-align: center;
  font-size: xx-large;
  background-color: #ffbebe85;

  h2 {
    font-size: 72px;
  }
}

#open {
  background-image: url(/images/bg-open.jpg);
}

main {
  min-height: 100vh;
  padding-top: 150px;

  #page {
    margin-bottom: 34px;
  }
}

@media (max-width: 1000px) {
  #wedding {
    width: 400px;
    height: 400px;
    margin-top: 45px;
  }
}

@media (max-width: 900px) {
  #wedding {
    width: 300px;
    height: 300px;
    margin-top: 125px;
  }
}

@media (max-width: 800px) {
  #wedding {
    display: none;
  }
}

a,
a:hover {
  text-decoration: none;
  color: #ffbebe;
}
</style>