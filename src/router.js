import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './views/primary_pages/HomePage.vue';
import TestingPage from './views/primary_pages/TestingPage.vue';
import TheVillage from './views/primary_pages/TheVillage.vue';
import TheVillage2 from './views/primary_pages/TheVillage2.vue';
import TheApothecary from './views/village_shops/TheApothecary.vue';
import TheArmory from './views/village_shops/TheArmory.vue';
import TheBlacksmith from './views/village_shops/TheBlacksmith.vue';
import TheOdditiesShop from './views/village_shops/TheOdditiesShop.vue';
import TheMagicShop from './views/village_shops/TheMagicShop.vue';
import SchoolAndSpa from './views/village_shops/SchoolAndSpa.vue';
import TheBank from './views/village_shops/VillageBank.vue';
import QuestHunterTavern from './views/quest_sources/QuestHunterTavern.vue';
import ThePub from './views/quest_sources/ThePub.vue';
import TheBiergarten from './views/quest_sources/TheBiergarten.vue';
import TheGossips from './views/quest_sources/TheGossips.vue';
import TheStranger from './views/quest_sources/TheStranger.vue';
import TheGuild from './views/guild_pages/TheGuild.vue';
import GuildGym from './views/guild_pages/GuildGym.vue';
import GuildPoints from './views/guild_pages/GuildPoints.vue';
import GuildHospital from './views/guild_pages/GuildHospital.vue';
import GuildReputation from './views/guild_pages/GuildReputation.vue';
import TheMap from './views/primary_pages/TheMap.vue';
import TheForest from './views/map_pages/TheForest.vue';
import TheJungle from './views/map_pages/TheJungle.vue';
import TheMountains from './views/map_pages/TheMountains.vue';
import TheGrassland from './views/map_pages/TheGrassland.vue';
import TheDesert from './views/map_pages/TheDesert.vue';
import TheMarshes from './views/map_pages/TheMarshes.vue';
import TheSwamp from './views/map_pages/TheSwamp.vue';
import TheFarmlands from './views/map_pages/TheFarmlands.vue';
import TheBeach from './views/map_pages/TheBeach.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomePage },
        { path: '/test', component: TestingPage },
        { path: '/village', component: TheVillage },
        { path: '/village2', component: TheVillage2 },
        { path: '/village_apothecary', component: TheApothecary },
        { path: '/village_tailor', component: TheArmory }, 
        { path: '/village_blacksmith', component: TheBlacksmith }, 
        { path: '/village_oddities', component: TheOdditiesShop },
        { path: '/village_magicshop', component: TheMagicShop },
        { path: '/school_N_spa', component: SchoolAndSpa },
        { path: '/village_bank', component: TheBank },
        { path: '/questhunter_tavern', component: QuestHunterTavern },
        { path: '/questhunter_pub', component: ThePub },
        { path: '/questhunter_biergarten', component: TheBiergarten },
        { path: '/questhunter_gossips', component: TheGossips },
        { path: '/questhunter_stranger', component: TheStranger },
        { path: '/guild', component: TheGuild },
        { path: '/guild_gym', component: GuildGym },
        { path: '/guild_points', component: GuildPoints },
        { path: '/guild_hospital', component: GuildHospital },
        { path: '/guild_reputation', component: GuildReputation },
        { path: '/map', component: TheMap },
        { path: '/map_forest', component: TheForest },
        { path: '/map_jungle', component: TheJungle },
        { path: '/map_mountains', component: TheMountains },
        { path: '/map_grassland', component: TheGrassland },
        { path: '/map_desert', component: TheDesert },
        { path: '/map_marshes', component: TheMarshes },
        { path: '/map_swamp', component: TheSwamp },
        { path: '/map_farmlands', component: TheFarmlands },
        { path: '/map_beach', component: TheBeach },
    ],
    scrollBehavior() {
        return { left:0, top: 0 };
    }
});

export default router;