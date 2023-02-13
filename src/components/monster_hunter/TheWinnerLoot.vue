<template>    
    <div class="bg-white ">
        <div class="mx-auto py-3 px-3 pb-14 ">
            <h2 class="text-lg font-medium text-gray-900">You defeated <span class="font-bold text-xl"> {{ lootStore.monsterName }} </span>!</h2>
            <p class=""> You find: </p>
            <div class="mt-6 grid grid-cols-3 gap-x-2 gap-y-9">
                <div v-for="item in lootStore.lootCoins" :key="item.id" class="group relative">
                    <button>
                        <img :src="item.imageSrc" class="h-32 w-24 object-cover  object-center " />
                        <div class="flex items-end opacity-0 group-hover:opacity-100 -mt-16" aria-hidden="true">
                            <div class="w-full bg-white bg-opacity-75 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                               {{ item.description }} {{ item.name }}
                            </div>
                        </div>
                    </button>
                </div>
                <div v-for="item in lootStore.lootList" :key="item.id" class="group relative">
                    <button>
                        <img :src="item.imageSrc" class="h-32 w-24 object-cover  object-center " />
                        <div class="flex items-end opacity-0 group-hover:opacity-100 -mt-16" aria-hidden="true">
                            <div class="w-full bg-white bg-opacity-75 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                                {{ item.name }}
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useLootStore } from '@/stores/loot'
    const lootStore = useLootStore();

</script>