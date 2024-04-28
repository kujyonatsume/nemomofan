<script setup lang="ts">
import YouTubePlayer from 'yt-player';
useHead({
  script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
})

const data = ref([
  'QQ1o6L_RaV4', 'dglXSGJq_iE',
  '706rIXOqEyE', 'fncHMihCVNQ',
  'XPywHJ4hN5w', 'g4m6c9Dkqz4',
  'n8E3AcSubOQ', 'fdnSBVHfyms',
  'sonNnxfNGp4', 'OX9wKg3hSCM',
  'iDgfP_-uKx4', 'CaKBHMQUF48',
  'PW0jFBllohs', 'T2yBMnb8AXI',
  'w93Psf-YAcA', 'yDrRTLSUL1Y',
  'kufamSiawTs', 'cZvpUUe2NSM',
  'YWIj36Z_FNU', 'JhdWcqhlFuI',
  'koBPZDLhpTs', 'vBAOLhEWS0M',
  '8elK5yqRGUU', 'BtBvHmGUgkQ',
  'EawFVmD59_M'
])

const barStyle = ref({ width: '0px' })

onMounted(() => {
  //  var player = new YouTubePlayer('#YouTubePlayer', { width: 1200, height: 675, related: false, controls: false })
  //
  //  var bar = document.getElementById('music-progress-bar')!
  //
  //  
  //
  //  selectlist()
  //  function selectlist() {
  //    player.load(data.value[Math.floor(Math.random() * data.value.length)], true)
  //    bar.setAttribute('aria-valuemax',`${player.getDuration()}`)
  //  }
  //  
  //  console.log(data.value);
  //
  //  player.on('ended', selectlist)
  //  player.on('timeupdate', sec => barStyle.value.width = `${sec / player.getDuration() * 100}%`)
})
</script>
<template>
  <Title>涅默Nemesis週年及活動特設網站</Title>
  <Link href="site.ico" rel="shortcut icon" type="image/x-icon" />
  <Meta content="涅默Nemesis|XDFP" property="title" />
  <Meta content="涅默Nemesis|XDFP" property="og:title" />

  <Meta content="涅默Nemesis週年及活動特設網站" property="og:site_name" />

  <Meta content="涅默Nemesis小檔案" property="description" />
  <Meta content="涅默Nemesis小檔案" property="og:description" />
  <Meta content="涅默Nemesis小檔案" name="twitter:description" />
  <Meta content="https://www.nemomofan.com/" property="og:url" />

  <div id="out-tab" class="d-flex justify-content-between">
    <img src="/images/mark.png" height="80" />
    <div class="d-flex justify-content-center">
      <Dropdown label="首頁" :options="[{ href: '/', text: '首頁' }, { href: '/', text: '個人介紹與設定圖' }]" />
      <Dropdown label="企劃" :options="[{ href: '/1st', text: '一周年企劃' }, { href: '/birth2024', text: '2024生日企劃' }]" />
      <Dropdown label="官方連結" :options="[
        { href: 'https://www.youtube.com/@NemesisXDFP', text: 'Youtube' },
        { href: 'https://twitter.com/NemesisXdfp', text: 'Twitter' },
        { href: 'https://twitch.tv/nemesisxdfp', text: 'Twitch' },
        { href: 'https://instagram.com/nemomoisgood', text: 'Instagram' },
        { href: 'https://discord.gg/springfish', text: '春魚DC' },
        { href: 'https://reurl.cc/5pnVrR', text: '綠界' }]" />
      <Dropdown label="其他資訊" :options="[
        { href: 'https://discord.gg/s6TNgRZ5Bh', text: '絆星DC群' },
        { href: 'https://github.com/kujyonatsume', text: 'Github' },
        { href: 'https://twitter.com/_natsume0304', text: 'Twitter' }]" />
    </div>
  </div>
  <div id="bg-opacity" class="container-fluid">

    <div class="d-flex justify-content-center">
      <div id="broad">
        <h1>因為有你才能存在的太陽伴星</h1>
        <div class="d-flex justify-content-center">
          <img src="https://pbs.twimg.com/media/Fdu5DMiaIAEVFL5.jpg">
          <div style="min-width: 800px; max-width: 50vw; padding:0px 100px;">
            <p><br><br>
              傳說中太陽有一顆伴星，名為涅默西斯<br>
              可是多年來天文學家遍尋不著。<br>
              因為太陽產生巨大的光芒，<br>
              涅默西斯永遠被遮蔽其中，<br>
              逐漸失去自己的光彩。<br>
              寂寞的時候會唱出沒有任何生物聽得到的音波，<br>
              但得不到回應顯得更加寂寞。<br>
              接近喪失自我的涅默，<br>
              突然接收到地球無數的奇怪訊號。<br>
              並花了71年311天又7個小時的時間下定決心離開太陽...<br>
              (只是選擇性障礙，不是龜毛。)<br>
              獨自探索著地球上新鮮的事物<br>
              看到多采多姿的人類生活，卻無法融入其中<br>
              為了能結交更多的朋友、讓更多人聽見自己的聲音。<br>
            </p>
            <hr>
            <p>
              <strong>
                鼓起勇氣將自身精神體數位化，<br>
                進入網路以及元宇宙的世界，<br>
                以獨特的模樣來與人類見面。<br>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <div id="broad">
        <h1>宇宙一番ネメシスです</h1>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner" style="width: 1200px">
            <div class="carousel-item active">
              <img src="https://pbs.twimg.com/media/FdovJ6BUAAAv4Eb.jpg" class="d-block">
            </div>
            <div class="carousel-item">
              <img src="https://pbs.twimg.com/media/FdrNlxaacAAuq0_.jpg" class="d-block">
            </div>
            <div class="carousel-item">
              <img src="https://pbs.twimg.com/media/FdrLpVaacAA8wyZ.jpg" class="d-block">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <!--

    <div class="d-flex justify-content-center">
      <div id="broad">
        <div class="d-flex justify-content-center">
          <div>
            <div id="YouTubePlayer" width="1200" height="675">

            </div>
            <div class="progress" style="height: 10px;">
              <div id="music-progress-bar" class="progress-bar bg-danger" role="progressbar" :style="barStyle"></div>
            </div>
          </div>
          <div>
            <p v-for="id in data">{{ id }}</p>
          </div>
        </div>
      </div>
    </div>
    
    -->
  </div>
  <!--<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>-->
</template>
<style lang="scss">
body {
  font-family: 'SetoFont', 'Noto Serif TC', sans-serif;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-image: url(http://www.nemomofan.com/images/bg.png);
}

#bg-opacity {
  background-color: #ffffffa0;
  min-height: 100vh;
}

#out-tab {
  background-color: bisque;
  position: relative;
  padding: 3px 1vw;
}

#broad {
  padding: 50px;
  margin: 10px;
  background-color: #ff8e8ea0;
  border-radius: 5rem;
  font-size: 36px;
  text-align: center;
}
</style>
