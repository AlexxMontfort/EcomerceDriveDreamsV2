<template>
<router-view />
<Header />
<Hero />
<Products />
<Store />
</template>
<style>

</style>
<script setup>
import Header from './components/Header.vue';
import  Hero from './components/Hero.vue';
import Products from './components/Products.vue';
import Store from './components/Store.vue'
</script>