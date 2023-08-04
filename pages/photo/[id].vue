<script setup lang="ts">
const route = useRoute();
const id = ref(route.params.id as string);
</script>
<template>
    <p>{{ id }}</p>
</template>