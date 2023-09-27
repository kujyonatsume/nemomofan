<script setup lang="ts">

defineProps({
  title: String,
  routes: Array<Itabbar>,
})

interface Itabbar {
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
          <NuxtLink id="pagelink" class="nav-link" :to="r.path">{{ r.text }}</NuxtLink>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style lang="scss">
#tab-bar {
  background-color: #0004;
}

#top-title {
  padding-top: 10px;
  color: #ff5177;
}

#pagelink {
  font-size: 18px;
  margin: 1px;
  color: #ff5177;
  border-radius: 99em
}

@media (max-width: 500px) {
  #pagelink {
    font-size: small;
  }
}

#pagelink:hover,
#pagelink:focus {
  color: #ff5177;
  background-color: #ffdee9;
}
</style>