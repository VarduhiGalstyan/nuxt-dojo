<template>
    <div>
        <header  style="font-size: 16px; background-color: white;">
            <nav  class="nav">
                <NuxtLink to="/" style="font-weight: 700;">Nuxt Dojo</NuxtLink>
                <ul>
                    <li style="color: red;"><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <div style="margin: auto; padding: 4px;">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.nav{
    margin: auto;
    padding: 4px;
}
.router-link-exact-active{
    color: rgb(37, 59, 37);
}</style>