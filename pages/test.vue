<script setup lang="ts">
</script>
<template>
  <Title>WebGL</Title>
  <ClientOnly>
    <Game />
  </ClientOnly>
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

body::-webkit-scrollbar {
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