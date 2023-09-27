<template>
  <Title>涅默Nemesis週年及活動特設網站</Title>

  <Meta content="涅默Nemesis|XDFP" property="title" />
  <Meta content="涅默Nemesis|XDFP" property="og:title" />

  <Meta content="涅默Nemesis週年及活動特設網站" property="og:site_name" />

  <Meta content="一周年公車預慶祝開跑" property="description" />
  <Meta content="一周年公車預慶祝開跑" property="og:description" />
  <Meta content="一周年公車預慶祝開跑" name="twitter:description" />

  <Meta content="https://www.nemomofan.com/" property="og:url" />

  <div id="out-tab" class="d-flex justify-content-between">
    <NuxtLayout name="tabbar">
      <template #mark>
        <img src="/images/mark.png" height="80" />
      </template>
      <template #bar>
        <div class="d-flex justify-content-center">
          <Dropdown label="首頁" :options="[{ href: '/', text: '首頁' }]" />
          <Dropdown label="企劃" :options="[{ href: '/1st', text: '一周年企劃' }]" />
          <Dropdown label="官方連結" :options="[
            { href: 'https://www.youtube.com/@NemesisXDFP', text: 'Youtube' },
            { href: 'https://twitter.com/NemesisXdfp', text: 'Twitter' },
            { href: 'https://twitch.tv/nemesisxdfp', text: 'Twitch' },
            { href: 'https://instagram.com/nemomoisgood', text: 'Instagram' },
            { href: 'https://discord.gg/springfish', text: '春魚DC' },
            { href: 'https://reurl.cc/5pnVrR', text: '綠界' }]" />
          <Dropdown label="關於" :options="[{ href: 'https://discord.gg/s6TNgRZ5Bh', text: 'Discord' }]" />
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
#out-tab {
  background-color: bisque;
  position: relative;
  padding: 3px 1vw;
}
</style>