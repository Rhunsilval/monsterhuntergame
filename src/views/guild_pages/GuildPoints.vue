<template>
  <the-header></the-header>
    <!-- background -->
  <div class="bg-[url('../assets/images/village_guild/levelup_background.png')] w-screen ">
    <div class="mx-auto max-w-7xl pt-10 pb-24 px-4 sm:px-6 lg:px-8">

<!-- page header -->
      <div class="sm:align-center sm:flex sm:flex-col bg-white bg-opacity-80 rounded-full">
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-center mt-5">Hunter's Rewards</h1>
        <p class="mt-5 text-3xl text-black sm:text-center font-medium">Welcome, {{ playerStore.playerId }}!</p>
        <div class="flex justify-center">
          <img src="../../assets/images/village_guild/reward_giver.png" alt="" class="h-64  w-56 border border-black mt-4" />
        </div>
        <p class="mt-2 text-2xl text-gray-700 font-bold sm:text-center">Congrats.</p>
        <p class="mt-1 text-gray-700 sm:text-center">Looks like you have some points to spend.  Choose well and enjoy your improved stats!</p>
        <div class="flex justify-center">
          <router-link :to="'/guild'" class="border px-3 py-3 bg-slate-600 text-white w-20 rounded-lg mt-2 -mb-5 flex justify-center">
            <p>Done</p>
          </router-link>
        </div>

<!-- points buttons -->
        <div class="self-center p-0.5 pb-6 sm:mt-8 w-1/2">
          <div class="w-full bg-[url('../assets/images/village_guild/reward_background.png')] flex justify-center">
            <div class="w-11/12 bg-slate-400 justify-center my-10 grid grid-cols-1 border">
                  <p class="px-8 pt-3 mx-8 mt-3 text-4xl text-center">Available points to spend:</p>
                  <p class="text-4xl text-center">{{ playerStore.playerPoints }}</p> 
                  <div class="text-center grid grid-cols-3">
                    
                    <div class="mt-6 mb-10">                      
                        <div class="text-center w-32 ml-8 ">
                          <h1 class="text-xl font-semibold ">Attack level:</h1>                          
                          <p class="text-sm">Useful for striking against your enemies</p>
                          <p class="text-3xl font-bold "> {{ playerStore.playerBaseAttack }}</p>
                          <button @click="spendPointAttack" class="border border-black rounded-lg font-extrabold text-5xl bg-gray-300">
                            <p class="-mt-2 mb-1 mx-1 ">+</p>
                          </button>
                        </div>
                        <div class="text-center w-32 ml-8 pt-10">
                          <h1 class="text-xl font-semibold ">Strength level:</h1>
                          <p class="text-sm">Makes you both hit harder and become harder to hit</p>
                          <p class="text-3xl font-bold mt-2"> {{ playerStore.playerBaseStrength }}</p>
                          <button @click="spendPointStrength" class="border border-black rounded-lg font-extrabold text-5xl bg-gray-300">
                            <p class="-mt-2 mb-1 mx-1 ">+</p>
                          </button>
                        </div>
                    </div>
                    
                    <div class="mt-6 mb-10">                      
                        <div class="text-center w-32 ml-8 ">
                          <h1 class="text-xl font-semibold ">Defense level:</h1>                          
                          <p class="text-sm">Useful for bearing the force of your foes</p>
                          <p class="text-3xl font-bold "> {{ playerStore.playerBaseDefense }}</p>
                          <button @click="spendPointDefense" class="border border-black rounded-lg font-extrabold text-5xl bg-gray-300">
                            <p class="-mt-2 mb-1 mx-1 ">+</p>
                          </button>
                        </div>
                        <div class="text-center w-32 ml-8 pt-10">
                          <h1 class="text-xl font-semibold ">Intelligence level:</h1>
                          <p class="text-sm">Useful for learning and executing spells</p>
                          <p class="text-3xl font-bold mt-7 "> {{ playerStore.playerBaseIntelligence }}</p>
                          <button @click="spendPointIntelligence" class="border border-black rounded-lg font-extrabold text-5xl bg-gray-300">
                            <p class="-mt-2 mb-1 mx-1 ">+</p>
                          </button>
                        </div>
                    </div>
                    
                    <div class="mt-6 mb-10">                      
                        <div class="text-center w-32 ml-8 ">
                          <h1 class="text-xl font-semibold">Life Energy:</h1>                          
                          <p class="text-sm">How much life you have to spend</p>
                          <p class="text-3xl font-bold mt-5 "> {{ playerStore.playerBaseHealth }}</p>
                          <button @click="spendPointLife" class="border border-black rounded-lg font-extrabold text-5xl bg-gray-300">
                            <p class="-mt-2 mb-1 mx-1 ">+</p>
                          </button>
                        </div>
                        <div class="text-center w-32 ml-8 pt-10">
                          <h1 class="text-xl font-semibold ">Mana Energy:</h1>
                          <p class="text-sm">How much mana you have to spend</p>
                          <p class="text-3xl font-bold mt-14 "> {{ playerStore.playerBaseMana }}</p>
                          <button @click="spendPointMana" class="border border-black rounded-lg font-extrabold text-5xl bg-gray-300">
                            <p class="-mt-2 mb-1 mx-1 ">+</p>
                          </button>
                        </div>
                    </div>
                  </div>
            </div>            
          </div>
        </div>
      </div>
      <div class="mt-80 pb-1 "></div>      
    </div>
  </div>
</template>
    

<script setup>
  import { usePlayerStore } from '@/stores/player';
  import { ref } from 'vue';

  const playerStore = usePlayerStore();

  const outOfPoints = ref(false);  // in place to trigger an out of points message.  but is it needed?
  function spendPointAttack() {
    if (playerStore.playerPoints < 1){
      outOfPoints.value = true;
    } else {
      playerStore.playerPoints = (playerStore.playerPoints - 1);
      playerStore.playerBaseAttack = (playerStore.playerBaseAttack + 1);
    }
    playerStore.getAttackValues();
  }
  function spendPointDefense() {
    if (playerStore.playerPoints < 1){
      outOfPoints.value = true;
    } else {
      playerStore.playerPoints = (playerStore.playerPoints - 1);
      playerStore.playerBaseDefense = (playerStore.playerBaseDefense + 1);
    }
    playerStore.getDefenseValues();
  }
  function spendPointStrength() {
    if (playerStore.playerPoints < 1){
      outOfPoints.value = true;
    } else {
      playerStore.playerPoints = (playerStore.playerPoints - 1);
      playerStore.playerBaseStrength = (playerStore.playerBaseStrength + 1);
    }
    playerStore.getStrengthValues();
  }
  function spendPointIntelligence() {
    if (playerStore.playerPoints < 1){
      outOfPoints.value = true;
    } else {
      playerStore.playerPoints = (playerStore.playerPoints - 1);
      playerStore.playerBaseIntelligence = (playerStore.playerBaseIntelligence + 1);
    }
    playerStore.getIntelligenceValues();
  }
  function spendPointLife() {
    if (playerStore.playerPoints < 1){
      outOfPoints.value = true;
    } else {
      playerStore.playerPoints = (playerStore.playerPoints - 1);
      playerStore.playerBaseHealth = (playerStore.playerBaseHealth + 1);
      playerStore.playerHealth = (playerStore.playerHealth + 1);
      playerStore.playerActiveHealth = (playerStore.playerActiveHealth + 1);
    }
    playerStore.getExtraHealth();
  }
  function spendPointMana() {
    if (playerStore.playerPoints < 1){
      outOfPoints.value = true;
    } else {
      playerStore.playerPoints = (playerStore.playerPoints - 1);
      playerStore.playerBaseMana = (playerStore.playerBaseMana + 1);
      playerStore.playerMana = (playerStore.playerMana + 1);
      playerStore.playerActiveMana = (playerStore.playerActiveMana + 1);
    }
    playerStore.getExtraMana();
  }

</script>