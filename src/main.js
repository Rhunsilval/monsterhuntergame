import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router.js'
import { createPinia } from 'pinia'

import TheHeader from './components/TheHeader.vue';
import MonsterFighter from './components/MonsterFighter.vue'
import BattleLog from './components/BattleLog.vue'
import TheWinner from './components/TheWinner.vue'

const app = createApp(App);
app.use(router);
const pinia = createPinia();
app.use(pinia);

app.component('TheHeader', TheHeader);
app.component('MonsterFighter', MonsterFighter);
app.component('BattleLog', BattleLog);
app.component('TheWinner', TheWinner);

app.mount('#app');
