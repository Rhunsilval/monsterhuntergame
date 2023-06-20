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
              <h1 class="mt-2 text-xl text-gray-700 font-bold sm:text-center">Health Training.</h1>
              <p class="font-semibold text-xl">A good choice, {{ playerStore.playerId }}.</p>  
              <p class="mt-2 text-gray-700 sm:text-center">Ready to gain some XP and improve your life?</p>
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
                    <div v-if="lifeArrangement === 1" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="healthLiveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Live</button>
                        <button @click="healthThriveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Thrive</button>
                        <button @click="healthFlourishAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Flourish</button>
                        <button @click="healthExcelAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Excel</button>
                    </div>
                    <div v-else-if="lifeArrangement === 2" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="healthExcelAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Excel</button>
                        <button @click="healthLiveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Live</button>
                        <button @click="healthThriveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Thrive</button>
                        <button @click="healthFlourishAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Flourish</button>                        
                    </div>
                    <div v-else-if="lifeArrangement === 3" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="healthFlourishAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Flourish</button>
                        <button @click="healthExcelAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Excel</button>
                        <button @click="healthLiveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Live</button>
                        <button @click="healthThriveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Thrive</button>                                                
                    </div>
                    <div v-else-if="lifeArrangement === 4" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="healthThriveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Thrive</button>
                        <button @click="healthFlourishAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Flourish</button>
                        <button @click="healthExcelAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Excel</button>
                        <button @click="healthLiveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Live</button>
                    </div>
                    <div v-else-if="lifeArrangement === 5" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="healthThriveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Thrive</button>
                        <button @click="healthLiveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Live</button>    
                        <button @click="healthFlourishAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Flourish</button>
                        <button @click="healthExcelAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Excel</button>                        
                    </div>
                    <div v-else-if="lifeArrangement === 6" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="healthExcelAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Excel</button>
                        <button @click="healthThriveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Thrive</button>
                        <button @click="healthLiveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Live</button>    
                        <button @click="healthFlourishAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Flourish</button>                                                
                    </div>
                    <div v-else-if="lifeArrangement === 7" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="healthFlourishAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Flourish</button>
                        <button @click="healthExcelAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Excel</button>
                        <button @click="healthThriveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Thrive</button>
                        <button @click="healthLiveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Live</button> 
                    </div>
                    <div v-else-if="lifeArrangement === 8" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="healthLiveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Live</button>
                        <button @click="healthFlourishAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Flourish</button>
                        <button @click="healthExcelAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Excel</button>
                        <button @click="healthThriveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Thrive</button>                         
                    </div>
                    <div v-else-if="lifeArrangement === 9" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="healthLiveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Live</button>
                        <button @click="healthFlourishAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Flourish</button>
                        <button @click="healthThriveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Thrive</button>    
                        <button @click="healthExcelAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Excel</button>                                                 
                    </div>
                    <div v-else-if="lifeArrangement === 10" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="healthExcelAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Excel</button>
                        <button @click="healthLiveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Live</button>
                        <button @click="healthFlourishAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Flourish</button>
                        <button @click="healthThriveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Thrive</button>                                                                         
                    </div>
                    <div v-else-if="lifeArrangement === 11" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="healthThriveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Thrive</button>
                        <button @click="healthExcelAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Excel</button>
                        <button @click="healthLiveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Live</button>
                        <button @click="healthFlourishAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Flourish</button>                                                                                                 
                    </div>
                    <div v-else class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="healthFlourishAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Flourish</button> 
                        <button @click="healthThriveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Thrive</button>
                        <button @click="healthExcelAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Excel</button>
                        <button @click="healthLiveAction" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Live</button>                                                                                                                        
                    </div>
                </div>
            </div>
<!-- rotating dummy -->
            <div v-if="!trainingStarted" class="flex items-center justify-center">
              <img src="../../assets/images/village_guild/gym_life_dummy.png" alt="" class="h-72 w-72 border border-gray-600" />
            </div>
            <div v-if="trainingStarted" class="flex items-center jusify-c">
              <img v-if="AB" src="../../assets/images/village_guild/gym_life_dummy.png" alt="" class="h-72 w-72 border border-gray-600 " />
              <img v-if="BA" src="../../assets/images/village_guild/gym_life_dummy.png" alt="" class="h-72 w-72 border border-gray-600 " />
              <img v-if="A" src="../../assets/images/village_guild/gym_life_dummy.png" alt="" class="h-72 w-72 border border-gray-600 rotate-45" />
              <img v-if="B" src="../../assets/images/village_guild/gym_life_dummy.png" alt="" class="h-72 w-72 border border-gray-600 -rotate-45" />
            </div>
          </div>
          <div class="col-span-3 flex justify-center">
            <div class="grid grid-cols-1 text-center">
                <div class="flex justify-center mb-3">
                    <button @click="emitDoneTraining" class="border border-gray-600 rounded-lg px-2 py-2 w-20 bg-[#305c79] text-white">
                        Done?</button>
                </div>
                <p class="text-2xl font-semibold">Your current Health Level: {{ playerStore.playerBaseHealth }}</p>
                <p class="text-2xl font-semibold">XP until next Health level:  {{ playerStore.neededHealthXP }}</p>
                <p class="text-2xl font-semibold ">{{ playerStore.healthXP }}/{{ playerStore.nextHealthLevel }}</p>
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
        playerStore.healthPrice = (playerStore.healthPrice * 2);
        emitDoneTraining();
    }

    const playerStore = usePlayerStore();

    const trainingCommand = ref('');
    const trainingStarted = ref(false);
    
    const AB = ref(true);
    const BA = ref(false);
    const B = ref(false);
    const A = ref(false);

    const lifeArrangement = ref(0);
    function getLifeArrangement() {
        let x = Math.floor(Math.random()*(13-1)+1);
        console.log('arrangement num: ' + x);
        if (x <= 1) {
            lifeArrangement.value = 1;
        } else if (x <= 2) {
            lifeArrangement.value = 2;
        } else if (x <= 3) {
            lifeArrangement.value = 3;
        } else if (x <= 4) {
            lifeArrangement.value = 4;
        } else if (x <= 5) {
            lifeArrangement.value = 5;
        } else if (x <= 6) {
            lifeArrangement.value = 6;
        } else if (x <= 7) {
            lifeArrangement.value = 7;
        } else if (x <= 8) {
            lifeArrangement.value = 8;
        } else if (x <= 9) {
            lifeArrangement.value = 9;
        } else if (x <= 10) {
            lifeArrangement.value = 10;
        } else if (x <= 11) {
            lifeArrangement.value = 11;
        } else (lifeArrangement.value = 12)        
    }
    function startTraining() {
        trainingStarted.value = true;
        getLifeArrangement();
        let x = Math.floor(Math.random()*(5-1)+1);
        console.log(x);x
        if (x <= 1) {
            trainingCommand.value = "Live";
        } else if (x <= 2) {
            trainingCommand.value = "Thrive";
        } else if (x <= 3) {
            trainingCommand.value = "Flourish";
        } else (trainingCommand.value = "Excel")
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

    function healthLiveAction() {
        if (trainingCommand.value === 'Live') {
            playerStore.healthXP += 10;
            playerStore.XPUntilNextHealthLevel(); 
            playerStore.healthLevelUp();
            playerStore.getExtraHealth();
        }
        moveTheDummy();
        startTraining();
    }
    function healthThriveAction() {
        if (trainingCommand.value === 'Thrive') {
            playerStore.healthXP += 10;
            playerStore.XPUntilNextHealthLevel();
            playerStore.healthLevelUp();
            playerStore.getExtraHealth();
        }
        moveTheDummy();
        startTraining();
    }
    function healthFlourishAction() {
        if (trainingCommand.value === 'Flourish') {
            playerStore.healthXP += 10;
            playerStore.XPUntilNextHealthLevel(); 
            playerStore.healthLevelUp();
            playerStore.getExtraHealth();
        }
        moveTheDummy();
        startTraining();
    }
    function healthExcelAction() {
        if (trainingCommand.value === 'Excel') {
            playerStore.healthXP += 10;
            playerStore.XPUntilNextHealthLevel();
            playerStore.healthLevelUp();
            playerStore.getExtraHealth();
        }
        moveTheDummy();
        startTraining();
    }

// auto end session with levelup
    const storePlayerHealth = storeToRefs(playerStore); // so values are watchable
    const successfulTraining = ref(false);
    watch(storePlayerHealth.neededHealthXP, function(value) {
        if (value === 0) {
        successfulTraining.value = true;
        }
    })

</script>