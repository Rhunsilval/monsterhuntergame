import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './views/primary_pages/HomePage.vue';
import TheVillage from './views/primary_pages/TheVillage.vue';
import TheApothecary from './views/village_shops/TheApothecary.vue';
import TheArmory from './views/village_shops/TheArmory.vue';
import TheBlacksmith from './views/village_shops/TheBlacksmith.vue';
import TheOdditiesShop from './views/village_shops/TheOdditiesShop.vue';
import QuestFinder from './views/primary_pages/QuestFinder.vue';
import ThePub from './views/quest_sources/ThePub.vue';
import TheBiergarten from './views/quest_sources/TheBiergarten.vue';
import TheGossips from './views/quest_sources/TheGossips.vue';
import TheStranger from './views/quest_sources/TheStranger.vue';
import TheGuild from './views/quest_sources/TheGuild.vue';
import TheMap from './views/primary_pages/TheMap.vue';
import TheForest from './views/map_pages/TheForest.vue';
import TheJungle from './views/map_pages/TheJungle.vue';
import TheMountains from './views/map_pages/TheMountains.vue';
import TheGrassland from './views/map_pages/TheGrassland.vue';
import TheDesert from './views/map_pages/TheDesert.vue';
import TheMarshes from './views/map_pages/TheMarshes.vue';
import TheSwamp from './views/map_pages/TheSwamp.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomePage },
        { path: '/village', component: TheVillage },
        { path: '/village_apothecary', component: TheApothecary },
        { path: '/village_armory', component: TheArmory }, 
        { path: '/village_blacksmith', component: TheBlacksmith }, 
        { path: '/village_oddities', component: TheOdditiesShop },
        { path: '/questfinder', component: QuestFinder },
        { path: '/questfinder_pub', component: ThePub },
        { path: '/questfinder_biergarten', component: TheBiergarten },
        { path: '/questfinder_gossips', component: TheGossips },
        { path: '/questfinder_stranger', component: TheStranger },
        { path: '/questfinder_guild', component: TheGuild },
        { path: '/map', component: TheMap }, 
        { path: '/map_forest', component: TheForest },
        { path: '/map_jungle', component: TheJungle },
        { path: '/map_mountains', component: TheMountains },
        { path: '/map_grassland', component: TheGrassland },
        { path: '/map_desert', component: TheDesert },
        { path: '/map_marshes', component: TheMarshes },
        { path: '/map_swamp', component: TheSwamp },
    ],
});

export default router;