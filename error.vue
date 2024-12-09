<template>
    <div style="margin: 7px;">
        <p style="font-weight: 500;">{{  error.statusCode }}</p>
        <p style="font-weight: 400;">Oooops.</p>
        <p style="font-weight: 450;"> {{ error.message }}</p>
        <button @click="handleClearError">Go Home...</button>
    </div>
</template>

<script setup>
defineProps({
    error: Object
})

const handleClearError  =() => clearError({ redirect: '/'})
</script>

<style scoped>

</style>