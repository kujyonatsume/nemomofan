<script setup lang="ts">
var prop = defineProps({
  title: String,
  routes: Array<Itabbar>
})
const new_title = ref(prop.title);
interface Itabbar {
  display: boolean
  path: string
  text: string
}
</script>
<template>
  <header class="fixed-top">
    <strong id="tab-bar" class="position-absolute container-fluid">
      <h1 id="top-title" class="d-flex justify-content-center">{{ new_title }}</h1>
      <nav class="navbar navbar-expand justify-content-center">
        <ul class="navbar-nav navbar-nav-scroll" v-for="r in routes">
          <li class="nav-item" v-if="r.display">
            <NuxtLink class="nav-link" :to="r.path" @click="() => { new_title = r.text }">{{ r.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </strong>
  </header>
</template>
<style lang="scss">
#tab-bar {
  font-family: 'Noto Sans TC', serif;
  background-color: #0004;
  #top-title {
    padding-top: 10px;
    color: #fc5b5b;
  }

  .nav-link {
    color: #ff5177;
    border-radius: 99em;
  }

  .nav-link:hover {
    background-color: #ff8df0;
  }
}
</style>