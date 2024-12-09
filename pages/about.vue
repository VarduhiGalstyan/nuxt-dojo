<template>
    <div>
        <h2>About</h2>
        <p>LORE IPSUM DOLOR SIT CONSECTETUR adipisicing elit. At labore voluptatem 
            dicta, obcaecate possimus illum vel adipisci harum earum iure.</p>
        <p>LORE IPSUM DOLOR SIT CONSECTETUR adipisicing elit. At labore voluptatem 
            dicta, obcaecate possimus illum vel adipisci harum earum iure.</p>
        <div>{{ data }}</div>
            
    </div>
</template>

<script setup>
 // const { data } = await useFetch('/api/ninja?name=mario')
  // const { data } = await useFetch('/api/ninja?name=mario', {
  //   method: 'post',
  //   body: {age: 30}
  // })

  // const { data } = await useFetch('/api/ninja')
  
const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
    h2{
        margin-bottom: 20px;
        font-size: 36px;
    } 
    p{
        margin: 20px 0;
    }

</style>