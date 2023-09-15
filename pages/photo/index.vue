<script setup lang="ts">
import img_Meta from "@/components/img_Meta.vue"
var formData = new FormData()
const { error, data: photos } = await useFetch('/api/photo')

if (error) console.log(error);

function onInputFile(e: Event) {
  var file = (<HTMLInputElement>e.target).files?.item(0)
  if (!file) return
  console.log(file);
  formData.append(`image`, file)
  //const reader = new FileReader();
  //reader.readAsDataURL(file);
  //reader.addEventListener('load', (e) => {
  //const img = new Image();
  //img.title = file.name
  //img.src = e.target.result as string
  //}, { once: true })
}

async function update() {
  const { error, data } = await useFetch('/api/photo', {
    method: 'POST',
    body: formData
  })
  if (Array.isArray(data.value))
    photos.value = data.value
  else if (error) console.log(error);
}

</script>
<template>
  <Title>太陽伴星觀測報告 - 涅默Nemesis一周年紀念活動</Title>

  <Meta content="太陽伴星觀測報告 - 涅默Nemesis一周年紀念活動" property="title" />
  <Meta content="太陽伴星觀測報告 - 涅默Nemesis一周年紀念活動" property="og:title" />
  <Meta content="太陽伴星觀測報告 - 涅默Nemesis一周年紀念活動" name="twitter:site" />

  <Meta content="絆星們的觀測報告📷📷 相關tag請使用 #太陽伴星觀測報告 #涅默巡迴演唱中 #花嫁默默出巡囉" property="description" />
  <Meta content="絆星們的觀測報告📷📷 相關tag請使用 #太陽伴星觀測報告 #涅默巡迴演唱中 #花嫁默默出巡囉" property="og:description" />
  <Meta content="絆星們的觀測報告📷📷 相關tag請使用 #太陽伴星觀測報告 #涅默巡迴演唱中 #花嫁默默出巡囉" name="twitter:description" />

  <Meta content="https://www.nemomofan.com/photo" property="og:url" />

  <div class="row justify-content-center">
    <img id="broad_item" v-for="item in photos" :src="`/photo/${item}`" :height="200" />
  </div>
</template>
<style lang="scss">
#broad_item {
  padding: 5px;
}
</style>