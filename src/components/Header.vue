<template>
  <header class="sticky top-0 transition-all duration-300">
    <section :class="['w-full', isScrolled ? 'bg-gray-100/95 backdrop-blur shadow-md py-2' : 'bg-gray-100 py-4']">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6"> <!--LAYOUT MENU-->

          <!--LOGO + MENU DESPLEGABLE -->
          <div class="flex justify-between items-center w-full md:w-auto">
            <a href="/" class="text-2xl font-bold text-red-700">DRIVE-DREAMS</a>
            <button class="md:hidden text-gray-700 hover:text-indigo-600" aria-label="Toggle mobile menu"
              @click="isMobileMenuOpen = !isMobileMenuOpen">
              <Icon icon="mdi:menu" class="w-6 h-6" />
            </button>
          </div>
          <!--BOTOONES DE NAVEGACION DE LA NAVBAR-->
          <nav class="bg-white-900" aria-label="main navegation">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ul class="hidden md:flex justify-center py-3 flex-wrap gap-x-6 text-sm font-medium text-red">
                <li v-for="item in navItems" :key="item.id">
                  <a :href="item.link" class="hover:text-sky-500">{{ item.name }}</a>
                </li>
              </ul>
              <section v-if="isMobileMenuOpen"
                class="md:hidden mt-2 bg-white rounded-lg shadow-md p-4 space-y-3 text-[#5D4037] text-center"
                aria-label="Movile-navigation">
                <a v-for="item in navItems" :href="item.link" :key="item.id"
                  class="block hover:text-amber-600 text-sm font-medium">{{ item.name }}</a>
              </section>
            </div>
          </nav>
          <!--BARRA DE BUSQUEDA-->
          <!--IconOS-->
          <aside class="flex items-center justify-end space-x-4 w-full md:w-auto">
            <button class="relative p-2 text-gray-700 hover:text-pink-800" aria-label="wishList">
              <Icon icon="mdi:heart-outline" class="w-5 h-5"></Icon>
              <span
                class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>
            <button class="relative p-2 text-gray-700 hover:text-pink-800" aria-label="wishList">
              <Icon icon="mdi:card-outline" class="w-5 h-5"></Icon>
              <span
                class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">5</span>
            </button>
            <button class="relative p-2 text-gray-700 hover:text-pink-800" aria-label="wishList">
              <UserDropDown />
            </button>
          </aside>
        </div>
      </div>
    </section>
    <!--Navbar links-->
  </header>
</template>
<script setup>
import { isTypeNode } from "typescript";
import { ref, onMounted, onUnmounted } from "vue"
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const navItems = [
  { id: 1, name: "home", link: "#home" },
  { id: 2, name: "carros", link: "#products" },
  { id: 3, name: "categories", link: "#categories" },
  { id: 4, name: "offers", link: "#offers" },
  { id: 5, name: "about", link: "#about" },
  { id: 6, name: "contact", link: "#contact" }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

import UserDropDown from "./UserDropDown.vue";

</script>