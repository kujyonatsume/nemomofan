<script setup lang="ts">
defineProps({
  label: String,
  options: Array<IOption>,
})

interface IOption {
  href: string
  text: string
}
</script>
<template>
  <div id="dropdown" class="dropdown d-flex">
    <button id="dropdownMenuButton" class="btn dropdown-toggle border-0" type="button" data-bs-toggle="dropdown"
      aria-expanded="false">{{ label }}</button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <NuxtLink v-for="opt in options" class="dropdown-item" :to="opt.href" >{{ opt.text }}</NuxtLink>
    </ul>
  </div>
</template>
<style lang="scss">
#dropdown {
  #dropdownMenuButton {
    font-size: 24px;
  }
}
</style>