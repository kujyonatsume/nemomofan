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
  <Title>絆星留言板 - 涅默Nemesis一周年紀念活動</Title>

  <Meta content="絆星留言板 - 涅默Nemesis一周年紀念活動" property="title" />
  <Meta content="絆星留言板 - 涅默Nemesis一周年紀念活動" property="og:title" />
  <Meta content="絆星留言板 - 涅默Nemesis一周年紀念活動" name="twitter:site" />
  <Meta content="涅默Nemesis一周年紀念活動" property="og:site_name" />

  <Meta content="快來和我們一起留言恭喜默默一周年吧~" property="description" />
  <Meta content="快來和我們一起留言恭喜默默一周年吧~" property="og:description" />
  <Meta content="快來和我們一起留言恭喜默默一周年吧~" name="twitter:description" />

  <Meta content="https://www.nemomofan.com/message" property="og:url" />
  <img_Meta />
  <div class="container">
    <div id="uploadbar" class="input-group">
      <input type="file" class="form-control" @change="onInputFile">
      <button class="btn btn-outline-secondary" type="button" @click="update">上傳</button>
    </div>
    <div class="row row-cols-auto justify-content-center">
      <img id="broad_item" v-for="item in photos" :src="'data:image/jpeg;base64,' + item" width="200" />
    </div>
  </div>
  <floor />
</template>
<style lang="scss">
#broad_item {
  padding: 5px;
}
</style>