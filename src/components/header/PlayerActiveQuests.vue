<template>
  <div class="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
    <div class="absolute inset-0">
      <div class="h-1/3 bg-white sm:h-2/3" />
    </div>
    <div class="relative mx-auto -mt-10 bg-white max-h-fit overflow-y-scroll">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your active quests</h2>
      </div>
      <div class="mx-auto mt-5 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-8">
        <div v-for="quest in playerStore.playerActiveQuests" :key="quest.id" class="flex flex-col overflow-hidden rounded-lg shadow-lg h-80 border border-gray-300 ">
          <div class="flex-shrink-0">
            <img class="h-40  w-full object-cover border-b-gray-600 border-b-2" :src="quest.smallIcon" alt="" />
          </div>
          <div class="flex justify-between bg-white p-2 overflow-y-scroll">
            <div class="text-center">             
              <p class="text-base -mt-2 font-semibold text-gray-900">{{ quest.title }}</p>
              <p class="mt-3 text-xs text-gray-500">{{ quest.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { usePlayerStore } from '@/stores/player';

  const playerStore = usePlayerStore();
  
</script>