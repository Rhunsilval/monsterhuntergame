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
              <h1 class="mt-2 text-xl text-gray-700 font-bold sm:text-center">Strength Training.</h1>
              <p class="font-semibold text-xl">A good choice, {{ playerStore.playerId }}.</p>  
              <p v-if="playerStore.playerBaseStrength < 5" class="mt-2 text-gray-700 sm:text-center">Now, you're obviously a beginner, so we'll start off easy.</p>  
              <p v-else-if="playerStore.playerBaseStrength < 10" class="mt-2 text-gray-700 sm:text-center">Looks like you've got some experience.  Let's make this a bit more challenging, then.</p>  
              <p v-else class="mt-2 text-gray-700 sm:text-center">You're a pro? Excellent!  <br/> Let's have some fun, then!</p>
              <p class="mt-2 text-sm text-gray-700 sm:text-center">Follow my instructions to gain experience.  Ignore them and gain nothing.</p>  
            </div>
<!-- basic training start -->
            <div v-if="playerStore.playerBaseStrength < 5" class="flex justify-center mb-8">
                <button v-if="!trainingStarted" @click="startBasicTraining" class="border border-gray-500 rounded-lg bg-[#305c79] px-2 py-2 text-white w-24">
                    Ready?</button> 
                <button v-if="trainingStarted" class="border border-gray-500 rounded-lg bg-yellow-700 px-2 py-2 text-white text-2xl w-32 h-24">
                    {{ trainingCommand }}</button> 
            </div>     
<!-- intermediate training start -->
            <div v-else-if="playerStore.playerBaseStrength < 10" class="flex justify-center mb-8">
                <button v-if="!trainingStarted" @click="startIntermediateTraining" class="border border-gray-500 rounded-lg bg-[#305c79] px-2 py-2 text-white w-24">
                    Ready?</button> 
                <button v-if="trainingStarted" class="border border-gray-500 rounded-lg bg-yellow-700 px-2 py-2 text-white text-2xl w-32 h-24">
                    {{ trainingCommand }}</button> 
            </div>
<!-- expert training start -->
            <div v-else class="flex justify-center mb-8">
                <button v-if="!trainingStarted" @click="startExpertTraining" class="border border-gray-500 rounded-lg bg-[#305c79] px-2 py-2 text-white w-24">
                    Ready?</button> 
                <button v-if="trainingStarted" class="border border-gray-500 rounded-lg bg-yellow-700 px-2 py-2 text-white text-2xl w-32 h-24">
                    {{ trainingCommand }}</button> 
            </div> 
          </div>  

          <div class="col-span-2 flex justify-center">
            <div v-if="trainingStarted" class="flex items-center justify-center mr-32">
<!-- basic buttons -->
                <div v-if="basicTrainingActive" class="grid grid-cols-2 gap-x-2 gap-y-5">
                    <button @click="strengthLiftBasic" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Lift</button>
                    <button @click="strengthPumpBasic" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Pump</button>
                </div>
<!-- intermediate buttons -->
                <div v-if="intermediateTrainingActive" class="grid grid-cols-2 gap-x-2 gap-y-5">
                    <button @click="strengthLiftIntermediate" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Lift</button>
                    <button @click="strengthPumpIntermediate" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Pump</button>

                    <button @click="strengthCurlIntermediate" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Curl</button>
                    <button @click="strengthPullIntermediate" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Pull</button>
                </div>
<!-- expert buttons -->
                <div v-if="expertTrainingActive" class="">
                    <div v-if="expertArrangement === 1" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="strengthLiftExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Lift</button>
                        <button @click="strengthPumpExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pump</button>
                        <button @click="strengthCurlExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Curl</button>
                        <button @click="strengthPullExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pull</button>
                    </div>
                    <div v-else-if="expertArrangement === 2" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="strengthPullExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pull</button>
                        <button @click="strengthLiftExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Lift</button>
                        <button @click="strengthPumpExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pump</button>
                        <button @click="strengthCurlExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Curl</button>                        
                    </div>
                    <div v-else-if="expertArrangement === 3" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="strengthCurlExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Curl</button>
                        <button @click="strengthPullExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pull</button>
                        <button @click="strengthLiftExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Lift</button>
                        <button @click="strengthPumpExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pump</button>                                                
                    </div>
                    <div v-else-if="expertArrangement === 4" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="strengthPumpExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pump</button>
                        <button @click="strengthCurlExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Curl</button>
                        <button @click="strengthPullExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pull</button>
                        <button @click="strengthLiftExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Lift</button>
                    </div>
                    <div v-else-if="expertArrangement === 5" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="strengthPumpExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pump</button>
                        <button @click="strengthLiftExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Lift</button>    
                        <button @click="strengthCurlExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Curl</button>
                        <button @click="strengthPullExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pull</button>                        
                    </div>
                    <div v-else-if="expertArrangement === 6" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="strengthPullExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pull</button>
                        <button @click="strengthPumpExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pump</button>
                        <button @click="strengthLiftExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Lift</button>    
                        <button @click="strengthCurlExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Curl</button>                                                
                    </div>
                    <div v-else-if="expertArrangement === 7" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="strengthCurlExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Curl</button>
                        <button @click="strengthPullExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pull</button>
                        <button @click="strengthPumpExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pump</button>
                        <button @click="strengthLiftExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Lift</button> 
                    </div>
                    <div v-else-if="expertArrangement === 8" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="strengthLiftExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Lift</button>
                        <button @click="strengthCurlExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Curl</button>
                        <button @click="strengthPullExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pull</button>
                        <button @click="strengthPumpExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pump</button>                         
                    </div>
                    <div v-else-if="expertArrangement === 9" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="strengthLiftExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Lift</button>
                        <button @click="strengthCurlExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Curl</button>
                        <button @click="strengthPumpExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pump</button>    
                        <button @click="strengthPullExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pull</button>                                                 
                    </div>
                    <div v-else-if="expertArrangement === 10" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="strengthPullExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pull</button>
                        <button @click="strengthLiftExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Lift</button>
                        <button @click="strengthCurlExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Curl</button>
                        <button @click="strengthPumpExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pump</button>                                                                         
                    </div>
                    <div v-else-if="expertArrangement === 11" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="strengthPumpExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pump</button>
                        <button @click="strengthPullExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pull</button>
                        <button @click="strengthLiftExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Lift</button>
                        <button @click="strengthCurlExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Curl</button>                                                                                                 
                    </div>
                    <div v-else class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="strengthCurlExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Curl</button> 
                        <button @click="strengthPumpExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pump</button>
                        <button @click="strengthPullExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Pull</button>
                        <button @click="strengthLiftExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Lift</button>                                                                                                                        
                    </div>
                </div>
            </div>
<!-- rotating dummy -->
            <div v-if="!trainingStarted" class="flex items-center justify-center">
              <img src="../../assets/images/village_guild/gym_strength_dummy.png" alt="" class="h-72 w-72 border border-gray-600" />
            </div>
            <div v-if="trainingStarted" class="flex items-center jusify-c">
              <img v-if="AB" src="../../assets/images/village_guild/gym_strength_dummy.png" alt="" class="h-72 w-72 border border-gray-600 " />
              <img v-if="BA" src="../../assets/images/village_guild/gym_strength_dummy.png" alt="" class="h-72 w-72 border border-gray-600 " />
              <img v-if="A" src="../../assets/images/village_guild/gym_strength_dummy.png" alt="" class="h-72 w-72 border border-gray-600 rotate-45" />
              <img v-if="B" src="../../assets/images/village_guild/gym_strength_dummy.png" alt="" class="h-72 w-72 border border-gray-600 -rotate-45" />
            </div>
          </div>
          <div class="col-span-3 flex justify-center">
            <div class="grid grid-cols-1 text-center">
                <div class="flex justify-center mb-3">
                    <button @click="emitDoneTraining" class="border border-gray-600 rounded-lg px-2 py-2 w-20 bg-[#305c79] text-white">
                        Done?</button>
                </div>
                <p class="text-2xl font-semibold">Your current Strength Level: {{ playerStore.playerBaseStrength }}</p>
                <p class="text-2xl font-semibold">XP until next Strength level:  {{ playerStore.neededStrengthXP }}</p>
                <p class="text-2xl font-semibold ">{{ playerStore.strengthXP }}/{{ playerStore.nextStrengthLevel }}</p>
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
        playerStore.strengthPrice = (playerStore.strengthPrice * 3);
        emitDoneTraining();
    }

    const playerStore = usePlayerStore();

    const trainingCommand = ref('');
    const trainingStarted = ref(false);
    
    const AB = ref(true);
    const BA = ref(false);
    const B = ref(false);
    const A = ref(false);

    const basicTrainingActive = ref(false);
    function startBasicTraining() {
        trainingStarted.value = true;
        basicTrainingActive.value = true;
        let x = Math.floor(Math.random()*(3-1)+1);
        console.log(x);
        if (x <=1) {
            trainingCommand.value = 'Lift'
        } else (trainingCommand.value = "Pump")
    }

    const intermediateTrainingActive = ref(false);
    function startIntermediateTraining() {
        trainingStarted.value = true;
        intermediateTrainingActive.value = true;
        let x = Math.floor(Math.random()*(5-1)+1);
        console.log(x);
        if (x <= 1) {
            trainingCommand.value = "Lift";
        } else if (x <= 2) {
            trainingCommand.value = "Pump";
        } else if (x <= 3) {
            trainingCommand.value = "Curl";
        } else (trainingCommand.value = "Pull")
    }

    const expertArrangement = ref(0);
    const expertTrainingActive = ref(false);
    function getExpertArrangement() {
        let x = Math.floor(Math.random()*(13-1)+1);
        console.log('arrangement num: ' + x);
        if (x <= 1) {
            expertArrangement.value = 1;
        } else if (x <= 2) {
            expertArrangement.value = 2;
        } else if (x <= 3) {
            expertArrangement.value = 3;
        } else if (x <= 4) {
            expertArrangement.value = 4;
        } else if (x <= 5) {
            expertArrangement.value = 5;
        } else if (x <= 6) {
            expertArrangement.value = 6;
        } else if (x <= 7) {
            expertArrangement.value = 7;
        } else if (x <= 8) {
            expertArrangement.value = 8;
        } else if (x <= 9) {
            expertArrangement.value = 9;
        } else if (x <= 10) {
            expertArrangement.value = 10;
        } else if (x <= 11) {
            expertArrangement.value = 11;
        } else (expertArrangement.value = 12)        
    }
    function startExpertTraining() {
        trainingStarted.value = true;
        expertTrainingActive.value = true;
        getExpertArrangement();
        let x = Math.floor(Math.random()*(5-1)+1);
        console.log(x);x
        if (x <= 1) {
            trainingCommand.value = "Lift";
        } else if (x <= 2) {
            trainingCommand.value = "Pump";
        } else if (x <= 3) {
            trainingCommand.value = "Curl";
        } else (trainingCommand.value = "Pull")
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

// basic functions
    function strengthLiftBasic() {
        if (trainingCommand.value === 'Lift') {
            playerStore.strengthXP += 10;
            playerStore.XPUntilNextStrengthLevel(); 
            playerStore.strengthLevelUp();
            playerStore.getStrengthValues();
        }
        moveTheDummy();
        startBasicTraining();
    }
    function strengthPumpBasic() {
        if (trainingCommand.value === 'Pump') {
            playerStore.strengthXP += 10;
            playerStore.XPUntilNextStrengthLevel();
            playerStore.strengthLevelUp();
            playerStore.getStrengthValues();
        }
        moveTheDummy();
        startBasicTraining();
    }

// intermediate functions
    function strengthLiftIntermediate() {
        if (trainingCommand.value === 'Lift') {
            playerStore.strengthXP += 10;
            playerStore.XPUntilNextStrengthLevel(); 
            playerStore.strengthLevelUp();
            playerStore.getStrengthValues();
        }
        moveTheDummy();
        startIntermediateTraining();
    }
    function strengthPumpIntermediate() {
        if (trainingCommand.value === 'Pump') {
            playerStore.strengthXP += 10;
            playerStore.XPUntilNextStrengthLevel();
            playerStore.strengthLevelUp();
            playerStore.getStrengthValues();
        }
        moveTheDummy();
        startIntermediateTraining();
    }
    function strengthCurlIntermediate() {
        if (trainingCommand.value === 'Curl') {
            playerStore.strengthXP += 10;
            playerStore.XPUntilNextStrengthLevel(); 
            playerStore.strengthLevelUp();
            playerStore.getStrengthValues();
        }
        moveTheDummy();
        startIntermediateTraining();
    }
    function strengthPullIntermediate() {
        if (trainingCommand.value === 'Pull') {
            playerStore.strengthXP += 10;
            playerStore.XPUntilNextStrengthLevel();
            playerStore.strengthLevelUp();
            playerStore.getStrengthValues();
        }
        moveTheDummy();
        startIntermediateTraining();
    }

// expert functions
    function strengthLiftExpert() {
        if (trainingCommand.value === 'Lift') {
            playerStore.strengthXP += 10;
            playerStore.XPUntilNextStrengthLevel(); 
            playerStore.strengthLevelUp();
            playerStore.getStrengthValues();
        }
        moveTheDummy();
        startExpertTraining();
    }
    function strengthPumpExpert() {
        if (trainingCommand.value === 'Pump') {
            playerStore.strengthXP += 10;
            playerStore.XPUntilNextStrengthLevel();
            playerStore.strengthLevelUp();
            playerStore.getStrengthValues();
        }
        moveTheDummy();
        startExpertTraining();
    }
    function strengthCurlExpert() {
        if (trainingCommand.value === 'Curl') {
            playerStore.strengthXP += 10;
            playerStore.XPUntilNextStrengthLevel(); 
            playerStore.strengthLevelUp();
            playerStore.getStrengthValues();
        }
        moveTheDummy();
        startExpertTraining();
    }
    function strengthPullExpert() {
        if (trainingCommand.value === 'Pull') {
            playerStore.strengthXP += 10;
            playerStore.XPUntilNextStrengthLevel();
            playerStore.strengthLevelUp();
            playerStore.getStrengthValues();
        }
        moveTheDummy();
        startExpertTraining();
    }

// auto end session with levelup
    const storePlayerHealth = storeToRefs(playerStore); // so values are watchable
    const successfulTraining = ref(false);
    watch(storePlayerHealth.neededStrengthXP, function(value) {
        if (value === 0) {
        successfulTraining.value = true;
        }
    })

</script>