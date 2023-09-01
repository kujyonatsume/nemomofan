<script setup lang="ts">
const p = defineProps({
  data: Object,
  mount: Boolean
})
var data = ref(p.data as UserMessage)
if (p.mount)
  onMounted(() => {
    resizeHandle()
    window.addEventListener('resize', resizeHandle)
    function resizeHandle() {
      var bigcard = $('#card-s2');
      var cardbg = $('#card-all');
      if (!bigcard) return
      bigcard.css('top', ((cardbg.height()! - bigcard.height()!) / 2) + 'px').css('left', ((cardbg.width()! - bigcard.width()!) / 2) + 'px')
    }
  })

</script>
<template>
    <div id="card-bg" class="d-flex flex-column justify-content-between">
      <p>{{ data.text }}</p>
      <p id="username">{{ data.name }}</p>
  </div>
</template>