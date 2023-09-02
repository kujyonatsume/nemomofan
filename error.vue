<script setup lang="ts">
defineProps({ error: Object })
const back = () => { window.history.back() }
</script>
<template>
    <div id="err" @click="back">
        <p id="errstr">Error {{ error?.statusCode }} {{ error?.statusMessage }}</p>
    </div>
</template>
<style lang="scss">
#err {
    width: 100%;
    height: 100%;
    color: white;
    font-size: 24px;
    text-align: center;
    overflow: -moz-scrollbars-none;

    #errstr {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 10vh;
    }
}
</style>