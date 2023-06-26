<template>
  <the-header></the-header>

<!-- background -->
  <div class="bg-[url('../assets/images/allpurpose/Thornstalk_Village.png')] bg-cover ">

    <div class="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">

<!-- page header -->
      <div class="sm:align-center sm:flex sm:flex-col bg-white bg-opacity-80">
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">Welcome to Thornstalk Village</h1>
        <p class="mt-5 text-xl text-gray-700 sm:text-center">A small village with a big reputation.  The best monster hunters in the kingdom all come here to train, gather supplies, and seek employment. <br/></p>
        <p class="mt-5 text-3xl text-black sm:text-center font-extrabold">Will you be the next hunter of legendary tales?</p>
        <p class=" text-sm text-gray500 sm:text-center">Or the next hunter to be the joke of the village?</p>
        
<!-- nav buttons -->
        <div class="relative mt-6 flex self-center rounded-lg bg-gray-100 p-0.5 sm:mt-8">
          <router-link :to="'/village'" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#a6bf8e] hover:bg-green-100 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
            Explore the Village</router-link>
          <router-link :to="'/guild'" type="button" class="relative ml-0.5 w-1/2 py-2 whitespace-nowrap rounded-md border border-gray-600 bg-slate-400 hover:bg-slate-200 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
            Monster Hunter's Guild</router-link>
          <router-link :to="'/map'" type="button" class="relative ml-0.5 w-1/2 whitespace-nowrap py-2 rounded-md border border-gray-600 bg-[#305c79] hover:bg-blue-200 text-sm font-medium text-gray-300 hover:text-black focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
            Hunt for Monsters</router-link>
        </div>
        <br/>
      </div>

      <village-map></village-map>

      <!-- <div class="pt-6 block mx-auto w-2/3">
          <img src="../../assets/images/village/village_map.png" alt="Village Map" width="1000" height="1000" usemap="#villagemap" class="block mx-auto">
      </div>

      <map name="villagemap">
          <area href="village_oddities" alt="Oddities Shop" shape="circle" coords="470,160,50" />
          <area href="village_apothecary" alt="Apothecary Shop" shape="rect" coords="475,330, 540,390" />
          <area href="questhunter_tavern" alt="QuestHunter Tavern" shape="poly" coords="300,330, 370,430, 345,495, 200,370, 300,330 " />
          <area href="guild" alt="Guild" shape="poly" coords="520,400, 580,450, 565,530, 470,460, 520,400" />
          <area href="village_blacksmith" alt="Blacksmithy" shape="poly" coords="300,550, 310,620, 220,650, 215,590, 300,550" />
          <area href="village_armory" alt="Armory" shape="circle" coords="340,555,30" />
      </map> -->
      

    </div>
  </div>
</template>


<script setup>
import VillageMap from '../../components/village/VillageMap.vue';
</script>