<script setup lang="ts">
var prop = defineProps({
  title: String,
  routes: Array<Itabbar>
})
var none = ref(false)
onMounted(() => {
  width()
  window.addEventListener("resize", width)
})
function width() {
  none.value = window.innerWidth > 650
}

interface Itabbar {
  display?: boolean
  path: string
  text: string
}
</script>
<template>
  <header class="fixed-top">
    <div id="tab-bar" class="position-absolute container-fluid">
      <a v-if="none" class="position-absolute" href="https://www.youtube.com/@NemesisXDFP" target="_blank">
        <img id="qrcode" src="/images/QR_code.png" title="https://www.youtube.com/@NemesisXDFP"></a>
      <h1 id="top-title" class="d-flex justify-content-center">{{ title }}</h1>
      <nav class="navbar navbar-nav-scroll navbar-expand justify-content-center">
        <ul class="navbar-nav nav-item" v-for="r in routes">
            <NuxtLink class="nav-link" :to="r.path">{{ r.text }}</NuxtLink>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style lang="scss">


#qrcode {
  padding-top: 10px;
  height: 110px;
}

#tab-bar {
  background-color: #0004;
}

#top-title {
  padding-top: 10px;
  color: #ff5177;
}

.nav-link {
  color: #ff5177;
  border-radius: 99em
}

.nav-link:hover, .nav-link:focus {
  color: #ff5177;
  background-color: #ffdee9;
}


</style>