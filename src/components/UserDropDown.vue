<!-- src/components/UserDropdown.vue -->
<template>
  <div class="relative" ref="dropdownRef">
    <button @click="toggle" class="p-2 rounded-full hover:bg-gray-100">
      <Icon icon="line-md:account" width="24" height="24" />
    </button>
    <div v-if="isOpen" class="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
      <ul>
        <li><button class="w-full px-4 py-2 hover:bg-gray-100">Registrarse</button></li>
        <li><button class="w-full px-4 py-2 hover:bg-gray-100">Iniciar sesión</button></li>
        <li><button class="w-full px-4 py-2 hover:bg-gray-100">Cerrar sesión</button></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen       = ref(false)
const dropdownRef = ref(null)

const toggle = () => isOpen.value = !isOpen.value
const handleClickOutside = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>