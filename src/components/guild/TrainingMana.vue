<template>
    <div v-if="!successfulTraining" class="grid grid-cols-3 mt-5 mb-10">
          <div class="grid grid-cols-1 ml-8">
            <div class="flex justify-center mt-5">
                <div class="text-center flex justify-center">
                    <div class="pt-3 mt-10 ">
                        <img src="../../assets/images/village_guild/gym_trainer.png" alt="" class="h-56 w-56 border border-black"/>                     
                    </div>                               
                </div>                   
            </div>
            <div class="w-60 mb-2 pl-3 ml-16 text-center">  
              <h1 class="mt-2 text-xl text-gray-700 font-bold sm:text-center">Mana Training.</h1>
              <p class="font-semibold text-xl">A good choice, {{ playerStore.playerId }}.</p>  
              <p class="mt-2 text-gray-700 sm:text-center">Ready to gain some XP and increase your mana capacaity?</p>
              <p class="mt-2 text-sm text-gray-700 sm:text-center">Follow my instructions to gain experience.  Ignore them and gain nothing.</p>  
            </div>

<!-- training start -->
            <div class="flex justify-center mb-8">
                <button v-if="!trainingStarted" @click="startTraining" class="border border-gray-500 rounded-lg bg-[#305c79] px-2 py-2 text-white w-24 h-20">
                    Ready?</button> 
                <button v-if="trainingStarted" class="border border-gray-500 rounded-lg bg-yellow-700 px-2 py-2 text-white text-2xl w-32 h-24">
                    {{ trainingCommand }}</button> 
            </div> 
          </div>  

          <div class="col-span-2 flex justify-center">
            <div v-if="trainingStarted" class="flex items-center justify-center mr-32">
<!-- expert buttons -->
                <div class="">
                    <div v-if="manaArrangement === 1" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="manaCastAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Cast</button>
                        <button @click="manaImagineAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Imagine</button>
                        <button @click="manaIntentAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Intent</button>
                        <button @click="manaFocusAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Focus</button>
                    </div>
                    <div v-else-if="manaArrangement === 2" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="manaFocusAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Focus</button>
                        <button @click="manaCastAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Cast</button>
                        <button @click="manaImagineAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Imagine</button>
                        <button @click="manaIntentAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Intent</button>                        
                    </div>
                    <div v-else-if="manaArrangement === 3" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="manaIntentAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Intent</button>
                        <button @click="manaFocusAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Focus</button>
                        <button @click="manaCastAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Cast</button>
                        <button @click="manaImagineAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Imagine</button>                                                
                    </div>
                    <div v-else-if="manaArrangement === 4" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="manaImagineAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Imagine</button>
                        <button @click="manaIntentAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Intent</button>
                        <button @click="manaFocusAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Focus</button>
                        <button @click="manaCastAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Cast</button>
                    </div>
                    <div v-else-if="manaArrangement === 5" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="manaImagineAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Imagine</button>
                        <button @click="manaCastAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Cast</button>    
                        <button @click="manaIntentAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Intent</button>
                        <button @click="manaFocusAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Focus</button>                        
                    </div>
                    <div v-else-if="manaArrangement === 6" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="manaFocusAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Focus</button>
                        <button @click="manaImagineAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Imagine</button>
                        <button @click="manaCastAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Cast</button>    
                        <button @click="manaIntentAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Intent</button>                                                
                    </div>
                    <div v-else-if="manaArrangement === 7" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="manaIntentAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Intent</button>
                        <button @click="manaFocusAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Focus</button>
                        <button @click="manaImagineAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Imagine</button>
                        <button @click="manaCastAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Cast</button> 
                    </div>
                    <div v-else-if="manaArrangement === 8" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="manaCastAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Cast</button>
                        <button @click="manaIntentAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Intent</button>
                        <button @click="manaFocusAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Focus</button>
                        <button @click="manaImagineAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Imagine</button>                         
                    </div>
                    <div v-else-if="manaArrangement === 9" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="manaCastAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Cast</button>
                        <button @click="manaIntentAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Intent</button>
                        <button @click="manaImagineAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Imagine</button>    
                        <button @click="manaFocusAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Focus</button>                                                 
                    </div>
                    <div v-else-if="manaArrangement === 10" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="manaFocusAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Focus</button>
                        <button @click="manaCastAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Cast</button>
                        <button @click="manaIntentAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Intent</button>
                        <button @click="manaImagineAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Imagine</button>                                                                         
                    </div>
                    <div v-else-if="manaArrangement === 11" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="manaImagineAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Imagine</button>
                        <button @click="manaFocusAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Focus</button>
                        <button @click="manaCastAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Cast</button>
                        <button @click="manaIntentAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Intent</button>                                                                                                 
                    </div>
                    <div v-else class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="manaIntentAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Intent</button> 
                        <button @click="manaImagineAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Imagine</button>
                        <button @click="manaFocusAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Focus</button>
                        <button @click="manaCastAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Cast</button>                                                                                                                        
                    </div>
                </div>
            </div>
<!-- rotating dummy -->
            <div v-if="!trainingStarted" class="flex items-center justify-center">
              <img src="../../assets/images/village_guild/gym_mana_dummy.png" alt="" class="h-72 w-72 border border-gray-600" />
            </div>
            <div v-if="trainingStarted" class="flex items-center jusify-c">
              <img v-if="AB" src="../../assets/images/village_guild/gym_mana_dummy.png" alt="" class="h-72 w-72 border border-gray-600 " />
              <img v-if="BA" src="../../assets/images/village_guild/gym_mana_dummy.png" alt="" class="h-72 w-72 border border-gray-600 " />
              <img v-if="A" src="../../assets/images/village_guild/gym_mana_dummy.png" alt="" class="h-72 w-72 border border-gray-600 rotate-45" />
              <img v-if="B" src="../../assets/images/village_guild/gym_mana_dummy.png" alt="" class="h-72 w-72 border border-gray-600 -rotate-45" />
            </div>
          </div>
          <div class="col-span-3 flex justify-center">
            <div class="grid grid-cols-1 text-center">
                <div class="flex justify-center mb-3">
                    <button @click="emitDoneTraining" class="border border-gray-600 rounded-lg px-2 py-2 w-20 bg-[#305c79] text-white">
                        Done?</button>
                </div>
                <p class="text-2xl font-semibold">Your current Mana Level: {{ playerStore.playerBaseMana }}</p>
                <p class="text-2xl font-semibold">XP until next Mana level:  {{ playerStore.neededManaXP }}</p>
                <p class="text-2xl font-semibold ">{{ playerStore.manaXP }}/{{ playerStore.nextManaLevel }}</p>
            </div>
        </div>
    </div>

    <div v-if="successfulTraining" class="grid grid-cols-1">
        <div class="flex justify-center mt-16 mb-3">
            <img src="../../assets/images/village_guild/gym_trainer.png" class="h-96  " />
        </div>
        <div class="text-center mb-3">
            <h1 class="text-3xl font-bold ">Well done, {{ playerStore.playerId }}!</h1>
            <p class="text-xl">Whew!  Now that was a workout!</p>
            <p class="">Enjoy a well-earned break.  And be sure to come back again!</p>
        </div>
        <div class="flex justify-center mb-5">
            <button @click="finishUp" class="border border-gray-600 rounded-lg px-2 py-2 w-20 bg-[#305c79] text-white">
                Done</button>
        </div>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue';
    import { storeToRefs } from 'pinia'; 
    import { usePlayerStore } from '@/stores/player';

    const emit = defineEmits([
        'emitDoneTraining',
    ])
    function emitDoneTraining() {
        emit('emitDoneTraining');
    }
    function finishUp() {
        playerStore.manaPrice = (playerStore.manaPrice * 2);
        emitDoneTraining();
    }

    const playerStore = usePlayerStore();

    const trainingCommand = ref('');
    const trainingStarted = ref(false);
    
    const AB = ref(true);
    const BA = ref(false);
    const B = ref(false);
    const A = ref(false);

    const manaArrangement = ref(0);
    function getManaArrangement() {
        let x = Math.floor(Math.random()*(13-1)+1);
        console.log('arrangement num: ' + x);
        if (x <= 1) {
            manaArrangement.value = 1;
        } else if (x <= 2) {
            manaArrangement.value = 2;
        } else if (x <= 3) {
            manaArrangement.value = 3;
        } else if (x <= 4) {
            manaArrangement.value = 4;
        } else if (x <= 5) {
            manaArrangement.value = 5;
        } else if (x <= 6) {
            manaArrangement.value = 6;
        } else if (x <= 7) {
            manaArrangement.value = 7;
        } else if (x <= 8) {
            manaArrangement.value = 8;
        } else if (x <= 9) {
            manaArrangement.value = 9;
        } else if (x <= 10) {
            manaArrangement.value = 10;
        } else if (x <= 11) {
            manaArrangement.value = 11;
        } else (manaArrangement.value = 12)        
    }
    function startTraining() {
        trainingStarted.value = true;
        getManaArrangement();
        let x = Math.floor(Math.random()*(5-1)+1);
        console.log(x);x
        if (x <= 1) {
            trainingCommand.value = "Cast";
        } else if (x <= 2) {
            trainingCommand.value = "Imagine";
        } else if (x <= 3) {
            trainingCommand.value = "Intent";
        } else (trainingCommand.value = "Focus")
    }

    function moveTheDummy() {
        if (AB.value === true) {
            AB.value = false;
            A.value = true;
        } else if (A.value === true) {
            A.value = false;
            BA.value = true;
        } else if (BA.value === true) {
            BA.value = false;
            B.value = true;
        } else if (B.value === true) {
            B.value = false;
            AB.value = true;
        }
    }

    function manaCastAction() {
        if (trainingCommand.value === 'Cast') {
            playerStore.manaXP += 10;
            playerStore.XPUntilNextManaLevel(); 
            playerStore.manaLevelUp();
            playerStore.getExtraMana();
        }
        moveTheDummy();
        startTraining();
    }
    function manaImagineAction() {
        if (trainingCommand.value === 'Imagine') {
            playerStore.manaXP += 10;
            playerStore.XPUntilNextManaLevel();
            playerStore.manaLevelUp();
            playerStore.getExtraMana();
        }
        moveTheDummy();
        startTraining();
    }
    function manaIntentAction() {
        if (trainingCommand.value === 'Intent') {
            playerStore.manaXP += 10;
            playerStore.XPUntilNextManaLevel(); 
            playerStore.manaLevelUp();
            playerStore.getExtraMana();
        }
        moveTheDummy();
        startTraining();
    }
    function manaFocusAction() {
        if (trainingCommand.value === 'Focus') {
            playerStore.manaXP += 10;
            playerStore.XPUntilNextManaLevel();
            playerStore.manaLevelUp();
            playerStore.getExtraMana();
        }
        moveTheDummy();
        startTraining();
    }

// auto end session with levelup
    const storePlayerHealth = storeToRefs(playerStore); // so values are watchable
    const successfulTraining = ref(false);
    watch(storePlayerHealth.neededManaXP, function(value) {
        if (value === 0) {
        successfulTraining.value = true;
        }
    })

</script>