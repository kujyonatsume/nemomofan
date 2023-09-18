<script setup lang="ts">
defineProps({ url: String })
</script>
<template>
  <a class="twitter-share-button" :href="'https://twitter.com/intent/tweet?text='+url">
    Tweet</a>
</template>