<template>
    <div style="background-color: yellow;">
        <img :src="`${product.image}`" alt="product thumb" style="width: 100px; height: 100px;">
        <p style="margin-left: 50px;">{{ product.title }}</p>
        <NuxtLink :to="`/products/&{product.id}`">
            <p >View Details</p>
        </NuxtLink>

    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>

</style>