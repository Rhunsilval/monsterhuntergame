<template>
    <div class="absolute inset-0 flex">
        <div class="w-1/4 bg-slate-500" />
        <div class="w-3/4 bg-white" />
    </div>
    <div class="relative mx-auto grid grid-cols-4">
<!-- horse -->
        <div class="col-span-1">
            <div class="px-3 py-3 flex justify-center">
                <img src="../../assets/images/horse.png" alt="" class="h-96  w-auto border border-slate-600 "/>
            </div>
            <ul class="grid grid-cols-3 gap-x-5 px-5 py-5">
                <li v-for="item in playerStore.horseInventory.horse_shoes" :key="item.id" class="relative" >
                    <div class="group aspect-w-1 aspect-h-1 w-32 h-32 block overflow-hidden rounded-lg bg-white border border-gray-600 focus-within:ring-2 focus-within:ring-slate-800 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <img :src="item.imageSrc" alt="" />
                    </div>
                </li>
                <li v-for="item in playerStore.horseInventory.horse_bag" :key="item.id" class="relative" >
                    <div class="group aspect-w-1 aspect-h-1 w-32 h-32 block overflow-hidden rounded-lg bg-white border border-gray-600 focus-within:ring-2 focus-within:ring-slate-800 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <img :src="item.imageSrc" alt="" />
                    </div>
                </li>
                <li v-for="item in playerStore.horseInventory.horse_saddle" :key="item.id" class="relative" >
                    <div class="group aspect-w-1 aspect-h-1 w-32 h-32 block overflow-hidden rounded-lg bg-white border border-gray-600 focus-within:ring-2 focus-within:ring-slate-800 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <img :src="item.imageSrc" alt="" />
                    </div>
                </li>
            </ul>
        </div>
<!-- inventory -->
        <div class="col-span-3">
            <h1 class="text-center text-4xl text-teal-800 font-semibold my-3">Items on hand</h1>
            <p class="text-center text-sm">Carry capacity : {{ playerStore.carryCapacity }}</p>
            <div class="text-center grid grid-cols-10">
                <playerinventory-pack
                    v-for="(item, index) in playerStore.playerPacked"
                    :key="item.id"
                    :index="index"
                    :limit_by="limit_by"
                    :id="item.id"
                    :imageSrc="item.imageSrc"
                    :name="item.name"
                    :description="item.description" 
                    :value="item.value"                   
                    @emitEquipItem="checkInventory"
                    @emitUseItem="useItem"
                    @emitDropItem="dropItem"
                ></playerinventory-pack>
            </div>
<!-- unequippable error message -->
            <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
                <div class="flex w-2/3 pt-52 flex-col items-center space-y-4 sm:items-end">
                    <transition 
                        enter-active-class="transform ease-out duration-300 transition" 
                        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" 
                        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" 
                        leave-active-class="transition ease-in duration-100" 
                        leave-from-class="opacity-100" 
                        leave-to-class="opacity-0"
                    >
                        <div v-if="equipshow" class="pointer-events-auto w-44 overflow-hidden rounded-lg bg-teal-400  shadow-lg ring-1 ring-black ring-opacity-30 ">
                            <div class="p-4">
                                <div class="flex items-center">
                                    <div class="">
                                        <div>
                                            <p class="text-center text-xl font-semibold text-gray-900 pb-3">Sorry</p>
                                            <p class="text-center">This item can't be equipped</p>
                                        </div>
                                    </div>
                                    <div class="pl-5">
                                        <button type="button" @click="equipshow = false" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
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
<!-- inventory full message for spells and scripts -->
            <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
                <div class="flex w-2/3 pt-52 flex-col items-center space-y-4 sm:items-end">
                    <transition 
                        enter-active-class="transform ease-out duration-300 transition" 
                        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" 
                        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" 
                        leave-active-class="transition ease-in duration-100" 
                        leave-from-class="opacity-100" 
                        leave-to-class="opacity-0"
                    >
                        <div v-if="spellshow" class="pointer-events-auto w-44 overflow-hidden rounded-lg bg-teal-400  shadow-lg ring-1 ring-black ring-opacity-30 ">
                            <div class="p-4">
                                <div class="flex items-center">
                                    <div class="">
                                        <div>
                                            <p class="text-center text-xl font-semibold text-gray-900 pb-3">Whoops!</p>
                                            <p class="text-center">Looks like you don't have a free space for this item.</p>
                                        </div>
                                    </div>
                                    <div class="pl-5">
                                        <button type="button" @click="spellshow = false" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
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
<!-- unusable error message -->
            <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
                <div class="flex w-2/3 pt-52 flex-col items-center space-y-4 sm:items-end">
                    <transition 
                        enter-active-class="transform ease-out duration-300 transition" 
                        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" 
                        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" 
                        leave-active-class="transition ease-in duration-100" 
                        leave-from-class="opacity-100" 
                        leave-to-class="opacity-0"
                    >
                        <div v-if="useshow" class="pointer-events-auto w-44 overflow-hidden rounded-lg bg-amber-400  shadow-lg ring-1 ring-black ring-opacity-30 ">
                            <div class="p-4">
                                <div class="flex items-center">
                                    <div class="">
                                        <div>
                                            <p class="text-center text-xl font-semibold text-gray-900 pb-3">Sorry</p>
                                            <p class="text-center">This item can't be used</p>
                                        </div>
                                    </div>
                                    <div class="pl-5">
                                        <button type="button" @click="useshow = false" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
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

</template>

<script setup>
    import { ref, computed } from 'vue'
    import { usePlayerStore } from '@/stores/player'
    import PlayerinventoryPack from './PlayerinventoryPack.vue'
    import { XMarkIcon } from '@heroicons/vue/20/solid'
    
    const playerStore = usePlayerStore();

// to know which item is being selected in the rendered playerPack array
    const chosenItemId = ref('')
    const chosenItem = computed(function() {
        return playerStore.playerPacked.find(item => item.id === chosenItemId.value);
    })
// flexibly limits how many items a player can carry
    const limit_by = playerStore.carryCapacity;

// if no inventory space messagges:
    const equipshow = ref(false)
    const spellshow = ref(false)

// becauses script items are limited to 5 on hand, 
// and magic spells are only populated 1x at a time
// i need to check spells inventory spaces before i equip items so that items don't collect
    function checkInventory(id) {
        if(id == undefined) {
            console.log('chosen ID = ' + id);
        }
        chosenItemId.value = id;
        
        if (chosenItem.value.itemSlot === 'player_script') {
            if (playerStore.playerScripts.length >= 5) {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_F1_spell') {
            if (playerStore.playerEquipped.player_F1_spell[0].id != 'F1_spell') {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_F2_spell') {
            if (playerStore.playerEquipped.player_F2_spell[0].id != 'F2_spell') {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_F3_spell') {
            if (playerStore.playerEquipped.player_F3_spell[0].id != 'F3_spell') {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_W1_spell') {
            if (playerStore.playerEquipped.player_W1_spell[0].id != 'W1_spell') {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_W2_spell') {
            if (playerStore.playerEquipped.player_W2_spell[0].id != 'W2_spell') {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_W3_spell') {
            if (playerStore.playerEquipped.player_W3_spell[0].id != 'W3_spell') {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_E1_spell') {
            if (playerStore.playerEquipped.player_E1_spell[0].id != 'E1_spell') {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_E2_spell') {
            if (playerStore.playerEquipped.player_E2_spell[0].id != 'E2_spell') {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_E3_spell') {
            if (playerStore.playerEquipped.player_E3_spell[0].id != 'E3_spell') {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_A1_spell') {
            if (playerStore.playerEquipped.player_A1_spell[0].id != 'A1_spell') {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_A2_spell') {
            if (playerStore.playerEquipped.player_A2_spell[0].id != 'A2_spell') {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_A3_spell') {
            if (playerStore.playerEquipped.player_A3_spell[0].id != 'A3_spell') {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_D1_spell') {
            if (playerStore.playerEquipped.player_D1_spell[0].id != 'D1_spell') {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_D2_spell') {
            if (playerStore.playerEquipped.player_D2_spell[0].id != 'D2_spell') {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_D3_spell') {
            if (playerStore.playerEquipped.player_D3_spell[0].id != 'D3_spell') {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_L1_spell') {
            if (playerStore.playerEquipped.player_L1_spell[0].id != 'L1_spell') {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_L2_spell') {
            if (playerStore.playerEquipped.player_L2_spell[0].id != 'L2_spell') {
                spellshow.value = true;
            } else (equipItem())
        } else if (chosenItem.value.itemSlot === 'player_L3_spell') {
            if (playerStore.playerEquipped.player_L3_spell[0].id != 'L3_spell') {
                spellshow.value = true;
            } else (equipItem())
        } 
        else (equipItem())
    }
    

// to move an item from player inventory to player equipped
// activates message if item is unequippable (based on itemSlot value)
// removes item from playerPacked/inventory array
// swaps item with item in equipped space if item exists there
// items affect user stats
    function equipItem() {
        let x = playerStore.playerPacked.findIndex(item => item.id === chosenItem.value.id);
        if (chosenItem.value.itemSlot === 'null') {
            equipshow.value = true;
        } 
        else {
            if (chosenItem.value.itemSlot === 'horse_shoes') {
                if (playerStore.horseInventory.horse_shoes[0].id === 'shoes') {
                    playerStore.horseInventory.horse_shoes.push(chosenItem.value);
                    playerStore.horseInventory.horse_shoes.splice(0, 1);
                } 
                else {
                    playerStore.swapHolder1.push(playerStore.horseInventory.horse_shoes[0]);
                    playerStore.playerPacked.push(playerStore.swapHolder1[0]);
                    playerStore.swapHolder2.push(chosenItem.value);
                    playerStore.horseInventory.horse_shoes.push(playerStore.swapHolder2[0]);
                    playerStore.horseInventory.horse_shoes.splice(0, 1);
                    playerStore.swapHolder2.splice(0);
                    playerStore.swapHolder1.splice(0);
                }                      
            } else if (chosenItem.value.itemSlot === 'horse_saddle') {
                if (playerStore.horseInventory.horse_saddle[0].id === 'saddle') {
                    playerStore.horseInventory.horse_saddle.push(chosenItem.value);
                    playerStore.horseInventory.horse_saddle.splice(0, 1);
                } 
                else {
                    playerStore.swapHolder1.push(playerStore.horseInventory.horse_saddle[0]);
                    playerStore.playerPacked.push(playerStore.swapHolder1[0]);
                    playerStore.swapHolder2.push(chosenItem.value);
                    playerStore.horseInventory.horse_saddle.push(playerStore.swapHolder2[0]);
                    playerStore.horseInventory.horse_saddle.splice(0, 1);
                    playerStore.swapHolder2.splice(0);
                    playerStore.swapHolder1.splice(0);
                }  
            } else if (chosenItem.value.itemSlot === 'horse_bag') {
                if (playerStore.horseInventory.horse_bag[0].id === 'bag') {
                    playerStore.horseInventory.horse_bag.push(chosenItem.value);
                    playerStore.horseInventory.horse_bag.splice(0, 1);
                } 
                else {
                    playerStore.swapHolder1.push(playerStore.horseInventory.horse_bag[0]);
                    playerStore.playerPacked.push(playerStore.swapHolder1[0]);
                    playerStore.swapHolder2.push(chosenItem.value);
                    playerStore.horseInventory.horse_bag.push(playerStore.swapHolder2[0]);
                    playerStore.horseInventory.horse_bag.splice(0, 1);
                    playerStore.swapHolder2.splice(0);
                    playerStore.swapHolder1.splice(0);
                }
            } else if (chosenItem.value.itemSlot === 'player_helm') {
                if (playerStore.playerEquipped.player_helm[0].id === 'helm') {
                    playerStore.playerEquipped.player_helm.push(chosenItem.value);
                    playerStore.playerEquipped.player_helm.splice(0, 1);
                } 
                else {
                    playerStore.swapHolder1.push(playerStore.playerEquipped.player_helm[0]);
                    playerStore.playerPacked.push(playerStore.swapHolder1[0]);
                    playerStore.swapHolder2.push(chosenItem.value);
                    playerStore.playerEquipped.player_helm.push(playerStore.swapHolder2[0]);
                    playerStore.playerEquipped.player_helm.splice(0, 1);
                    playerStore.swapHolder2.splice(0);
                    playerStore.swapHolder1.splice(0);
                }
            } else if (chosenItem.value.itemSlot === 'player_armor') {
                if (playerStore.playerEquipped.player_armor[0].id === 'armor') {
                    playerStore.playerEquipped.player_armor.push(chosenItem.value);
                    playerStore.playerEquipped.player_armor.splice(0, 1);
                } 
                else {
                    playerStore.swapHolder1.push(playerStore.playerEquipped.player_armor[0]);
                    playerStore.playerPacked.push(playerStore.swapHolder1[0]);
                    playerStore.swapHolder2.push(chosenItem.value);
                    playerStore.playerEquipped.player_armor.push(playerStore.swapHolder2[0]);
                    playerStore.playerEquipped.player_armor.splice(0, 1);
                    playerStore.swapHolder2.splice(0);
                    playerStore.swapHolder1.splice(0);
                }
            } else if (chosenItem.value.itemSlot === 'player_shield') {
                if (playerStore.playerEquipped.player_shield[0].id === 'shield') {
                    playerStore.playerEquipped.player_shield.push(chosenItem.value);
                    playerStore.playerEquipped.player_shield.splice(0, 1);
                } 
                else {
                    playerStore.swapHolder1.push(playerStore.playerEquipped.player_shield[0]);
                    playerStore.playerPacked.push(playerStore.swapHolder1[0]);
                    playerStore.swapHolder2.push(chosenItem.value);
                    playerStore.playerEquipped.player_shield.push(playerStore.swapHolder2[0]);
                    playerStore.playerEquipped.player_shield.splice(0, 1);
                    playerStore.swapHolder2.splice(0);
                    playerStore.swapHolder1.splice(0);
                }
            } else if (chosenItem.value.itemSlot === 'player_gloves') {
                if (playerStore.playerEquipped.player_gloves[0].id === 'gloves') {
                    playerStore.playerEquipped.player_gloves.push(chosenItem.value);
                    playerStore.playerEquipped.player_gloves.splice(0, 1);
                } 
                else {
                    playerStore.swapHolder1.push(playerStore.playerEquipped.player_gloves[0]);
                    playerStore.playerPacked.push(playerStore.swapHolder1[0]);
                    playerStore.swapHolder2.push(chosenItem.value);
                    playerStore.playerEquipped.player_gloves.push(playerStore.swapHolder2[0]);
                    playerStore.playerEquipped.player_gloves.splice(0, 1);
                    playerStore.swapHolder2.splice(0);
                    playerStore.swapHolder1.splice(0);
                }
            } else if (chosenItem.value.itemSlot === 'player_vambraces') {
                if (playerStore.playerEquipped.player_vambraces[0].id === 'vambraces') {
                    playerStore.playerEquipped.player_vambraces.push(chosenItem.value);
                    playerStore.playerEquipped.player_vambraces.splice(0, 1);
                } 
                else {
                    playerStore.swapHolder1.push(playerStore.playerEquipped.player_vambraces[0]);
                    playerStore.playerPacked.push(playerStore.swapHolder1[0]);
                    playerStore.swapHolder2.push(chosenItem.value);
                    playerStore.playerEquipped.player_vambraces.push(playerStore.swapHolder2[0]);
                    playerStore.playerEquipped.player_vambraces.splice(0, 1);
                    playerStore.swapHolder2.splice(0);
                    playerStore.swapHolder1.splice(0);
                }
            } else if (chosenItem.value.itemSlot === 'player_sword') {
                if (playerStore.playerEquipped.player_sword[0].id === 'sword') {
                    playerStore.playerEquipped.player_sword.push(chosenItem.value);
                    playerStore.playerEquipped.player_sword.splice(0, 1);
                } 
                else {
                    playerStore.swapHolder1.push(playerStore.playerEquipped.player_sword[0]);
                    playerStore.playerPacked.push(playerStore.swapHolder1[0]);
                    playerStore.swapHolder2.push(chosenItem.value);
                    playerStore.playerEquipped.player_sword.push(playerStore.swapHolder2[0]);
                    playerStore.playerEquipped.player_sword.splice(0, 1);
                    playerStore.swapHolder2.splice(0);
                    playerStore.swapHolder1.splice(0);
                }
            } else if (chosenItem.value.itemSlot === 'player_boots') {
                if (playerStore.playerEquipped.player_boots[0].id === 'boots') {
                    playerStore.playerEquipped.player_boots.push(chosenItem.value);
                    playerStore.playerEquipped.player_boots.splice(0, 1);
                } 
                else {
                    playerStore.swapHolder1.push(playerStore.playerEquipped.player_boots[0]);
                    playerStore.playerPacked.push(playerStore.swapHolder1[0]);
                    playerStore.swapHolder2.push(chosenItem.value);
                    playerStore.playerEquipped.player_boots.push(playerStore.swapHolder2[0]);
                    playerStore.playerEquipped.player_boots.splice(0, 1);
                    playerStore.swapHolder2.splice(0);
                    playerStore.swapHolder1.splice(0);
                }
                
            } else if (chosenItem.value.itemSlot === 'player_necklace') {
                if (playerStore.playerEquipped.player_necklace[0].id === 'necklace') {
                    playerStore.playerEquipped.player_necklace.push(chosenItem.value);
                    playerStore.playerEquipped.player_necklace.splice(0, 1);
                } 
                else {
                    playerStore.swapHolder1.push(playerStore.playerEquipped.player_necklace[0]);
                    playerStore.playerPacked.push(playerStore.swapHolder1[0]);
                    playerStore.swapHolder2.push(chosenItem.value);
                    playerStore.playerEquipped.player_necklace.push(playerStore.swapHolder2[0]);
                    playerStore.playerEquipped.player_necklace.splice(0, 1);
                    playerStore.swapHolder2.splice(0);
                    playerStore.swapHolder1.splice(0);
                }
            } else if (chosenItem.value.itemSlot === 'player_ring') {
                if (playerStore.playerEquipped.player_ring[0].id === 'ring') {
                    playerStore.playerEquipped.player_ring.push(chosenItem.value);
                    playerStore.playerEquipped.player_ring.splice(0, 1);
                } 
                else {
                    playerStore.swapHolder1.push(playerStore.playerEquipped.player_ring[0]);
                    playerStore.playerPacked.push(playerStore.swapHolder1[0]);
                    playerStore.swapHolder2.push(chosenItem.value);
                    playerStore.playerEquipped.player_ring.push(playerStore.swapHolder2[0]);
                    playerStore.playerEquipped.player_ring.splice(0, 1);
                    playerStore.swapHolder2.splice(0);
                    playerStore.swapHolder1.splice(0);
                }
            } else if (chosenItem.value.itemSlot === 'player_belt') {
                if (playerStore.playerEquipped.player_belt[0].id === 'belt') {
                    playerStore.playerEquipped.player_belt.push(chosenItem.value);
                    playerStore.playerEquipped.player_belt.splice(0, 1);
                } 
                else {
                    playerStore.swapHolder1.push(playerStore.playerEquipped.player_belt[0]);
                    playerStore.playerPacked.push(playerStore.swapHolder1[0]);
                    playerStore.swapHolder2.push(chosenItem.value);
                    playerStore.playerEquipped.player_belt.push(playerStore.swapHolder2[0]);
                    playerStore.playerEquipped.player_belt.splice(0, 1);
                    playerStore.swapHolder2.splice(0);
                    playerStore.swapHolder1.splice(0);
                }
            } else if (chosenItem.value.itemSlot === 'player_F1_spell') {
                    playerStore.playerEquipped.player_F1_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_F1_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_F2_spell') {
                    playerStore.playerEquipped.player_F2_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_F2_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_F3_spell') {
                    playerStore.playerEquipped.player_F3_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_F3_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_W1_spell') {
                    playerStore.playerEquipped.player_W1_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_W1_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_W2_spell') {
                    playerStore.playerEquipped.player_W2_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_W2_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_W3_spell') {
                    playerStore.playerEquipped.player_W3_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_W3_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_E1_spell') {
                    playerStore.playerEquipped.player_E1_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_E1_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_E2_spell') {
                    playerStore.playerEquipped.player_E2_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_E2_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_E3_spell') {
                    playerStore.playerEquipped.player_E3_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_E3_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_A1_spell') {
                    playerStore.playerEquipped.player_A1_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_A1_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_A2_spell') {
                    playerStore.playerEquipped.player_A2_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_A2_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_A3_spell') {
                    playerStore.playerEquipped.player_A3_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_A3_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_D1_spell') {
                    playerStore.playerEquipped.player_D1_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_D1_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_D2_spell') {
                    playerStore.playerEquipped.player_D2_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_D2_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_D3_spell') {
                    playerStore.playerEquipped.player_D3_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_D3_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_L1_spell') {
                    playerStore.playerEquipped.player_L1_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_L1_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_L2_spell') {
                    playerStore.playerEquipped.player_L2_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_L2_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_L3_spell') {
                    playerStore.playerEquipped.player_L3_spell.push(chosenItem.value);
                    playerStore.playerEquipped.player_L3_spell.splice(0, 1);
            } else if (chosenItem.value.itemSlot === 'player_script') {
                    playerStore.playerScripts.push(chosenItem.value)                   
            }             
            playerStore.playerPacked.splice(x, 1);
            playerStore.getAttackValues();
            playerStore.getDefenseValues();
            playerStore.getStrengthValues();
            playerStore.getExtraHealth();
            playerStore.getExtraMana();
            playerStore.getIntelligenceValues();
            playerStore.getCarryCapacity();
        }      
    }

// to use one-time-use items
// item affects user stats
// item removed from player inventory after use
// error message activated if item is unusable
    const useshow = ref(false);
    function useItem(id) {
        if(id!==undefined) {
            console.log('chosen ID = ' + id);
        }
        chosenItemId.value = id;
        let x = playerStore.playerPacked.findIndex(item => item.id === chosenItem.value.id);    

        if (chosenItem.value.itemUse === 'null') {
            useshow.value = true;
        } else {
            if (chosenItem.value.itemUse === 'healing') {
                if ((playerStore.playerHealth + chosenItem.value.life) > playerStore.playerBaseHealth) {
                    playerStore.playerHealth = playerStore.playerBaseHealth;
                } else {
                    playerStore.playerHealth = (playerStore.playerHealth + chosenItem.value.life);
                }
            }
            else if (chosenItem.value.itemUse === 'health') {
                playerStore.playerHealth = (playerStore.playerHealth + chosenItem.value.life);
                playerStore.playerStartingHealth = (playerStore.playerStartingHealth + chosenItem.value.life);
            }
            else if (chosenItem.value.itemUse === 'manaing') {
                if ((playerStore.playerMana + chosenItem.value.mana) > playerStore.playerBaseMana) {
                    playerStore.playerMana = playerStore.playerBaseMana;
                } else {
                    playerStore.playerMana = (playerStore.playerMana + chosenItem.value.mana);
                }
            }
            else if (chosenItem.value.itemUse === 'mana') {
                playerStore.playerMana = (playerStore.playerMana + chosenItem.value.mana);
                playerStore.playerStartingMana = (playerStore.playerStartingMana + chosenItem.value.mana);
            }
            else if (chosenItem.value.itemUse === 'attacking') {
                playerStore.tempAttackBonus = (playerStore.tempAttackBonus + chosenItem.value.attack);            
            } 
            else if (chosenItem.value.itemUse === 'attack') {
                playerStore.playerAttack = (playerStore.playerAttack + chosenItem.value.attack);
                playerStore.playerBaseAttack= (playerStore.playerBaseAttack + chosenItem.value.attack);
            }
            else if (chosenItem.value.itemUse === 'defending') {
                playerStore.tempDefenseBonus = (playerStore.tempDefenseBonus + chosenItem.value.defense);            
            }
            else if (chosenItem.value.itemUse === 'defense') {
                playerStore.playerDefense = (playerStore.playerDefense + chosenItem.value.defense);
                playerStore.playerBaseDefense= (playerStore.playerBaseDefense + chosenItem.value.defense);
            }
            else if (chosenItem.value.itemUse === 'strengthening') {
                playerStore.tempStrengthBonus = (playerStore.tempStrengthBonus + chosenItem.value.strength);            
            }
            else if (chosenItem.value.itemUse === 'strength') {
                playerStore.playerStrength = (playerStore.playerStrength + chosenItem.value.strength);
                playerStore.playerBaseStrength = (playerStore.playerBaseStrength + chosenItem.value.strength);
            }
            else if (chosenItem.value.itemUse === 'smarting') {
                playerStore.tempIntelligenceBonus = (playerStore.tempIntelligenceBonus + chosenItem.value.intelligence);            
            }
            else if (chosenItem.value.itemUse === 'smart') {
                playerStore.playerIntelligence = (playerStore.playerIntelligence + chosenItem.value.intelligence);
                playerStore.playerBaseIntelligence = (playerStore.playerBaseIntelligence + chosenItem.value.intelligence);
            }
            else if (chosenItem.value.itemUse === 'multi') {
                playerStore.playerHealth = (playerStore.playerHealth + chosenItem.value.life);
                // playerStore.playerBaseHealth = (playerStore.playerBaseHealth + chosenItem.value.life);
                playerStore.playerBaseHealth = playerStore.playerHealth;
                playerStore.playerStartingHealth = (playerStore.playerStartingHealth + chosenItem.value.life);
                // playerStore.playerBaseStartingHealth = (playerStore.playerBaseStartingHealth + chosenItem.value.life);
                playerStore.playerBaseStartingHealth = playerStore.playerStartingHealth;

                playerStore.playerMana = (playerStore.playerMana + chosenItem.value.mana);
                // playerStore.playerBaseMana = (playerStore.playerBaseMana + chosenItem.value.mana);
                playerStore.playerBaseMana = playerStore.playerMana;
                playerStore.playerStartingMana = (playerStore.playerStartingMana + chosenItem.value.mana);
                // playerStore.playerBaseStartingMana = (playerStore.playerBaseStartingMana + chosenItem.value.mana);
                playerStore.playerBaseStartingMana = playerStore.playerStartingMana;
                
                playerStore.playerAttack = (playerStore.playerAttack + chosenItem.value.attack);
                playerStore.playerBaseAttack = (playerStore.playerBaseAttack + chosenItem.value.attack);
                playerStore.playerDefense = (playerStore.playerDefense + chosenItem.value.defense);
                playerStore.playerBaseDefense = (playerStore.playerBaseDefense + chosenItem.value.defense);
                playerStore.playerStrength = (playerStore.playerStrength + chosenItem.value.strength);
                playerStore.playerBaseStrength = (playerStore.playerBaseStrength + chosenItem.value.strength);
                playerStore.playerIntelligence = (playerStore.playerIntelligence + chosenItem.value.intelligence);
                playerStore.playerBaseIntelligence = (playerStore.playerBaseIntelligence + chosenItem.value.intelligence);
            }
            playerStore.playerPacked.splice(x, 1);
            playerStore.getAttackValues();
            playerStore.getDefenseValues();
            playerStore.getStrengthValues();
            playerStore.getExtraHealth();
            playerStore.getExtraMana();
            playerStore.getIntelligenceValues();
        }
    } 

// to drop unwanted items from player inventory
    function dropItem(id) {
        if(id!==undefined) {
            console.log('chosen ID = ' + id);
        }
        chosenItemId.value = id;
        let x = playerStore.playerPacked.findIndex(item => item.id === chosenItem.value.id);
        playerStore.playerPacked.splice(x, 1);
    }

</script>