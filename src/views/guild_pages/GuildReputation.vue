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
                                <p class="mt-10">Active Quests</p>
                            </div>
                        </div>                        
                        <div class=" text-xl font-serif flex justify-center mt-5"> 
                            <div class="h-80 w-5/6 bg-gray-500 border border-black rounded-3xl text-center "> 
                                <p class="mt-10">Completed Quests</p>
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
                    <div class="bg-amber-600 bg-opacity-60 py-8 border border-gray-600 w-2/3 rounded-3xl ">
                        <div class=" text-xl font-serif flex justify-center"> 
                            <table class="table-auto border border-black">
                                <thead class="text-left bg-gray-500">
                                    <tr>
                                        <th class="pl-5 pt-3">Monster</th>
                                        <th class="pr-5 pt-3">Count</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in playerStore.playerKillLog" :key="item.id" class="bg-gray-500">
                                        <td class="pl-5">{{ item.name }}</td>
                                        <td class="text-center">{{ item.count }}</td>
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
                                <p class="text-center text-5xl font-bold pb-2">410 </p>
                                <p class="text-center mb-5">Title </p>
                                <div class="grid grid-cols-2 mb-6"> 
                                    <div class="text-center mr-3"> 
                                        <p class="font-bold text-2xl">Quest Points</p>
                                        <p class="font-serif text-3xl">200</p>
                                    </div>
                                    <div class="text-center ml-3"> 
                                        <p class="font-bold text-2xl -ml-2 ">Victory Points</p>
                                        <p class="font-serif text-3xl">210</p>
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

    const playerStore = usePlayerStore();
</script>