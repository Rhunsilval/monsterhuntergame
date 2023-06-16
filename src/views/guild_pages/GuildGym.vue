<template>
  <the-header></the-header>
    <!-- background -->
  <div class="bg-[url('../assets/images/village_guild/guild_gym.png')] bg-cover ">
    <div class="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">

<!-- page header -->
      <div class="sm:align-center sm:flex sm:flex-col bg-white bg-opacity-80 rounded-full">
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-center mt-5">Hunter's Gym</h1>
        <p class="mt-5 text-3xl text-black sm:text-center font-medium">Welcome, {{ playerStore.playerId }}!</p>
        <p class="mt-5 text-xl text-gray-700 sm:text-center">It's always good to see a happy, eager face in here!</p>
        
<!-- nav buttons -->
        <div class=" mt-6 self-center p-0.5 pb-6 sm:mt-8">
          <router-link :to="''" type="button" class="rounded-full h-44 pt-20 border border-gray-600 bg-gray-800 hover:bg-slate-300 py-2 text-sm font-serif text-white hover:text-gray-800 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
            Seek extra training</router-link>  
          <router-link :to="'/guild_points'" type="button" class="ml-2 pt-20 h-44 rounded-full border border-gray-600 bg-yellow-800 hover:bg-[#c49e78] hover:text-black py-2 text-sm font-serif text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
            Spend your points</router-link>
        </div>
        <div class="relative flex self-center mt-5 -mb-6">
          <router-link :to="'/guild'" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-gray-400 hover:bg-gray-300 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
            Return to Guild Lobby</router-link>
        </div>
        <div class="relative flex self-center rounded-lg p-0.5 pb-20 sm:mt-8">
          <router-link :to="'/village'" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#a6bf8e] hover:bg-green-100 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
            Explore the Village</router-link>
          <router-link :to="'/map'" type="button" class="relative ml-1 w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#305c79] hover:bg-blue-200 hover:text-black  py-2 text-sm font-medium text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
            Hunt for Monsters</router-link>
        </div>
      </div>



      <div class="mt-80 pb-1 "></div>      
    </div>
  </div>
</template>
    

<script setup>
  import { usePlayerStore } from '@/stores/player'

  const playerStore = usePlayerStore();

</script>