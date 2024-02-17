import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import Lara from '@/assets/test';      //import preset   
import './index.css'

createApp(App).use(PrimeVue, {unstyled: false,pt: Lara}).use(store).use(router).mount('#app')
