<script setup lang="ts">
var prop = defineProps({
  title: String,
  routes: Array<Itabbar>
})

interface Itabbar {
  display?: boolean
  path: string
  text: string
}
</script>
<template>
  <header class="fixed-top">
    <div id="tab-bar" class="position-absolute container-fluid">
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
  margin: 1px;
  color: #ff5177;
  border-radius: 99em
}

@media (max-width: 500px) {
  .nav-link {
    font-size: small;
  }
}

.nav-link:hover,
.nav-link:focus {
  color: #ff5177;
  background-color: #ffdee9;
}
</style>