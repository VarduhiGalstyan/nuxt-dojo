<template>
    <div>
        <header  style="font-size: 16px; background-color: white;">
            <nav  class="nav">
                <NuxtLink to="/products" style="font-weight: 700;">Nuxt Dojo</NuxtLink>
            </nav>
        </header>

        <div style="margin: auto; padding: 4px;">
            <slot />
        </div>

        <footer>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products">Merch</NuxtLink></li>
            </ul>
        </footer>
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