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

var route = ref(prop.routes);

const new_title = ref(prop.title);
interface Itabbar {
  display?: boolean
  path: string
  text: string
}
</script>
<template>
  <header class="fixed-top">
    <strong id="tab-bar" class="position-absolute container-fluid">
      <a v-if="none" class="position-absolute" href="https://www.youtube.com/@NemesisXDFP" target="_blank">
        <img id="qrcode" src="/images/QR_code.png" title="https://www.youtube.com/@NemesisXDFP"></a>
      <h1 id="top-title" class="d-flex justify-content-center">{{ new_title }}</h1>
      <nav class="navbar navbar-expand justify-content-center">
        <ul class="navbar-nav navbar-nav-scroll" v-for="r in route">
          <li class="nav-item">
            <NuxtLink :id="r.display ? 'click' : ''" class="nav-link" :to="r.path"
              @click="() => { routes?.forEach(x => x.display = false); r.display = true }">{{ r.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </strong>
  </header>
</template>
<style lang="scss">

#qrcode {
    padding-top: 10px;
    height: 110px;
}

#tab-bar {
    font-family: 'Noto Sans TC', serif;
    background-color: #0004;
}

#top-title {
    padding-top: 10px;
    color: #fc5b5b;
}

#click {
    color: #fff !important;
    background-color: #ff8df0;
}

.nav-link {
    color: #ff5177;
    border-radius: 99em
}

.nav-link:hover {
    color: #fff;
    background-color: #ff8df0;
}
</style>