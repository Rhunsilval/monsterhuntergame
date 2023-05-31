<template>
    
    <Popover class="sticky top-0 z-10 max-h-24  bg-white">
      <div class="pointer-events-none absolute inset-0 z-30 shadow" aria-hidden="true" />

      <div class="relative z-20">
        <div class=" mx-auto flex max-w-full items-center justify-between px-4
         sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">

<!-- START OVER button -->
          <div class="">
            <router-link :to="'/home'" class="flex">
              <img class="h-8 w-auto sm:h-10 border border-transparent hover:border-slate-600" src="../../assets/images/startover.png" alt="" />
            </router-link>            
          </div>

          <div class=" md:flex md:flex-1 md:items-center md:justify-between">
            <br/>
            <PopoverGroup as="nav" class="flex space-x-10">

<!-- EQUIPPED button -->              
              <Popover v-slot="{ open }">
                <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md px-2 py-2 bg-white text-base font-medium hover:text-gray-900 border border-transparent hover:border-teal-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2']">
                  <span>Equipped</span>
                  <ChevronDownIcon :class="[open ? 'text-gray-600, -rotate-180' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
                </PopoverButton>  
                <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
                  <PopoverPanel class="absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block">
                    
                    <player-equipped></player-equipped>

                  </PopoverPanel>
                </transition>
              </Popover>

<!-- PACKED menu button -->
              <Popover v-slot="{ open }">
                <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium px-2 py-2 border border-transparent hover:text-gray-900 hover:border-teal-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2']">
                  <span>Packed</span>
                  <ChevronDownIcon :class="[open ? 'text-gray-600, -rotate-180' : 'text-gray-400, rotate-0', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
                </PopoverButton>  
                <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
                  <PopoverPanel class="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block">

                      <player-inventory></player-inventory>

                  </PopoverPanel>
                </transition>
              </Popover>
            </PopoverGroup>

<!-- PLAYER STATS buttons -->
            <div class="flex items-center pl-5 w-2/3 md:ml-12 max-h-20 justify-end">
              <div class="text-base font-medium text-gray-600 text-center">Level:<br/> {{ playerStore.playerLevel }}</div>
              <button @click="openStatsModal = !openStatsModal" class="ml-8 inline-flex items-center justify-center rounded-md border border-gray-800 bg-[#305c79] px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-200 hover:text-black">
                View <br/>Stats</button>

              <Popover v-slot="{ open }" class="justify-end ">
                <PopoverButton class="ml-8 px-2 py-2 inline-flex items-center justify-center rounded-md border border-gray-800 shadow-sm bg-slate-400 hover:bg-slate-600 text-base font-medium text-gray-700 hover:text-white">
                  <span>Active Quests</span>
                  <ChevronDownIcon :class="[open ? 'text-gray-600, -rotate-180' : 'text-gray-400, rotate-0', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
                </PopoverButton>  
                <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
                  <PopoverPanel class="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block">

                      <player-active-quests></player-active-quests>

                  </PopoverPanel>
                </transition>
              </Popover>

              <div class="ml-8 inline-flex items-center justify-center rounded-md border border-gray-800 bg-[#d2b55b] px-4 py-2 text-base font-medium text-gray-700 shadow-sm text-center">
                Purse:<br/>{{ playerStore.coinOnHand }}</div>
              <div class="text-center font-medium text-gray-600 ml-8 w-60 ">
                Life: {{ playerStore.playerHealth }}/{{ playerStore.playerStartingHealth }}
                <div class="healthbar">
                  <div class="healthbar_value" :style="playerBarStyle"></div>
                </div>
              </div>
              <div class="text-center font-medium text-gray-600 mx-5 w-60 ">
                Mana: {{ playerStore.playerMana }}/{{ playerStore.playerStartingMana }}
                <div class="manabar">
                  <div class="manabar_value" :style="manaBarStyle"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </Popover>

<!-- stats modal display -->
<TransitionRoot as="template" :show="openStatsModal">
    <Dialog as="div" class="relative z-10" @close="openStatsModal = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-[#305c79] px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
                <div class="mx-auto flex items-center justify-center rounded-3xl pb-8 bg-[url('../assets/images/stone.png')]">
                    <div class="mt-3 bg-white pb-3 w-3/4 text-center border border-black rounded-2xl sm:mt-5">

                        <DialogTitle as="h3" class="leading-6 text-gray-900 text-4xl font-medium pt-5">{{ playerStore.playerId }}'s Stats:</DialogTitle>
                        <div class="mt-2"> 
                            <p class="text-lg text-gray-700 font-semibold pt-4">Player Level: level {{ playerStore.playerLevel }}</p>
                            <p class="text-lg text-gray-700 font-semibold ">Points to Spend: {{ playerStore.playerPoints }}</p>
                            <p class="text-lg text-gray-700 font-semibold ">XP to next levelstate: {{ playerStore.playerNeededXP }} </p>
                            <p class="text-lg text-gray-700 font-semibold ">XP to next levelaction: {{ playerStore.XPUntilNextLevel() }} </p>                   
                            <p class="font-bold text-cyan-700 text-2xl " >{{ playerStore.playerXP }} / {{ playerStore.nextLevel }} </p>
                            <p class="text-lg text-gray-700 font-semibold py-4">Total XP aquired: {{ playerStore.playerTotalXP }} </p>
                            
                            <div class="columns-2 text-left mx-3 ">
                              <div>
                                <p class="text-lg text-gray-700 font-semibold py-4" >Life: <br/> points: {{ playerStore.playerHealth }}</p>
                                <p class="text-lg text-gray-700 font-semibold py-4">Attack: <br/>level {{ playerStore.playerAttack }}</p>
                                <p class="text-lg text-gray-700 font-semibold py-4">Defense: <br/>level {{ playerStore.playerDefense }}</p>
                              </div>
                              <div>
                                <p class="text-lg text-gray-700 font-semibold py-4" >Mana: <br/> points: {{ playerStore.playerMana }}</p>
                                <p class="text-lg text-gray-700 font-semibold py-4">Strength: <br/>level {{ playerStore.playerStrength }}</p>
                                <p class="text-lg text-gray-700 font-semibold py-4">Intelligence: <br/>level {{ playerStore.playerIntelligence }}</p>
                              </div>
                            </div>
                        </div>

                    </div>
                </div>
              </div>
              
              <div class="mt-5 justify items-center">
                <router-link type="button" :to="'/guild'" class="inline-flex w-full justify-center rounded-md border border-transparent bg-slate-400 px-4 py-2 mb-3 text-base font-medium text-black  shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm">
                  Spend Points</router-link>
                <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-orange-800 px-4 py-2 text-base font-medium text-white  shadow-sm hover:bg-[#c21a09] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm" @click="openStatsModal = false">
                  Close Stats</button>
              </div>
            </DialogPanel>
            
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

</template>
  
<script setup>
  import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
  import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'
  import { ref,  computed } from 'vue'
  import { usePlayerStore } from '@/stores/player'
  import PlayerInventory from './PlayerInventory.vue'
  import PlayerEquipped from './PlayerEquipped.vue'
  import PlayerActiveQuests from './PlayerActiveQuests.vue'

  const playerStore = usePlayerStore();

  const openStatsModal = ref(false)

  const playerHealthPercentage = computed(function () {
    return (100 * playerStore.playerHealth)/playerStore.playerStartingHealth;
  })

  const playerManaPercentage = computed(function () {
    return (100 * playerStore.playerMana)/playerStore.playerStartingMana;
  })

  const playerBarStyle = computed(function () {
    return {width: playerHealthPercentage.value + '%'};
  })

  const manaBarStyle = computed(function () {
      return {width: playerManaPercentage.value + '%'};
  })

</script>