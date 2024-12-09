<template>
    <div style=" background-color: aquamarine;">
        <div style="gap: 10px;">
            <div style="padding: 7px;">
                <img :src="`${product.image}`" alt="product img" style="width: 100px; height: 100px; margin: auto;">
            </div>
            <div style="padding: 7px;">
                <h2 style="font-weight: 700;">{{ product.title }}</h2>
                <p style="font-weight: 500;">Price - ${{ product.price }}</p>
                <h3 style=" font-weight: 600;">product description:</h3>
                <p style="font-weight: 500;">{{ product.description }}</p>
                <button>
                    <i style="margin: 2px;">add_shopping_cart</i>
                    <span>App to cart</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { product} = defineProps(['product'])
</script>

<style scoped>

</style>