<template>
    <the-header></the-header>

    <div class="bg-[url('../assets/images/village_guild/guild_hospital.png')] bg-cover">
      <div class="flex justify-center">
        <div class="w-3/4 bg-white bg-opacity-50">
          <div class="flex justify-center"> 
            <h1 class="text-7xl font-bold text-center">Monster Hunter's Guild <br/> Hospital</h1>
          </div> 
          <div class="flex justify-center"> 
            <img src="../../assets/images/village_guild/guild_doctor.png" class="border border-gray-600 my-5 rounded-full w-60" />
          </div>
      <!--need healing  -->
          <div v-if="playerStore.playerActiveHealth < (playerStore.playerHealth-10)" class="flex justify-center">
            <div class="text-center bg-white bg-opacity-80 w-1/4 py-3 px-3"> 
              <p class="text-xl font-semibold mb-2 ">Looks like you got mauled by monsters there, {{ playerStore.playerId }}</p>
              <p>You know you're not supposed to let them do that, right?</p>
              <p>Well, no matter.  We can help.</p>
              <p class="text-sm pt-4 pb-3">Choose from the options below and we'll fix you right up!</p>
            </div>
          </div>
      <!--health is fine  -->
          <div v-if="playerStore.playerActiveHealth >= (playerStore.playerHealth-10)" class="flex justify-center">
            <div class="text-center bg-white bg-opacity-80 w-1/4 py-3 px-3"> 
              <p class="text-xl font-semibold mb-2 ">You look to be in fine health, {{ playerStore.playerId }}</p>
              <p>Our services are always available to you,</p>
              <p>but are you sure that you need them?</p>
              <p class="text-sm pt-4 pb-3">Choose from the options below and we'll fix you right up!</p>
            </div>
          </div>
          
          <div class="flex justify-center">
            <div class="bg-green-200 bg-opacity-80 rounded-2xl border border-gray-500 w-2/3 pt-7 mb-10"> 
              <div class="grid grid-cols-2"> 

                <div class="flex justify-center mb-8"> 
                  <div class="grid grid-cols-1">
                    <p class="text-3xl font-bold font-sans mb-10 text-center">Heal by Points</p>
                    <div class="grid grid-cols-2">
                      <button @click="buy10">
                        <img src="../../assets/images/allpurpose/ten.png" class="w-20 " />
                      </button>
                      <p class="text-2xl font-serif pt-4 ">30 coins</p>
                    </div>  
                    <div class="grid grid-cols-2 mt-4">
                      <button @click="buy20">
                        <img src="../../assets/images/allpurpose/twenty.png" class="w-20 " />
                      </button>
                      <p class="text-2xl font-serif pt-4 ">50 coins</p>
                    </div>  
                    <div class="grid grid-cols-2 mt-4">
                      <button @click="buy40">
                        <img src="../../assets/images/allpurpose/forty.png" class="w-20 " />
                      </button>
                      <p class="text-2xl font-serif pt-4 ">90 coins</p>
                    </div> 
                    <div class="grid grid-cols-2 mt-4">
                      <button @click="buy80">
                        <img src="../../assets/images/allpurpose/eighty.png" class="w-20 " />
                      </button>
                      <p class="text-2xl font-serif pt-4 ">175 coins</p>
                    </div> 
                  </div>                  
                </div>
                <div class="flex justify-center border-l border-gray-600 mb-8">
                  <div class="grid grid-cols-1">
                    <p class="text-3xl text-center font-bold font-sans">Heal by Percentage</p>
                    <div class="grid grid-cols-2"> 
                      <p class="text-2xl font-serif pt-8">200 coins</p>
                      <button @click="buy30Per"> 
                        <img src="../../assets/images/allpurpose/30percent.png" class="w-20 border border-gray-400 rounded-full" />
                      </button>
                    </div>
                    <div class="grid grid-cols-2"> 
                      <p class="text-2xl font-serif pt-8">400 coins</p>
                      <button @click="buy60Per"> 
                        <img src="../../assets/images/allpurpose/60percent.png" class="w-20 border border-gray-400 rounded-full" />
                      </button>
                    </div>
                    <div class="grid grid-cols-2"> 
                      <p class="text-2xl font-serif pt-8">800 coins</p>
                      <button @click="buy90Per"> 
                        <img src="../../assets/images/allpurpose/90percent.png" class="w-20 border border-gray-400 rounded-full" />
                      </button>
                    </div>                    
                  </div>  
                </div>
              </div>
            </div>
          </div>
<!-- no money error message -->
          <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
                <div class="flex w-2/3 pt-96 pr-56 flex-col items-center space-y-4 sm:items-end">
                    <transition 
                        enter-active-class="transform ease-out duration-300 transition" 
                        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" 
                        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" 
                        leave-active-class="transition ease-in duration-100" 
                        leave-from-class="opacity-100" 
                        leave-to-class="opacity-0"
                    >
                        <div v-if="noFunds" class="pointer-events-auto w-44 overflow-hidden rounded-lg bg-teal-400 shadow-lg ring-1 ring-black ring-opacity-30 ">
                            <div class="p-4">
                                <div class="flex items-center">
                                    <div class="">
                                        <div>
                                            <p class="text-center text-xl font-semibold text-gray-900 pb-3">Sorry</p>
                                            <p class="text-center">Looks like you don't have enough coins for that</p>
                                        </div>
                                    </div>
                                    <div class="pl-5">
                                        <button @click="noFunds = False" type="button" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
                                            <span class="sr-only">Close</span>
                                            <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>

        </div>        
      </div>      
    </div>
  </template>
      
  
  <script setup>
    import { usePlayerStore } from '@/stores/player';
    import { XMarkIcon } from '@heroicons/vue/20/solid'
    import { ref } from 'vue';


    const playerStore = usePlayerStore();

    const noFunds = ref(false);

    function buy10() {
      if ((playerStore.coinOnHand - 30) < 0 ) {
        noFunds.value = true;
      } else {
        playerStore.coinOnHand = (playerStore.coinOnHand - 30);
        playerStore.playerActiveHealth = (playerStore.playerActiveHealth + 10);
      }
      if (playerStore.playerActiveHealth > playerStore.playerHealth) {
        playerStore.playerActiveHealth = playerStore.playerHealth;
      }
    }
    function buy20() {
      if ((playerStore.coinOnHand - 50) < 0 ) {
        noFunds.value = true;
      } else {
        playerStore.coinOnHand = (playerStore.coinOnHand - 50);
        playerStore.playerActiveHealth = (playerStore.playerActiveHealth + 20);
      }
      if (playerStore.playerActiveHealth > playerStore.playerHealth) {
        playerStore.playerActiveHealth = playerStore.playerHealth;
      }
    }
    function buy40() {
      if ((playerStore.coinOnHand - 90) < 0 ) {
        noFunds.value = true;
      } else {
        playerStore.coinOnHand = (playerStore.coinOnHand - 90);
        playerStore.playerActiveHealth = (playerStore.playerActiveHealth + 40);
      }
      if (playerStore.playerActiveHealth > playerStore.playerHealth) {
        playerStore.playerActiveHealth = playerStore.playerHealth;
      }
    }
    function buy80() {
      if ((playerStore.coinOnHand - 175) < 0 ) {
        noFunds.value = true;
      } else {
        playerStore.coinOnHand = (playerStore.coinOnHand - 175);
        playerStore.playerActiveHealth = (playerStore.playerActiveHealth + 80);
      }
      if (playerStore.playerActiveHealth > playerStore.playerHealth) {
        playerStore.playerActiveHealth = playerStore.playerHealth;
      }
    }
    function buy30Per() {
      if ((playerStore.coinOnHand - 200) < 0 ) {
        noFunds.value = true;
      } else {
        playerStore.coinOnHand = (playerStore.coinOnHand - 200);
        playerStore.playerActiveHealth = (playerStore.playerActiveHealth + (playerStore.playerHealth*.3));
      }
      if (playerStore.playerActiveHealth > playerStore.playerHealth) {
        playerStore.playerActiveHealth = playerStore.playerHealth;
      }
    }
    function buy60Per() {
      if ((playerStore.coinOnHand - 400) < 0 ) {
        noFunds.value = true;
      } else {
        playerStore.coinOnHand = (playerStore.coinOnHand - 400);
        playerStore.playerActiveHealth = (playerStore.playerActiveHealth + (playerStore.playerHealth*.6));
      }
      if (playerStore.playerActiveHealth > playerStore.playerHealth) {
        playerStore.playerActiveHealth = playerStore.playerHealth;
      }
    }
    function buy90Per() {
      if ((playerStore.coinOnHand - 800) < 0 ) {
        noFunds.value = true;
      } else {
        playerStore.coinOnHand = (playerStore.coinOnHand - 800);
        playerStore.playerActiveHealth = (playerStore.playerActiveHealth + (playerStore.playerHealth*.9));
      }
      if (playerStore.playerActiveHealth > playerStore.playerHealth) {
        playerStore.playerActiveHealth = playerStore.playerHealth;
      }
    }

  </script>