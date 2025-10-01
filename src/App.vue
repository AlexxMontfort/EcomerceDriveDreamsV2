<template>
<router-view />
<Header />
<Hero />
<Products />
<Store />
<!--ROUTERLINKS-->
<div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/admin">Admin</router-link>
    </nav>
  </div>
</template>
<style>

</style>
<script setup>
import Header from './components/Header.vue';
import  Hero from './components/Hero.vue';
import Products from './components/Products.vue';
import Store from './components/Store.vue'
</script>