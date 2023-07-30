<script setup lang="ts">
import img_Meta from "@/components/img_Meta.vue"
import MessageCard from "@/components/MessageCard.vue";
const messages = ref<UserMessage[]>();
var { error, data } = await useFetch('/api/message')
if (error.value?.message) alert(error.value?.message)
else messages.value = data.value || []

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
    <div class="d-flex justify-content-center">
      <div class="row row-cols-auto">
        <div id="broad_item" class="d-flex justify-content-center" v-for="(item, i) in messages">
          <MessageCard :num="i" :name="item.name" :msg="item.text" />
        </div>
      </div>
    </div>
  </div>
  <floor />
</template>