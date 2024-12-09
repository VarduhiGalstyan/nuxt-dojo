<template>
    <div>
        <div style="font-size: 24px; color: green;">
            <div v-for="p in products">
                <!-- <NuxtLink :to="`/products/&{p.id}`">{{ p.title }}</NuxtLink> -->
                 <ProductCard  :product = "p"/> 
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "products",
    })

    const { data: products } = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'Nuxt Dojo | Merch ',
        meta: [
            { name: 'description', content: 'Nuxt 3 Merch'}
        ]
    }) 
</script>

<style scoped>

</style>