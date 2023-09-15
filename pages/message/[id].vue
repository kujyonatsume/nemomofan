<script setup lang="ts">
const route = useRoute();
const { value } = useFetch('/api/message').data
var data = ref<{
    name: string;
    text: string;
}>()
if (value) data = ref(value[Number(route.params.id)])
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

    <div v-if="data" id="card">
        <p>{{ data?.name }} :</p>
        <p>{{ data?.text }}</p>
    </div>
</template>
<style lang="scss">
#card {
    background-color: #ff5177;
    padding: 20% 20%;
    font-size: 32px;
}
</style>