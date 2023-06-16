<template>
  <div v-if="!newGame" class="relative bg-gray-200 mt-10">
    <main class="lg:relative">
      <div class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div class="px-4 sm:px-8 lg:w-1/2 xl:pr-16">

<!-- title -->
          <h1 class="text-4xl font-bold tracking-tight text-center text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline">Monster Hunters of Awesome Legendary-ness</span>
            {{ ' ' }}
            <span class="block text-lg text-center mx-24 text-cyan-600 xl:inline">and sometimes embarrassing failure</span>
          </h1>

<!-- description -->
          <p class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl text-center">A silly, fun, little turn-based game that I've created as a way for me to practice my coding skills.</p>
            
<!-- buttons -->
          <div class="mt-10 sm:flex sm:justify-center lg:justify-center">
            <div class="rounded-md shadow">
              <button @click="startNewGame" type="button" class="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-800 px-8 py-3 text-base font-medium text-white hover:bg-indigo-400 md:py-4 md:px-10 md:text-lg">
              Start New Game</button>
            </div>
          </div>
          <div v-if="oldGame" class="mt-2 sm:flex sm:justify-center lg:justify-center">
            <div class="rounded-md shadow">
              <router-link :to="'/village'" type="button" class="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-800 px-8 py-3 text-base font-medium text-white hover:bg-indigo-400 md:py-4 md:px-10 md:text-lg">
              Continue Old Game</router-link>
            </div>
          </div>

        </div>
      </div>

<!-- image -->
      <div class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <img  class="absolute inset-0 h-full w-full object-cover" src="../../assets/images/Monster_Hunter.png" alt="" />
      </div>
    </main>
  </div>

<!-- if new game start: -->
  <div v-if="newGame" class="bg-[url('../assets/images/allpurpose/map.png')] bg-cover">
    <div class="mx-auto max-w-7xl pb-24 pt-16  px-4 sm:px-6 lg:px-8">
      <div class="sm:align-center sm:flex sm:flex-col bg-stone-500 bg-opacity-80">
          <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">Choose your hunter name!</h1>
          <p class="mt-5 text-xl text-gray-700 sm:text-center"> No one cares much what name you were born with.  This is your chance to re-invent yourself!</p>
          <p class="mt-5 mb-3 text-3xl text-black sm:text-center font-extrabold">Choose well!</p>
          <p class=" text-sm text-gray500 sm:text-center">This will be the name whispered around campfires.  Sung aloud in pubs!  Etched onto the Wall of Legends in the Hunter's Guild!!</p>
          <p class=" text-sm text-gray500 sm:text-center">Or mocked by children in the street and parodied by traveling minstrels.</p>
          <p class=" text-sm text-gray500 sm:text-center">Through success or failure, this is the name all will remember you by!</p>
          <form @submit.prevent="submitForm">
            <div class="relative text-center my-6 flex flex-col items-center self-center rounded-lg p-0.5 sm:mt-8">
              <input type="text" v-model="userName" placeholder="Player_One" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#a6bf8e] hover:bg-green-100 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8"/>
              <router-link @click="submitForm" type="button" :to="'/guild_points'" class="px-2 py-2 font-medium bg-white border border-black rounded-lg mt-3">Done</router-link>
            </div>            
          </form>        
      </div>
      <div class="my-5">
        <img src="../../assets/images/allpurpose/monsterfighter.png" class="h-96 w-full w-fill "/>
      </div>
    </div>
  </div>
</template>
  
<script setup>
  import { ref } from 'vue'
  import { usePlayerStore } from '@/stores/player'

  const playerStore = usePlayerStore();

  const oldGame = playerStore.oldGame;

  const newGame = ref(false);
  function startNewGame() {
    newGame.value = true;
  }

  const userName = ref('');
  function submitForm() {
    console.log('username: ' + userName.value);
    playerStore.playerId = userName.value;
  }
  
</script>