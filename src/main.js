import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router.js'
import { createPinia } from 'pinia'

import TheHeader from './components/header/TheHeader.vue';
import MonsterHunter from './components/monster_hunter/MonsterHunter.vue';
import ShopGuts from './components/ShopGuts.vue';

const app = createApp(App);
app.use(router);
const pinia = createPinia();
app.use(pinia);

app.component('TheHeader', TheHeader);
app.component('MonsterHunter', MonsterHunter);
app.component('ShopGuts', ShopGuts);

app.mount('#app');
