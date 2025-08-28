import { createApp } from 'vue';
import './style.css';
import  App  from './App.vue';
//iconify
import { Icon } from "@iconify/vue";

// configuracion de router


createApp(App).component('Icon', Icon).mount('#app')
