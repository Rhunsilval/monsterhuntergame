<template>
    <div class="absolute inset-0 flex">
        <div class="w-1/4 bg-slate-500" />
        <div class="w-3/4 bg-white" />
    </div>
    <div class="relative mx-auto grid grid-cols-4">
<!-- horse -->
        <div class="col-span-1">
            <div class="px-3 py-3 flex justify-center">
                <img src="../assets/images/horse.png" alt="" class="h-96  w-auto border border-slate-600 "/>
            </div>
            <ul class="grid grid-cols-3 gap-x-5 px-5 py-5">
                <li v-for="item in playerStore.horseInventory" :key="item.id" class="relative" >
                    <div class="group aspect-w-1 aspect-h-1 w-32 h-32 block overflow-hidden rounded-lg bg-white focus-within:ring-2 focus-within:ring-slate-800 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <img :src="item.imageSrc" alt="" />
                    </div>
                </li>
            </ul>
        </div>
<!-- inventory -->
        <div class="col-span-3">
            <h1 class="text-center text-4xl text-teal-800 font-semibold my-3">Items on hand</h1>
            <p class="text-center text-sm">Carry capacity : {{ limit_by }}</p>
            <div class="text-center grid grid-cols-10">
            <!-- <div class="text-center inline-flex"> -->
                <playerinventory-pack
                    v-for="(item, index) in playerStore.playerPacked"
                    :key="item.id"
                    :index="index"
                    :id="item.id"
                    :imageSrc="item.imageSrc"
                    :limit_by="limit_by"
                    @emit-equip-item="equipItem"
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
    // NEED TO figure out how to prevent a sale or item pickup if inventory max is reached
    const limit_by = playerStore.carryCapacity;
    
    // to control show/hide of error messages
    const equipshow = ref(false)

    // to move an item from player inventory to player equipped
    // removes item from playerPacked/inventory array
            // i want it so that if an item is present in the equipped slot, the data switches with the playerPacked array
            // instead of just vanishing
    // activates message if item is unequippable (based on itemSlot value)
    function equipItem(id) {
        chosenItemId.value = id;
        let x = playerStore.playerPacked.findIndex(item => item.itemSlot === chosenItem.value.itemSlot);  

        if (chosenItem.value.itemSlot === 'null') {
            equipshow.value = true;
        } else {
            if (chosenItem.value.itemSlot === 'horse_shoes') {
                playerStore.horseInventory.horse_shoes.id = chosenItem.value.id;
                playerStore.horseInventory.horse_shoes.name = chosenItem.value.name;
                playerStore.horseInventory.horse_shoes.description = chosenItem.value.description;
                playerStore.horseInventory.horse_shoes.value = chosenItem.value.value;
                playerStore.horseInventory.horse_shoes.price = chosenItem.value.price;
                playerStore.horseInventory.horse_shoes.imageSrc = chosenItem.value.imageSrc;            
            } else if (chosenItem.value.itemSlot === 'horse_saddle') {
                playerStore.horseInventory.horse_saddle.id = chosenItem.value.id;
                playerStore.horseInventory.horse_saddle.name = chosenItem.value.name;
                playerStore.horseInventory.horse_saddle.description = chosenItem.value.description;
                playerStore.horseInventory.horse_saddle.value = chosenItem.value.value;
                playerStore.horseInventory.horse_saddle.price = chosenItem.value.price;
                playerStore.horseInventory.horse_saddle.imageSrc = chosenItem.value.imageSrc; 
            } else if (chosenItem.value.itemSlot === 'horse_bag') {
                playerStore.horseInventory.horse_bag.id = chosenItem.value.id;
                playerStore.horseInventory.horse_bag.name = chosenItem.value.name;
                playerStore.horseInventory.horse_bag.description = chosenItem.value.description;
                playerStore.horseInventory.horse_bag.value = chosenItem.value.value;
                playerStore.horseInventory.horse_bag.price = chosenItem.value.price;
                playerStore.horseInventory.horse_bag.imageSrc = chosenItem.value.imageSrc;
            } else if (chosenItem.value.itemSlot === 'player_helm') {
                playerStore.playerEquipped.player_helm.id = chosenItem.value.id;
                playerStore.playerEquipped.player_helm.name = chosenItem.value.name;
                playerStore.playerEquipped.player_helm.description = chosenItem.value.description;
                playerStore.playerEquipped.player_helm.value = chosenItem.value.value;
                playerStore.playerEquipped.player_helm.price = chosenItem.value.price;
                playerStore.playerEquipped.player_helm.imageSrc = chosenItem.value.imageSrc;
            } else if (chosenItem.value.itemSlot === 'player_armor') {
                playerStore.playerEquipped.player_armor.id = chosenItem.value.id;
                playerStore.playerEquipped.player_armor.name = chosenItem.value.name;
                playerStore.playerEquipped.player_armor.description = chosenItem.value.description;
                playerStore.playerEquipped.player_armor.value = chosenItem.value.value;
                playerStore.playerEquipped.player_armor.price = chosenItem.value.price;
                playerStore.playerEquipped.player_armor.imageSrc = chosenItem.value.imageSrc;
            } else if (chosenItem.value.itemSlot === 'player_shield') {
                playerStore.playerEquipped.player_shield.id = chosenItem.value.id;
                playerStore.playerEquipped.player_shield.name = chosenItem.value.name;
                playerStore.playerEquipped.player_shield.description = chosenItem.value.description;
                playerStore.playerEquipped.player_shield.value = chosenItem.value.value;
                playerStore.playerEquipped.player_shield.price = chosenItem.value.price;
                playerStore.playerEquipped.player_shield.imageSrc = chosenItem.value.imageSrc;
            } else if (chosenItem.value.itemSlot === 'player_gloves') {
                playerStore.playerEquipped.player_gloves.id = chosenItem.value.id;
                playerStore.playerEquipped.player_gloves.name = chosenItem.value.name;
                playerStore.playerEquipped.player_gloves.description = chosenItem.value.description;
                playerStore.playerEquipped.player_gloves.value = chosenItem.value.value;
                playerStore.playerEquipped.player_gloves.price = chosenItem.value.price;
                playerStore.playerEquipped.player_gloves.imageSrc = chosenItem.value.imageSrc;
            } else if (chosenItem.value.itemSlot === 'player_vambraces') {
                playerStore.playerEquipped.player_vambraces.id = chosenItem.value.id;
                playerStore.playerEquipped.player_vambraces.name = chosenItem.value.name;
                playerStore.playerEquipped.player_vambraces.description = chosenItem.value.description;
                playerStore.playerEquipped.player_vambraces.value = chosenItem.value.value;
                playerStore.playerEquipped.player_vambraces.price = chosenItem.value.price;
                playerStore.playerEquipped.player_vambraces.imageSrc = chosenItem.value.imageSrc;
            } else if (chosenItem.value.itemSlot === 'player_sword') {
                playerStore.playerEquipped.player_sword.id = chosenItem.value.id;
                playerStore.playerEquipped.player_sword.name = chosenItem.value.name;
                playerStore.playerEquipped.player_sword.description = chosenItem.value.description;
                playerStore.playerEquipped.player_sword.value = chosenItem.value.value;
                playerStore.playerEquipped.player_sword.price = chosenItem.value.price;
                playerStore.playerEquipped.player_sword.imageSrc = chosenItem.value.imageSrc;
            } else if (chosenItem.value.itemSlot === 'player_boots') {
                playerStore.playerEquipped.player_boots.id = chosenItem.value.id;
                playerStore.playerEquipped.player_boots.name = chosenItem.value.name;
                playerStore.playerEquipped.player_boots.description = chosenItem.value.description;
                playerStore.playerEquipped.player_boots.value = chosenItem.value.value;
                playerStore.playerEquipped.player_boots.price = chosenItem.value.price;
                playerStore.playerEquipped.player_boots.imageSrc = chosenItem.value.imageSrc;
            } else if (chosenItem.value.itemSlot === 'player_necklace') {
                playerStore.playerEquipped.player_necklace.id = chosenItem.value.id;
                playerStore.playerEquipped.player_necklace.name = chosenItem.value.name;
                playerStore.playerEquipped.player_necklace.description = chosenItem.value.description;
                playerStore.playerEquipped.player_necklace.value = chosenItem.value.value;
                playerStore.playerEquipped.player_necklace.price = chosenItem.value.price;
                playerStore.playerEquipped.player_necklace.imageSrc = chosenItem.value.imageSrc;
            } else if (chosenItem.value.itemSlot === 'player_ring') {
                playerStore.playerEquipped.player_ring.id = chosenItem.value.id;
                playerStore.playerEquipped.player_ring.name = chosenItem.value.name;
                playerStore.playerEquipped.player_ring.description = chosenItem.value.description;
                playerStore.playerEquipped.player_ring.value = chosenItem.value.value;
                playerStore.playerEquipped.player_ring.price = chosenItem.value.price;
                playerStore.playerEquipped.player_ring.imageSrc = chosenItem.value.imageSrc;
            } else if (chosenItem.value.itemSlot === 'player_belt') {
                playerStore.playerEquipped.player_belt.id = chosenItem.value.id;
                playerStore.playerEquipped.player_belt.name = chosenItem.value.name;
                playerStore.playerEquipped.player_belt.description = chosenItem.value.description;
                playerStore.playerEquipped.player_belt.value = chosenItem.value.value;
                playerStore.playerEquipped.player_belt.price = chosenItem.value.price;
                playerStore.playerEquipped.player_belt.imageSrc = chosenItem.value.imageSrc;
            } 
            playerStore.playerPacked.splice(x, 1);
        }        

        console.log('chosen item ID: ' + chosenItem.value.id);
    }


    // function equipItem(itemId) {
    //     chosenItemId.value = itemId;

    //     let x = playerStore.horseInventory.findIndex(item => item.itemSlot === chosenItem.value.itemSlot);
    //     playerStore.horseInventory.splice(x, 1, chosenItem.value);
    //     let y = playerStore.playerPacked.findIndex(item => item.itemSlot === chosenItem.value.itemSlot);        
    //     playerStore.playerPacked.splice(y, 1);
    // }

</script>