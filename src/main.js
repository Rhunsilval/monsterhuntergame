import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router.js'
import { createPinia } from 'pinia'

import TheHeader from './components/TheHeader.vue';
import MonsterHunter from './components/monster_hunter/MonsterHunter.vue';
import MonsterFighter from './components/monster_hunter/MonsterFighter.vue';
import BattleLog from './components/monster_hunter/BattleLog.vue';
import TheWinner from './components/monster_hunter/TheWinner.vue';
import ShopGuts from './components/ShopGuts.vue';

const app = createApp(App);
app.use(router);
const pinia = createPinia();
app.use(pinia);

app.component('TheHeader', TheHeader);
app.component('MonsterHunter', MonsterHunter);
app.component('MonsterFighter', MonsterFighter);
app.component('BattleLog', BattleLog);
app.component('TheWinner', TheWinner);
app.component('ShopGuts', ShopGuts);

app.mount('#app');
