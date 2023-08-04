<script setup lang="ts">
const p = defineProps({
  data: Object
})
var data = ref(p.data as UserMessage)

onMounted(() => {
  resizeHandle()
  window.addEventListener('resize', resizeHandle)
  function resizeHandle() {
    var bigcard = $('#card-s2');
    if (!bigcard) return
    bigcard.css('top', ((window.innerHeight - bigcard.height()!) / 2) + 'px').css('left', ((window.innerWidth - bigcard.width()!) / 2) + 'px')
  }
})

</script>
<template>
  <div id="card-s2" style="position: fixed;">
    <div id="card-bg" class="d-flex flex-column justify-content-between">
      <p>{{ data.text }}</p>
      <p id="username">{{ data.name }}</p>
    </div>
  </div>
</template>