<template>
  <the-header></the-header>
    <!-- background -->
  <div class="bg-[url('../assets/images/village_guild/guild_gym.png')] bg-cover ">
    <div class="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">

<!-- not training -->
    <!-- page header -->
      <div v-if="!inTraining" class="sm:align-center sm:flex sm:flex-col bg-white bg-opacity-80 rounded-full">
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-center mt-5">Hunter's Gym</h1>
        <div class="flex justify-center">
            <div class="text-center w-1/3 flex justify-center">
                <div class="pt-3 ">
                    <img src="../../assets/images/village_guild/gym_trainer.png" alt="" class="h-56 w-56 border border-black"/>                     
                </div>             
            </div>        
        </div>
        <p class="mt-5 text-3xl text-black sm:text-center font-medium">Welcome, {{ playerStore.playerId }}!</p>
        <p class=" text-xl text-gray-700 sm:text-center">It's always good to see a happy, eager face in here.</p>
        <p class="mt-2 text-xl text-gray-700 font-semibold sm:text-center">I'm Hunter, owner of Hunter's Gym</p>
        <p v-if="!noCoins" class="text-gray-700 sm:text-center">I believe that everyone can benefit from a good workout. <br/> And you, my friend, look like you could really use one!</p>
        <p v-if="noCoins" class="text-red-700 text-lg font-bold sm:text-center">You might need a workout, but I need to make a living here. <br/> Please come back when you have more coins</p>
    <!-- training options nav buttons -->
        <div class="flex justify-center mt-2">
          <div class="grid grid-cols-3 w-1/2">
          <!-- row 1 -->
            <div class="flex justify-center">
              <button @click="fundsCheckAttack" type="button" class="h-36 w-36 rounded-full border border-gray-600 bg-gray-800 hover:bg-slate-300 text-sm font-serif text-white hover:text-gray-800 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Train Attack <br/> {{ playerStore.attackPrice }} coin </button>
            </div>
            <div class="flex justify-center">  
              <button @click="fundsCheckDefense" type="button" class="h-36 w-36 rounded-full border border-gray-600 bg-yellow-800 hover:bg-[#c49e78] hover:text-black text-sm font-serif text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Train Defense <br/> {{ playerStore.defensePrice }} coin</button>
            </div>
            <div class="flex justify-center">  
              <button @click="fundsCheckStrength" type="button" class="h-36 w-36 rounded-full border border-gray-600 bg-gray-800 hover:bg-slate-300 hover:text-black text-sm font-serif text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Train Strength <br/> {{ playerStore.strengthPrice }} coin </button>
            </div>
            <!-- row 2 -->
            <div class="mt-2 flex justify-center">  
              <button type="button" class="h-36 w-36 rounded-full border border-gray-600 bg-yellow-800 hover:bg-[#c49e78] hover:text-black text-sm font-serif text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Train Life </button>
            </div>
            <div class="mt-2 flex justify-center">  
              <button type="button" class="h-36 w-36 rounded-full border border-gray-600 bg-gray-800 hover:bg-slate-300 hover:text-black text-sm font-serif text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Train Intelligence </button>
            </div>
            <div class="mt-2 flex justify-center">  
              <button type="button" class="h-36 w-36 rounded-full border border-gray-600 bg-yellow-800 hover:bg-[#c49e78] hover:text-black text-sm font-serif text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Train Mana </button>
            </div>
          </div>
        </div>
    <!-- other nav buttons -->
        <div class="relative flex self-center mt-10 -mb-6">
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

<!-- training active -->
      <div v-if="inTraining" class="sm:align-center sm:flex sm:flex-col bg-white bg-opacity-80 rounded-full">
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-center mt-5">Hunter's Gym</h1>

        <div v-if="inAttackTraining">
          <training-attack
            @emitDoneTraining="doneTraining"
          ></training-attack>
        </div>

        <div v-if="inDefenseTraining">
          <training-defense
            @emitDoneTraining="doneTraining"
          ></training-defense>
        </div>

        <div v-if="inStrengthTraining">
          <training-strength
            @emitDoneTraining="doneTraining"
          ></training-strength>
        </div>
                
      </div>
      <div class="mt-80 pb-1 "></div>      
    </div>
  </div>
</template>
    

<script setup>
  import { usePlayerStore } from '@/stores/player'
  import { ref } from 'vue';
  import TrainingAttack from '../../components/guild/TrainingAttack.vue';
  import TrainingDefense from '../../components/guild/TrainingDefense.vue';
  import TrainingStrength from '../../components/guild/TrainingStrength.vue';

  const playerStore = usePlayerStore();

  const inTraining = ref(false);
  const inAttackTraining = ref(false);
  const inDefenseTraining = ref(false);
  const inStrengthTraining = ref(false);
  const noCoins = ref(false);
  
  function fundsCheckAttack() {
    if (playerStore.coinOnHand - playerStore.attackPrice < 0) {
      noCoins.value = true;
    } else {
      playerStore.coinOnHand = (playerStore.coinOnHand - playerStore.attackPrice);
      attackTraining();
    }
  }
  function attackTraining() {    
    inTraining.value = true;
    inAttackTraining.value = true;
  }
  
  function fundsCheckDefense() {
    if (playerStore.coinOnHand - playerStore.defensePrice < 0) {
      noCoins.value = true;
    } else {
      playerStore.coinOnHand = (playerStore.coinOnHand - playerStore.defensePrice);
      defenseTraining();
    }
  }
  function defenseTraining() {    
    inTraining.value = true;
    inDefenseTraining.value = true;
  }
  
  function fundsCheckStrength() {
    if (playerStore.coinOnHand - playerStore.strengthPrice < 0) {
      noCoins.value = true;
    } else {
      playerStore.coinOnHand = (playerStore.coinOnHand - playerStore.strengthPrice);
      strengthTraining();
    }
  }
  function strengthTraining() {    
    inTraining.value = true;
    inStrengthTraining.value = true;
  }

  function doneTraining() {
    inTraining.value = false;
    inAttackTraining.value = false;
    inDefenseTraining.value = false;
    inStrengthTraining.value = false;
  }

</script>