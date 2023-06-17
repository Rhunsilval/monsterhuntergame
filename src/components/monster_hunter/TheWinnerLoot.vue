<template>    
    <div class="bg-white ">
        <div class="mx-auto py-3 px-3 pb-14 ">
            <h2 class="text-lg font-medium text-gray-900">You defeated <span class="font-bold text-xl"> {{ lootStore.monsterName }} </span>!</h2>
            <p class=""> You find: </p>
            <div class="mt-6 grid grid-cols-3 gap-x-2 gap-y-12 ">
                <div v-for="item in lootStore.lootCoins" :key="item.id" class="group relative">
                    <button @click="collectCoins">
                        <img :src="item.imageSrc" class="h-32 w-24 object-cover  object-center " />
                        <div class="flex items-end opacity-0 group-hover:opacity-100 -mt-16" aria-hidden="true">
                            <div class="w-full bg-white bg-opacity-75 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                               {{ item.description }} {{ item.name }}
                            </div>
                        </div>
                    </button>
                </div>
                <div v-for="item in lootStore.lootList" :key="item.id" class="group relative">
                    <button @click="collectLoot(item.id)">
                        <img :src="item.imageSrc" class="h-32 w-24 object-cover  object-center " />
                        <div class="flex items-end opacity-0 group-hover:opacity-100 -mt-16" aria-hidden="true">
                            <div class="w-full bg-white bg-opacity-75 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                                {{ item.name }}
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div v-if="openError" class="mt-3">
                <img src="../../assets/images/allpurpose/bagsfull.png" alt="" class="mt-8 rounded-2xl block mx-auto border border-gray-400 aspect-square h-40 " aria-hidden="true" />
                <h1 class="font-semibold">Looks like you're full up</h1>
                <p class="text-sm">There's no room left in your inventory.</p>
                <button @click="openError = false" class="px-2 py-2 mt-2 border border-gray-500 rounded-lg bg-slate-300 hover:bg-slate-500 hover:text-white hover:border-black hover:border-2">
                    Okay</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { useLootStore } from '@/stores/loot';
    import { usePlayerStore } from '@/stores/player';
    const lootStore = useLootStore();
    const playerStore = usePlayerStore();

    function collectCoins() {
        playerStore.coinOnHand = playerStore.coinOnHand + lootStore.lootCoins[0].amount;
        lootStore.lootCoins.splice(0);
    }

    const openError = ref(false)
    const chosenItemId = ref('')
    const chosenItem = computed(function() {
        return lootStore.lootList.find(item => item.id === chosenItemId.value)
    })

    function collectLoot(id) {
        if (playerStore.playerPacked.length >= playerStore.carryCapacity) {
            openError.value = true;
        } else {
            if(id!==undefined) {
                console.log('chosen ID = ' + id);
            }
            chosenItemId.value = id;
            let x = lootStore.lootList.findIndex(item => item.id === chosenItem.value.id); 

            playerStore.playerPacked.push(chosenItem.value);
            // playerStore.playerPacked.splice(0, 1);
            lootStore.lootList.splice(x, 1);
        }
    }

</script>