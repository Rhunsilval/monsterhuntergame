<template>
    <div class="flex justify-center">
        <div v-if="itemCrafting" class="grid grid-cols-1">
            <div class="mt-10 flex justify-center"> 
                <img 
                    src="../../assets/images/village_blacksmith/Blacksmith_Shopkeeper.png"
                    class="h-72 border border-gray-600"
                />
            </div>
            <div class="text-center pt-5 bg-white bg-opacity-70 rounded-t-3xl">  
                <h1 class="text-xl font-semibold text-gray-700">So, you want to make a</h1>
                <h2 class="text-2xl font-bold text-slate-700 px-4">{{ renderedItem.id }}?</h2>
            </div>
            <div class="bg-white bg-opacity-70 flex justify-center"> 
                <img 
                    src="../../assets/images/village_school/school_empty_caldron.png" 
                    class="h-52"
                />
            </div>
            <div class="text-center pt-2 text-xl text-gray-600 font-semibold bg-white bg-opacity-70"> 
                <p class="">I can teach you how.</p>
                <p class="my-3">You're going to need:</p>
            </div>
            <div class="pt-3 bg-white bg-opacity-70 rounded-b-3xl"> 
                <div class="flex justify-center items-center text-center pb-3">
                    <div class="mx-2 grid grid-cols-1">
                        <div class="flex justify-center"> 
                            <img :src="renderedItem.needImg" class="h-20"/>
                        </div>
                        
                        <p>{{ renderedItem.need }}</p>
                        <p>{{ renderedItem.qty }}</p>
                    </div>
                    <div class="mx-2 grid grid-cols-1">
                        <div class="flex justify-center"> 
                            <img :src="renderedItem.needImg2" class="h-20"/>
                        </div>                        
                        <p>{{ renderedItem.need2 }}</p>
                        <p>{{ renderedItem.qty2 }}</p>
                    </div>
                    <div class="mx-2 grid grid-cols-1">
                        <div class="flex justify-center"> 
                            <img :src="renderedItem.needImg3" class="h-20"/>
                        </div>                        
                        <p>{{ renderedItem.need3 }}</p>
                        <p>{{ renderedItem.qty3 }}</p>
                    </div>
                    <div class="mx-2 grid grid-cols-1">
                        <div class="flex justify-center"> 
                            <img :src="renderedItem.needImg4" class="h-20"/>
                        </div>                        
                        <p>{{ renderedItem.need4 }}</p>
                        <p>{{ renderedItem.qty4 }}</p>
                    </div>
                    <div class="mx-2 grid grid-cols-1">
                        <div class="flex justify-center"> 
                            <img :src="renderedItem.needImg5" class="h-20"/>
                        </div>                        
                        <p>{{ renderedItem.need5 }}</p>
                        <p>{{ renderedItem.qty5 }}</p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center bg-slate-600 bg-opacity-70 mt-5 rounded-t-3xl"> 
                <p class="pt-3 text-2xl font-bold">You have:</p>
            </div>
            <div class="flex justify-center bg-slate-600 bg-opacity-70 pt-5 rounded-b-3xl">
                <ul class="grid grid-cols-4 gap-y-6 gap-x-3 px-5 py-5 mb-12">
                    <li v-for="item in playerStore.playerPacked" :key="item.id">
                        <button @click="giveItem(item.id)" class="pb-5 aspect-w-1 aspect-h-1 w-20 h-20 align-top">
                            <img :src="item.imageSrc" alt="" class="w-24 h-24 border border-gray-600 " />
                        </button>
                    </li>
                </ul>
            </div> 
            <div class="flex justify-center"> 
                <button @click="emitComeBackLater" class="mt-10 px-2 py-2 w-32 border border-gray-500 rounded-xl bg-stone-400 hover:bg-stone-600 hover:text-white text-center">
                    Come Back Later</button>
            </div>  
        </div> 
        
        <div v-if="itemReady" class="grid grid-cols-1"> 
            <div class="mt-10 flex justify-center"> 
                <img 
                    src="../../assets/images/village_blacksmith/Blacksmith_Shopkeeper.png"
                    class="h-72 border border-gray-600"
                />
            </div>
            <div class="text-center pt-5 bg-white bg-opacity-70 rounded-t-3xl">  
                <h1 class="text-xl font-semibold text-gray-700">Congratulations.  You successfully crafted a</h1>
                <h2 class="text-2xl font-bold text-slate-700 px-4">{{ renderedItem.id }}.</h2>
            </div>
            <div class="bg-white bg-opacity-70 flex justify-center pt-5"> 
                <img 
                    src="../../assets/images/village_school/school_full_caldron.png" 
                    class="h-52 border border-gray-300 rounded-2xl"
                />
            </div>
            <div class="flex justify-center bg-white bg-opacity-70 pb-5 rounded-b-3xl"> 
                <button @click="checkInventory" class="mt-5 px-2 py-2 w-32 border border-gray-500 rounded-xl bg-[#a6bf8e] hover:bg-green-100 text-center">
                    Collect item</button>
            </div>  
        </div>
        
    </div>
</template>

<script setup> 
    import { computed, ref } from 'vue';
    import { useCraftingStore } from '@/stores/crafting';
    import { usePlayerStore } from '@/stores/player';

    const props = defineProps({
        item: {},
    })
    const emit = defineEmits([
        'emitComeBackLater'
    ])

    const craftingStore = useCraftingStore();
    const playerStore = usePlayerStore();

    const renderedItem = computed(function() {
        return craftingStore.items.find(item => item.id === props.item);
    })

    function emitComeBackLater() {
        emit('emitComeBackLater');
    }

    const itemCrafting = ref(true);
    const itemReady = ref(false);

    const chosenItemId = ref('');    
    const chosenItem = computed(function() {
        return playerStore.playerPacked.find(item => item.id === chosenItemId.value);
    })
    function giveItem(id) {
        chosenItemId.value = id;
        let x = playerStore.playerPacked.findIndex(item => item.id === chosenItem.value.id);
        if(id!==undefined) {
            console.log('chosen bankitem Id = ' + id);
        }
        
        if (chosenItem.value.name === renderedItem.value.need) {
            if (renderedItem.value.qty - 1 < 0 ) { 
                renderedItem.value.qty = 0;
            } else {
                renderedItem.value.qty = (renderedItem.value.qty - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        } else if (chosenItem.value.name === renderedItem.value.need2) {
            if (renderedItem.value.qty2 - 1 < 0) {
                renderedItem.value.qty2 = 0;
            } else {
                renderedItem.value.qty2 = (renderedItem.value.qty2 - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        } else if (chosenItem.value.name === renderedItem.value.need3) {
            if (renderedItem.value.qty3 - 1 < 0 ) {
                renderedItem.value.qty3 = 0;
            } else {
                renderedItem.value.qty3 = (renderedItem.value.qty3 - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        } else if (chosenItem.value.name === renderedItem.value.need4) {
            if (renderedItem.value.qty4 - 1 < 0 ) {
                renderedItem.value.qty4 = 0;
            } else {
                renderedItem.value.qty4 = (renderedItem.value.qty4 - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        } else if (chosenItem.value.name === renderedItem.value.need5) {
            if (renderedItem.value.qty5 - 1 < 0 ) {
                renderedItem.value.qty5 = 0;
            } else {
                renderedItem.value.qty5 = (renderedItem.value.qty5 - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        }

        const q2 = ref(0)
        if (!(renderedItem.value.qty2 > 0)) {q2.value = 0} else (q2.value = renderedItem.value.qty2)
        const q3 = ref(0)
        if (!(renderedItem.value.qty3 > 0)) { q3.value = 0} else (q3.value = renderedItem.value.qty3)
        const q4 = ref(0)
        if (!(renderedItem.value.qty4 > 0)) { q4.value = 0} else (q4.value = renderedItem.value.qty4)
        const q5 = ref(0)
        if (!(renderedItem.value.qty5 > 0 )) { q5.value = 0} else (q5.value = renderedItem.value.qty5)

        if ((renderedItem.value.qty + q2.value + q3.value + q4.value + q5.value) - 1 < 0) {
            itemCrafting.value = false;
            itemReady.value = true;
        }
    }

    const insufficientSpace = ref(false);
    function checkInventory() {
        if (playerStore.playerPacked.length >= playerStore.carryCapacity) {
        insufficientSpace.value = true;
      } else (collectItem())
    }
    function collectItem() {
        craftingStore.selectedItem = renderedItem.value.id;
        craftingStore.generateItem();
        
        // let x = craftingStore.craftedItem.findIndex(item => item.id === renderedItem.value.id2); 

        playerStore.playerPacked.push(craftingStore.craftedItem[0]);
        craftingStore.craftedItem.splice(0,1);

        renderedItem.value.qty = renderedItem.value.baseQty;
        renderedItem.value.qty2 = renderedItem.value.baseQty2;
        renderedItem.value.qty3 = renderedItem.value.baseQty3;
        renderedItem.value.qty4 = renderedItem.value.baseQty4;
        renderedItem.value.qty5 = renderedItem.value.baseQty5;
        itemCrafting.value = true;
        itemReady.value = false;
        // emitComeBackLater();
    }

</script>