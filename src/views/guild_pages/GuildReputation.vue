<template>
    <the-header></the-header>
    <div class="grid grid-cols-2">
<!-- quests -->
        <div class="bg-black flex justify-center">
            <div class=" w-2/3 mr-20"> 
                <h1 class="text-5xl font-bold text-center text-amber-700 my-16">Quest Log</h1>
                <div class="flex justify-center">
                    <div class="bg-amber-600 bg-opacity-60 py-8 border border-gray-600 w-11/12 rounded-3xl ">
                        <div class=" text-xl font-serif flex justify-center"> 
                            <div class="h-80 w-5/6 bg-gray-500 border border-black rounded-3xl text-center "> 
                                <p class="my-10 text-2xl font-semibold">Active Quests</p>
                                <div class="h-56 max-h-56 -mt-5 overflow-y-scroll"> 
                                    <ul> 
                                        <li v-for="quest in playerStore.playerActiveQuests" :key="quest.id" class="border border-x-transparent border-y-slate-400 py-2">
                                            <div class="grid grid-cols-3"> 
                                                <div class="flex justify-start"> 
                                                    <img :src="quest.smallIcon" class="w-14 h-14 ml-2 mt-7 border border-gray-600 rounded-full" />
                                                </div>
                                                <div class="grid grid-cols-1 gap-y-0 -ml-16 -mr-5"> 
                                                    <p>{{ quest.title }}</p>
                                                    <p class="text-xs">{{ quest.description }}</p>                                                    
                                                </div>
                                                <div> 
                                                    <p class="mt-7">Points: {{ quest.questPoints }}</p>
                                                </div>
                                            </div> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>                        
                        <div class=" text-xl font-serif flex justify-center mt-5"> 
                            <div class="h-80 w-5/6 bg-gray-500 border border-black rounded-3xl text-center "> 
                                <p class="my-10 text-2xl font-semibold">Completed Quests</p>
                                <div class="h-56 max-h-56 -mt-5 overflow-y-scroll"> 
                                    <ul> 
                                        <li v-for="quest in playerStore.playerCompletedQuests" :key="quest.id">
                                            <div class="grid grid-cols-2 my-1 border border-b-gray-600 border-t-transparent border-x-transparent"> 
                                                <div class="flex justify-start items-center"> 
                                                    <img :src="quest.smallIcon" class="w-14 h-14 ml-3 border border-gray-500 rounded-full" />
                                                </div>
                                                <div class="grid grid-cols-1 gap-y-0 -ml-40 mr-3 mb-2"> 
                                                    <p>{{ quest.title }}</p>
                                                    <p>Points: {{ quest.questPoints }}</p>
                                                </div>
                                            </div> 
                                        </li>
                                    </ul>
                                </div>
                            </div>                            
                            
                        </div>                        
                    </div>
                </div>
            </div>
        </div>

<!-- kill log -->
        <div class="border-l-4 border-amber-700 bg-[url('../assets/images/allpurpose/papyrus.png')] bg-cover overflow-hidden flex justify-center ">
            <div class=" w-2/3 ml-20"> 
                <h1 class="text-5xl font-bold text-center my-16">Monsters Vanquished</h1>
                <div class="flex justify-center">
                    <div class="bg-amber-600 bg-opacity-60 py-8 border border-gray-600 w-11/12 rounded-3xl ">
                        <div class=" text-xl font-serif flex justify-center"> 
                            <table class="table-auto border border-black max-h-screen">
                                <thead class="text-left bg-gray-500 ">
                                    <tr>
                                        <th class="pl-5 py-3 pr-5">Monster</th>
                                        <th class="pr-5 py-3">Count</th>
                                        <th class="pr-5 py-3">Points</th>
                                    </tr>
                                </thead>
                                <tbody class="relative align-top overflow-y-scroll">
                                    <tr v-for="item in validMonsterLog" :key="item.id" :class="item.place" class="bg-gray-500">
                                        <td class="pl-5 pb-3">{{ item.name }}</td>
                                        <td class="text-center pb-3 text-2xl">{{ item.count }}</td>
                                        <td class="text-center pb-3 text-2xl">{{ item.points }}</td>
                                    </tr>
                                </tbody>
                            </table>                            
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </div>

<!-- reputation points calcuator -->
    <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
        <div class="flex flex-col justify-center items-center w-full pt-64 space-y-4">
            <transition 
                enter-active-class="transform ease-out duration-300 transition" 
                enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" 
                enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" 
                leave-active-class="transition ease-in duration-100" 
                leave-from-class="opacity-100" 
                leave-to-class="opacity-0"
            >
                <div class="pointer-events-auto w-1/5 overflow-hidden rounded-lg bg-amber-600 shadow-lg ring-1 ring-black ring-opacity-30 ">
                    <div class="p-4">
                        <div class="flex justify-center">
                            <div class="">
                                <h1 class="text-center text-3xl font-semibold font-serif text-gray-900 pb-1">Reputation</h1>
                                <p class="text-center text-5xl font-bold pb-2">{{ playerStore.playerReputation }} </p>
                                <p class="text-center mb-5">{{ reputationTitle }} </p>
                                <div class="grid grid-cols-2 mb-6"> 
                                    <div class="text-center mr-3"> 
                                        <p class="font-bold text-2xl">Quest Points</p>
                                        <p class="font-serif text-3xl">{{ questPoints }}</p>
                                    </div>
                                    <div class="text-center ml-3"> 
                                        <p class="font-bold text-2xl -ml-2 ">Victory Points</p>
                                        <p class="font-serif text-3xl">{{ victoryPoints }}</p>
                                    </div>
                                </div>
                                <div class="flex justify-center -mt-12 -mb-12">
                                    <div class=" grid grid-cols-1">
                                        <div class="flex justify-center">
                                            <div class="relative flex self-center mt-10 -mb-6">
                                                <button @click="openListModal = !openListModal" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-[#d2b55b] hover:bg-amber-200  py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                                                    View Guild's List of Legends</button>
                                            </div>
                                        </div>
                                        <div class="flex justify-center">
                                            <div class="relative flex self-center mt-10 -mb-6">
                                                <router-link :to="'/guild'" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-gray-400 hover:bg-gray-300 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                                                    Return to Guild Lobby</router-link>
                                            </div>
                                        </div>
                                        <div class="flex self-center text-center rounded-lg p-0.5 pb-20 sm:mt-8">
                                            <router-link :to="'/village'" type="button" class="whitespace-nowrap rounded-md border border-gray-600 bg-[#a6bf8e] hover:bg-green-100 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-1/2 px-3">
                                            Explore the <br/> Village</router-link>
                                            <router-link :to="'/map'" type="button" class=" ml-1 whitespace-nowrap rounded-md border border-gray-600 bg-[#305c79] hover:bg-blue-200 hover:text-black  py-2 text-sm font-medium text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-1/2 px-3">
                                            Hunt for <br/> Monsters</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>

<!-- list of legends modal and component -->
    <TransitionRoot as="template" :show="openListModal">
    <Dialog as="div" class="relative z-10" @close="openListModal = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-[url('../assets/images/quests/The_Guild_wall.png')] px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
                <div class="mx-auto flex items-center justify-center rounded-3xl pb-8 bg-[url('../assets/images/quests/The_Guild_list.png')]">
                    <div class="mt-3 bg-[#d2b55b] pb-3 w-2/3 text-center border border-black rounded-2xl sm:mt-5">
                        <DialogTitle as="h3" class="text-2xl font-medium leading-6 text-gray-900 mt-3">List of Legends</DialogTitle>
                        <div class="flex justify-center"> 
                            <div class="w-40 border border-t-4 border-t-black border-b-transparent border-x-transparent mt-3"></div>
                        </div>
                        
                        <div class="mt-2">
                            <leader-board></leader-board>
                        </div>
                    </div>
                </div>
              </div>
              <div class="mt-5 justify items-center">
                <button @click="openListModal = false" type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-orange-800 px-4 py-2 text-base font-medium text-white  shadow-sm hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm">
                  Close List</button>
              </div>
            </DialogPanel>            
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
    import { usePlayerStore } from '@/stores/player';
    import { computed, ref } from 'vue';
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
    import LeaderBoard from '../../components/guild/LeaderBoard.vue';

    const playerStore = usePlayerStore();

    const validMonsterLog = computed(function() {
        let monsterList = playerStore.playerKillLog;
        return (monsterList = monsterList.filter(item => item.count > 0))
    })

    const questPoints = playerStore.playerCompletedQuests.map(questAmount).reduce(sum,0); 
    const victoryPoints = playerStore.playerKillLog.map(victoryAmount).reduce(sum,0);
    playerStore.playerReputation = (questPoints + victoryPoints);

    function questAmount(item) {
        return item.questPoints;
    }
    function victoryAmount(item) {
        return item.count * item.points;
    }
    function sum(prev,next) {
        return prev + next;
    }

    const reputationTitle = computed(function() {
        return  playerStore.playerReputation < 25 ? 'Unknown Nobody' : 
                playerStore.playerReputation < 100 ? 'Recognized Nobody' :
                playerStore.playerReputation < 200 ? 'Up-and-comer' :
                playerStore.playerReputation < 400 ? 'Person of Interest' :
                playerStore.playerReputation < 800 ? 'Smalltown Hero' :
                playerStore.playerReputation < 1600 ? 'Hunter Extraordinaire' :
                playerStore.playerReputation < 3200 ? 'Respectable' :
                playerStore.playerReputation < 6000 ? 'Hero' : 'Legend'
    })

    const openListModal = ref(false);
        
</script>

<style scoped>
    .desert {
        color: #ff9e3d
    }
    .forest {
        color: #42e0d1
    }
    .jungle {
        color: #ff6fff
    }
    .grassland {
        color: #fdd128
    }
    .marshes {
        color: #3bb143
    }
    .mountain {
        color: #b8d4ff
    }
    .swamp {
        color: #c7ea46
    }
    .farmland {
        color: #8a3324
    }
</style>