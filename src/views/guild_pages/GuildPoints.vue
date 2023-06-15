<template>
  <the-header></the-header>
    <!-- background -->
  <div class="bg-[url('../assets/images/quests/QuestFinder_Tavern.png')] bg-cover ">
    <div class="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">

<!-- page header -->
      <div class="sm:align-center sm:flex sm:flex-col bg-white bg-opacity-80 rounded-full">
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-center mt-5">Hunter's Rewards</h1>
        <p class="mt-5 text-3xl text-black sm:text-center font-medium">Welcome, {{ playerStore.playerId }}!</p>
        <p class="mt-5 text-2xl text-gray-700 font-bold sm:text-center">Congrats!</p>
        <p class="mt-1 text-gray-700 sm:text-center">Looks like you have some points to spend.  Choose well and enjoy your improved stats!</p>
        
<!-- nav buttons -->
        <div class=" mt-6 self-center p-0.5 pb-6 sm:mt-8">
          <div class="w-full bg-black flex justify-center">
            <div class="w-3/4 bg-slate-400 flex justify-center my-10">
                <p class="px-15 py-15 mx-20 my-20 text-4xl"> {{ playerStore.playerPoints }}</p>            
            </div>
          </div>
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