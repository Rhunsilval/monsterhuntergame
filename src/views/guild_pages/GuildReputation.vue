<template>
    <the-header></the-header>
    <div class="grid grid-cols-2">
<!-- quests -->
        <div class="bg-black">
            <div class=" w-2/3 mr-80 "> 
                <h1 class="text-5xl font-bold text-center text-amber-700 my-16">Quest Log</h1>
                <div class="flex justify-center">
                    <div class="bg-amber-600 bg-opacity-60 py-8 border border-gray-600 w-11/12 rounded-3xl ">
                        <div class=" text-xl font-serif flex justify-center"> 
                            <div class="h-80 w-5/6 bg-gray-500 border border-black rounded-3xl text-center "> 
                                <p class="my-10">Active Quests</p>
                                <div> 
                                    <ul> 
                                        <li v-for="quest in playerStore.playerActiveQuests" :key="quest.id">
                                            <div class="grid grid-cols-3"> 
                                                <div class="flex justify-center"> 
                                                    <img :src="quest.smallIcon" class="w-14 h-14 mt-7 border border-gray-500 rounded-full" />
                                                </div>
                                                <div class="grid grid-cols-1 gap-y-0"> 
                                                    <p>{{ quest.title }}</p>
                                                    <p class="text-sm">{{ quest.description }}</p>                                                    
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
                                <p class="my-10">Completed Quests</p>
                                <div> 
                                    <ul> 
                                        <li v-for="quest in playerStore.playerCompletedQuests" :key="quest.id">
                                            <div class="grid grid-cols-2"> 
                                                <div class="flex justify-center"> 
                                                    <img :src="quest.smallIcon" class="w-14 h-14 border border-gray-500 rounded-full" />
                                                </div>
                                                <div class="grid grid-cols-1 gap-y-0 -ml-20 mr-20"> 
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
        <div class="border-l-4 border-amber-700 bg-[url('../assets/images/allpurpose/papyrus.png')] bg-cover ">
            <div class=" w-2/3 ml-80 "> 
                <h1 class="text-5xl font-bold text-center my-16">Monsters Vanquished</h1>
                <div class="flex justify-center">
                    <div class="bg-amber-600 bg-opacity-60 py-8 border border-gray-600 w-11/12 rounded-3xl ">
                        <div class=" text-xl font-serif flex justify-center"> 
                            <table class="table-auto border border-black ">
                                <thead class="text-left bg-gray-500">
                                    <tr>
                                        <th class="pl-5 py-3 pr-5">Monster</th>
                                        <th class="pr-5 py-3">Count</th>
                                        <th class="pr-5 py-3">Points</th>
                                    </tr>
                                </thead>
                                <tbody>
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
        <div class="flex w-2/3 pt-96 pr-32 flex-col items-center space-y-4 sm:items-end">
            <transition 
                enter-active-class="transform ease-out duration-300 transition" 
                enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" 
                enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" 
                leave-active-class="transition ease-in duration-100" 
                leave-from-class="opacity-100" 
                leave-to-class="opacity-0"
            >
                <div class="pointer-events-auto w-1/3 overflow-hidden rounded-lg bg-amber-600 shadow-lg ring-1 ring-black ring-opacity-30 ">
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
                                    <div class="mt-5 grid grid-cols-1">
                                        <div class="flex justify-center">
                                            <div class="relative flex self-center mt-10 -mb-6">
                                            <router-link :to="'/guild'" type="button" class="relative w-1/2 whitespace-nowrap rounded-md border border-gray-600 bg-gray-400 hover:bg-gray-300 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">
                                                Return to Guild Lobby</router-link>
                                            </div>
                                        </div>
                                        <div class="flex self-center rounded-lg p-0.5 pb-20 sm:mt-8">
                                            <router-link :to="'/village'" type="button" class="whitespace-nowrap rounded-md border border-gray-600 bg-[#a6bf8e] hover:bg-green-100 py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-1/2 px-3">
                                            Explore the Village</router-link>
                                            <router-link :to="'/map'" type="button" class=" ml-1 whitespace-nowrap rounded-md border border-gray-600 bg-[#305c79] hover:bg-blue-200 hover:text-black  py-2 text-sm font-medium text-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-1/2 px-3">
                                            Hunt for Monsters</router-link>
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
</template>

<script setup>
    import { usePlayerStore } from '@/stores/player';
    import { computed } from 'vue';

    const playerStore = usePlayerStore();

    const validMonsterLog = computed(function() {
        let monsterList = playerStore.playerKillLog;
        return (monsterList = monsterList.filter(item => item.count > 0))
    })

    const questPoints = playerStore.playerCompletedQuests.map(questAmount).reduce(sum); 
    const victoryPoints = playerStore.playerKillLog.map(victoryAmount).reduce(sum);
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
                playerStore.playerReputation < 50 ? 'Recognized Nobody' :
                playerStore.playerReputation < 75 ? 'Up-and-comer' :
                playerStore.playerReputation < 100 ? 'Person of Interest' :
                playerStore.playerReputation < 150 ? 'Smalltown Hero' :
                playerStore.playerReputation < 200 ? 'Hunter Extraordinaire' :
                playerStore.playerReputation < 300 ? 'Respectable' :
                playerStore.playerReputation < 400 ? 'Hero' : 'Legend'
    })
        
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
</style>