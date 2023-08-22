<template>
    <div class="flex justify-center">
        <div v-if="potionCrafting" class="grid grid-cols-1">
            <div class="mt-10 flex justify-center"> 
                <img 
                    src="../../assets/images/village_apothecary/Apothecary_Shopkeeper.png"
                    class="h-72 border border-gray-600"
                />
            </div>
            <div class="text-center pt-5 bg-white bg-opacity-70 rounded-t-3xl">  
                <h1 class="text-xl font-semibold text-gray-700">So, you want to make a</h1>
                <h2 class="text-2xl font-bold text-slate-700 px-4">{{ renderedPotion.id2 }}?</h2>
            </div>
            <div class="bg-white bg-opacity-70 flex justify-center"> 
                <img 
                    src="../../assets/images/village_school/school_empty_caldron.png" 
                    class="h-52"
                />
            </div>
            <div class="text-center pt-2 text-xl text-gray-600 font-semibold bg-white bg-opacity-70"> 
                <p class="">We can do that!</p>
                <p class="my-3">You're going to need:</p>
            </div>
            <div class="pt-3 bg-white bg-opacity-70 rounded-b-3xl"> 
                <div class="flex justify-center items-center text-center pb-3">
                    <div class="mx-2 grid grid-cols-1">
                        <div class="flex justify-center"> 
                            <img :src="renderedPotion.needImg" class="h-20"/>
                        </div>
                        
                        <p>{{ renderedPotion.need }}</p>
                        <p>{{ renderedPotion.qty }}</p>
                    </div>
                    <div class="mx-2 grid grid-cols-1">
                        <div class="flex justify-center"> 
                            <img :src="renderedPotion.needImg2" class="h-20"/>
                        </div>                        
                        <p>{{ renderedPotion.need2 }}</p>
                        <p>{{ renderedPotion.qty2 }}</p>
                    </div>
                    <div class="mx-2 grid grid-cols-1">
                        <div class="flex justify-center"> 
                            <img :src="renderedPotion.needImg3" class="h-20"/>
                        </div>                        
                        <p>{{ renderedPotion.need3 }}</p>
                        <p>{{ renderedPotion.qty3 }}</p>
                    </div>
                    <div class="mx-2 grid grid-cols-1">
                        <div class="flex justify-center"> 
                            <img :src="renderedPotion.needImg4" class="h-20"/>
                        </div>                        
                        <p>{{ renderedPotion.need4 }}</p>
                        <p>{{ renderedPotion.qty4 }}</p>
                    </div>
                    <div class="mx-2 grid grid-cols-1">
                        <div class="flex justify-center"> 
                            <img :src="renderedPotion.needImg5" class="h-20"/>
                        </div>                        
                        <p>{{ renderedPotion.need5 }}</p>
                        <p>{{ renderedPotion.qty5 }}</p>
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
        
        <div v-if="potionReady" class="grid grid-cols-1"> 
            <div class="mt-10 flex justify-center"> 
                <img 
                    src="../../assets/images/village_apothecary/Apothecary_Shopkeeper.png"
                    class="h-72 border border-gray-600"
                />
            </div>
            <div class="text-center pt-5 bg-white bg-opacity-70 rounded-t-3xl">  
                <h1 class="text-xl font-semibold text-gray-700">Looks like your</h1>
                <h2 class="text-2xl font-bold text-slate-700 px-4">{{ renderedPotion.id2 }}?</h2>
                <p class="text-xl font-semibold text-gray-700">is ready!</p>
            </div>
            <div class="bg-white bg-opacity-70 flex justify-center pt-5"> 
                <img 
                    src="../../assets/images/village_school/school_full_caldron.png" 
                    class="h-52 border border-gray-300 rounded-2xl"
                />
            </div>
            <div class="flex justify-center bg-white bg-opacity-70 pb-5 rounded-b-3xl"> 
                <button @click="checkInventory" class="mt-5 px-2 py-2 w-32 border border-gray-500 rounded-xl bg-[#a6bf8e] hover:bg-green-100 text-center">
                    Collect potion</button>
            </div>  
        </div>
        
    </div>
</template>

<script setup> 
    import { computed, ref } from 'vue';
    import { useCraftingStore } from '@/stores/crafting';
    import { usePlayerStore } from '@/stores/player';

    const props = defineProps({
        potion: {},
    })
    const emit = defineEmits([
        'emitComeBackLater'
    ])

    const craftingStore = useCraftingStore();
    const playerStore = usePlayerStore();

    const renderedPotion = computed(function() {
        return craftingStore.potions.find(item => item.id2 === props.potion);
    })

    function emitComeBackLater() {
        emit('emitComeBackLater');
    }

    const potionCrafting = ref(true);
    const potionReady = ref(false);

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
        
        if (chosenItem.value.name === renderedPotion.value.need) {
            if (renderedPotion.value.qty - 1 < 0 ) { 
                renderedPotion.value.qty = 0;
            } else {
                renderedPotion.value.qty = (renderedPotion.value.qty - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        } else if (chosenItem.value.name === renderedPotion.value.need2) {
            if (renderedPotion.value.qty2 - 1 < 0) {
                renderedPotion.value.qty2 = 0;
            } else {
                renderedPotion.value.qty2 = (renderedPotion.value.qty2 - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        } else if (chosenItem.value.name === renderedPotion.value.need3) {
            if (renderedPotion.value.qty3 - 1 < 0 ) {
                renderedPotion.value.qty3 = 0;
            } else {
                renderedPotion.value.qty3 = (renderedPotion.value.qty3 - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        } else if (chosenItem.value.name === renderedPotion.value.need4) {
            if (renderedPotion.value.qty4 - 1 < 0 ) {
                renderedPotion.value.qty4 = 0;
            } else {
                renderedPotion.value.qty4 = (renderedPotion.value.qty4 - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        } else if (chosenItem.value.name === renderedPotion.value.need5) {
            if (renderedPotion.value.qty5 - 1 < 0 ) {
                renderedPotion.value.qty5 = 0;
            } else {
                renderedPotion.value.qty5 = (renderedPotion.value.qty5 - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        }

        const q2 = ref(0)
        if (!(renderedPotion.value.qty2 > 0)) {q2.value = 0} else (q2.value = renderedPotion.value.qty2)
        const q3 = ref(0)
        if (!(renderedPotion.value.qty3 > 0)) { q3.value = 0} else (q3.value = renderedPotion.value.qty3)
        const q4 = ref(0)
        if (!(renderedPotion.value.qty4 > 0)) { q4.value = 0} else (q4.value = renderedPotion.value.qty4)
        const q5 = ref(0)
        if (!(renderedPotion.value.qty5 > 0 )) { q5.value = 0} else (q5.value = renderedPotion.value.qty5)

        if ((renderedPotion.value.qty + q2.value + q3.value + q4.value + q5.value) - 1 < 0) {
            potionCrafting.value = false;
            potionReady.value = true;
        }
    }

    const insufficientSpace = ref(false);
    function checkInventory() {
        if (playerStore.playerPacked.length >= playerStore.carryCapacity) {
        insufficientSpace.value = true;
      } else (collectItem())
    }
    function collectItem() {
        playerStore.playerPacked.push(renderedPotion.value);
        renderedPotion.value.qty = renderedPotion.value.baseQty;
        renderedPotion.value.qty2 = renderedPotion.value.baseQty2;
        renderedPotion.value.qty3 = renderedPotion.value.baseQty3;
        renderedPotion.value.qty4 = renderedPotion.value.baseQty4;
        renderedPotion.value.qty5 = renderedPotion.value.baseQty5;
        potionCrafting.value = true;
        potionReady.value = false;
        // emitComeBackLater();
    }

</script>