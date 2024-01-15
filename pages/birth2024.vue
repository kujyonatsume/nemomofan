<script setup lang="ts">

const dateline = ref(false)
const datestr = ref('')
onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
  var first_time = Date.parse('2024/2/12 20:00:00') - Date.now()
  var timerfn = getdate
  if (first_time <= 60000) {
    timerfn = cnt60
  }
  var timer: NodeJS.Timer

  const interval = {
    start: () => timer = setInterval(timerfn, 1000),
    clear: () => clearInterval(timer)
  }

  if (!dateline.value) {
    interval.start()
  }
  function cnt60() {
    first_time -= 1
    dateline.value = first_time < 1 || document.documentURI.includes("?true")
    if (dateline.value) {
      interval.clear()
    } else {
      datestr.value = `${first_time} 秒`
    }
  }
  
  function getdate() {
    var date = Date.parse('2024/2/12 20:00:00') - Date.now()
    dateline.value = date < 1 || document.documentURI.includes("?true")
    if (dateline.value) {
      interval.clear()
    } else {
      date = date / 1000
      var days = Math.floor(date / 86400);
      var hours = Math.floor((date % (86400)) / 3600);
      var minutes = Math.floor((date % 3600) / 60);
      var seconds = Math.floor(date % (60));
      datestr.value = `${days} 天 ${hours} 小時 ${minutes} 分 ${seconds} 秒`
      
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
  <Title>涅默Nemesis 2024生日企劃</Title>

  <Link href="site_icon.ico" rel="shortcut icon" type="image/x-icon" />

  <Meta content="涅默Nemesis 2024生日企劃" property="og:site_name" />

  <Meta content="涅默Nemesis 一周年紀念倒數" property="title" />
  <Meta content="涅默Nemesis 一周年紀念倒數" property="og:title" />

  <Meta content=2024生日企劃 property="description" />
  <Meta content=2024生日企劃 property="og:description" />

  <Meta
    content="https://static.wixstatic.com/media/5d16f3_12f15efdd8aa4081b45c142c0da5f0e9%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/5d16f3_12f15efdd8aa4081b45c142c0da5f0e9%7Emv2.jpg"
    property="og:image" />
  <Meta
    content="https://static.wixstatic.com/media/5d16f3_12f15efdd8aa4081b45c142c0da5f0e9%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/5d16f3_12f15efdd8aa4081b45c142c0da5f0e9%7Emv2.jpg"
    property="twitter:image" />

  <Meta content="http://www.nemomofan.com/1st" property="og:url" />

  <Body v-if="dateline" id="open">

    <tab-bar title="涅默Nemesis 2024生日企劃" :routes="[
      { path: '/birth2024', text: '2024生日紀念影片' },
      { path: '/birth2024/puzzle', text: '拼圖' },
      { path: '/birth2024/message', text: '留言板' },
      { path: '/birth2024/about', text: '關於我們' }
    ]" />
    <main>
      <div id="page">
        <NuxtPage />
      </div>
    </main>
    <floor />
  </Body>

  <Body v-else id="close">
    <div id="timer">
      <h2>倒數</h2>
      <p>{{ datestr }}</p>
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

#open::-webkit-scrollbar {
  display: none;
  width: 0;
}

#open {
  background-image: url(/images/birth.png);
}

#close {
  background-image: url(/images/block-birth-count.png);
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