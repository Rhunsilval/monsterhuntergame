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
              <h1 class="mt-2 text-xl text-gray-700 font-bold sm:text-center">Intelligence Training.</h1>
              <p class="font-semibold text-xl">A good choice, {{ playerStore.playerId }}.</p>  
              <p v-if="playerStore.playerBaseIntelligence < 5" class="mt-2 text-gray-700 sm:text-center">Now, you're obviously a beginner, so we'll start off easy.</p>  
              <p v-else-if="playerStore.playerBaseIntelligence < 10" class="mt-2 text-gray-700 sm:text-center">Looks like you've got some experience.  Let's make this a bit more challenging, then.</p>  
              <p v-else class="mt-2 text-gray-700 sm:text-center">You're a pro? Excellent!  <br/> Let's have some fun, then!</p>
              <p class="mt-2 text-sm text-gray-700 sm:text-center">Follow my instructions to gain experience.  Ignore them and gain nothing.</p>  
            </div>
<!-- basic training start -->
            <div v-if="playerStore.playerBaseIntelligence < 5" class="flex justify-center mb-8">
                <button v-if="!trainingStarted" @click="startBasicTraining" class="border border-gray-500 rounded-lg bg-[#305c79] px-2 py-2 text-white w-24 h-20">
                    Ready?</button> 
                <button v-if="trainingStarted" class="border border-gray-500 rounded-lg bg-yellow-700 px-2 py-2 text-white text-2xl w-32 h-24">
                    {{ trainingCommand }}</button> 
            </div>     
<!-- intermediate training start -->
            <div v-else-if="playerStore.playerBaseIntelligence < 10" class="flex justify-center mb-8">
                <button v-if="!trainingStarted" @click="startIntermediateTraining" class="border border-gray-500 rounded-lg bg-[#305c79] px-2 py-2 text-white w-24 h-20">
                    Ready?</button> 
                <button v-if="trainingStarted" class="border border-gray-500 rounded-lg bg-yellow-700 px-2 py-2 text-white text-2xl w-32 h-24">
                    {{ trainingCommand }}</button> 
            </div>
<!-- expert training start -->
            <div v-else class="flex justify-center mb-8">
                <button v-if="!trainingStarted" @click="startExpertTraining" class="border border-gray-500 rounded-lg bg-[#305c79] px-2 py-2 text-white w-24 h-20">
                    Ready?</button> 
                <button v-if="trainingStarted" class="border border-gray-500 rounded-lg bg-yellow-700 px-2 py-2 text-white text-2xl w-32 h-24">
                    {{ trainingCommand }}</button> 
            </div> 
          </div>  

          <div class="col-span-2 flex justify-center">
            <div v-if="trainingStarted" class="flex items-center justify-center mr-32">
<!-- basic buttons -->
                <div v-if="basicTrainingActive" class="grid grid-cols-2 gap-x-2 gap-y-5">
                    <button @click="intelligenceReadBasic" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Read</button>
                    <button @click="intelligenceTurnBasic" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Turn Page</button>
                </div>
<!-- intermediate buttons -->
                <div v-if="intermediateTrainingActive" class="grid grid-cols-2 gap-x-2 gap-y-5">
                    <button @click="intelligenceReadIntermediate" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Read</button>
                    <button @click="intelligenceTurnIntermediate" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Turn Page</button>

                    <button @click="intelligenceAnalyzeIntermediate" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Analyze</button>
                    <button @click="intelligenceSummaryIntermediate" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Summary</button>
                </div>
<!-- expert buttons -->
                <div v-if="expertTrainingActive" class="">
                    <div v-if="expertArrangement === 1" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="intelligenceReadExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Read</button>
                        <button @click="intelligenceTurnExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Turn Page</button>
                        <button @click="intelligenceAnalyzeExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Analyze</button>
                        <button @click="intelligenceSummaryExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Summary</button>
                    </div>
                    <div v-else-if="expertArrangement === 2" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="intelligenceSummaryExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Summary</button>
                        <button @click="intelligenceReadExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Read</button>
                        <button @click="intelligenceTurnExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Turn Page</button>
                        <button @click="intelligenceAnalyzeExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Analyze</button>                        
                    </div>
                    <div v-else-if="expertArrangement === 3" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="intelligenceAnalyzeExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Analyze</button>
                        <button @click="intelligenceSummaryExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Summary</button>
                        <button @click="intelligenceReadExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Read</button>
                        <button @click="intelligenceTurnExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Turn Page</button>                                                
                    </div>
                    <div v-else-if="expertArrangement === 4" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="intelligenceTurnExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Turn Page</button>
                        <button @click="intelligenceAnalyzeExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Analyze</button>
                        <button @click="intelligenceSummaryExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Summary</button>
                        <button @click="intelligenceReadExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Read</button>
                    </div>
                    <div v-else-if="expertArrangement === 5" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="intelligenceTurnExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Turn Page</button>
                        <button @click="intelligenceReadExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Read</button>    
                        <button @click="intelligenceAnalyzeExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Analyze</button>
                        <button @click="intelligenceSummaryExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Summary</button>                        
                    </div>
                    <div v-else-if="expertArrangement === 6" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="intelligenceSummaryExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Summary</button>
                        <button @click="intelligenceTurnExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Turn Page</button>
                        <button @click="intelligenceReadExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Read</button>    
                        <button @click="intelligenceAnalyzeExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Analyze</button>                                                
                    </div>
                    <div v-else-if="expertArrangement === 7" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="intelligenceAnalyzeExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Analyze</button>
                        <button @click="intelligenceSummaryExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Summary</button>
                        <button @click="intelligenceTurnExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Turn Page</button>
                        <button @click="intelligenceReadExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Read</button> 
                    </div>
                    <div v-else-if="expertArrangement === 8" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="intelligenceReadExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Read</button>
                        <button @click="intelligenceAnalyzeExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Analyze</button>
                        <button @click="intelligenceSummaryExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Summary</button>
                        <button @click="intelligenceTurnExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Turn Page</button>                         
                    </div>
                    <div v-else-if="expertArrangement === 9" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="intelligenceReadExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Read</button>
                        <button @click="intelligenceAnalyzeExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Analyze</button>
                        <button @click="intelligenceTurnExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Turn Page</button>    
                        <button @click="intelligenceSummaryExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Summary</button>                                                 
                    </div>
                    <div v-else-if="expertArrangement === 10" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="intelligenceSummaryExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Summary</button>
                        <button @click="intelligenceReadExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Read</button>
                        <button @click="intelligenceAnalyzeExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Analyze</button>
                        <button @click="intelligenceTurnExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Turn Page</button>                                                                         
                    </div>
                    <div v-else-if="expertArrangement === 11" class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="intelligenceTurnExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Turn Page</button>
                        <button @click="intelligenceSummaryExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Summary</button>
                        <button @click="intelligenceReadExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Read</button>
                        <button @click="intelligenceAnalyzeExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Analyze</button>                                                                                                 
                    </div>
                    <div v-else class="grid grid-cols-2 gap-x-2 gap-y-5">
                        <button @click="intelligenceAnalyzeExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Analyze</button> 
                        <button @click="intelligenceTurnExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Turn Page</button>
                        <button @click="intelligenceSummaryExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Summary</button>
                        <button @click="intelligenceReadExpert" class="px-2 py-2 border border-gray-600 rounded-lg w-24 h-20 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                            Read</button>                                                                                                                        
                    </div>
                </div>
            </div>
<!-- rotating dummy -->
            <div v-if="!trainingStarted" class="flex items-center justify-center">
              <img src="../../assets/images/village_guild/gym_intel_dummy.png" alt="" class="h-72 w-72 border border-gray-600" />
            </div>
            <div v-if="trainingStarted" class="flex items-center jusify-c">
              <img v-if="AB" src="../../assets/images/village_guild/gym_intel_dummy.png" alt="" class="h-72 w-72 border border-gray-600 " />
              <img v-if="BA" src="../../assets/images/village_guild/gym_intel_dummy.png" alt="" class="h-72 w-72 border border-gray-600 " />
              <img v-if="A" src="../../assets/images/village_guild/gym_intel_dummy.png" alt="" class="h-72 w-72 border border-gray-600 rotate-45" />
              <img v-if="B" src="../../assets/images/village_guild/gym_intel_dummy.png" alt="" class="h-72 w-72 border border-gray-600 -rotate-45" />
            </div>
          </div>
          <div class="col-span-3 flex justify-center">
            <div class="grid grid-cols-1 text-center">
                <div class="flex justify-center mb-3">
                    <button @click="emitDoneTraining" class="border border-gray-600 rounded-lg px-2 py-2 w-20 bg-[#305c79] text-white">
                        Done?</button>
                </div>
                <p class="text-2xl font-semibold">Your current Intelligence Level: {{ playerStore.playerBaseIntelligence }}</p>
                <p class="text-2xl font-semibold">XP until next Intelligence level:  {{ playerStore.neededIntelligenceXP }}</p>
                <p class="text-2xl font-semibold ">{{ playerStore.intelligenceXP }}/{{ playerStore.nextIntelligenceLevel }}</p>
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
        playerStore.intelligencePrice = (playerStore.intelligencePrice * 3);
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
            trainingCommand.value = 'Read'
        } else (trainingCommand.value = "Turn Page")
    }

    const intermediateTrainingActive = ref(false);
    function startIntermediateTraining() {
        trainingStarted.value = true;
        intermediateTrainingActive.value = true;
        let x = Math.floor(Math.random()*(5-1)+1);
        console.log(x);
        if (x <= 1) {
            trainingCommand.value = "Read";
        } else if (x <= 2) {
            trainingCommand.value = "Turn Page";
        } else if (x <= 3) {
            trainingCommand.value = "Analyze";
        } else (trainingCommand.value = "Summary")
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
            trainingCommand.value = "Read";
        } else if (x <= 2) {
            trainingCommand.value = "Turn Page";
        } else if (x <= 3) {
            trainingCommand.value = "Analyze";
        } else (trainingCommand.value = "Summary")
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
    function intelligenceReadBasic() {
        if (trainingCommand.value === 'Read') {
            playerStore.intelligenceXP += 10;
            playerStore.XPUntilNextIntelligenceLevel(); 
            playerStore.intelligenceLevelUp();
            playerStore.getIntelligenceValues();
        }
        moveTheDummy();
        startBasicTraining();
    }
    function intelligenceTurnBasic() {
        if (trainingCommand.value === 'Turn Page') {
            playerStore.intelligenceXP += 10;
            playerStore.XPUntilNextIntelligenceLevel();
            playerStore.intelligenceLevelUp();
            playerStore.getIntelligenceValues();
        }
        moveTheDummy();
        startBasicTraining();
    }

// intermediate functions
    function intelligenceReadIntermediate() {
        if (trainingCommand.value === 'Read') {
            playerStore.intelligenceXP += 10;
            playerStore.XPUntilNextIntelligenceLevel(); 
            playerStore.intelligenceLevelUp();
            playerStore.getIntelligenceValues();
        }
        moveTheDummy();
        startIntermediateTraining();
    }
    function intelligenceTurnIntermediate() {
        if (trainingCommand.value === 'Turn Page') {
            playerStore.intelligenceXP += 10;
            playerStore.XPUntilNextIntelligenceLevel();
            playerStore.intelligenceLevelUp();
            playerStore.getIntelligenceValues();
        }
        moveTheDummy();
        startIntermediateTraining();
    }
    function intelligenceAnalyzeIntermediate() {
        if (trainingCommand.value === 'Analyze') {
            playerStore.intelligenceXP += 10;
            playerStore.XPUntilNextIntelligenceLevel(); 
            playerStore.intelligenceLevelUp();
            playerStore.getIntelligenceValues();
        }
        moveTheDummy();
        startIntermediateTraining();
    }
    function intelligenceSummaryIntermediate() {
        if (trainingCommand.value === 'Summary') {
            playerStore.intelligenceXP += 10;
            playerStore.XPUntilNextIntelligenceLevel();
            playerStore.intelligenceLevelUp();
            playerStore.getIntelligenceValues();
        }
        moveTheDummy();
        startIntermediateTraining();
    }

// expert functions
    function intelligenceReadExpert() {
        if (trainingCommand.value === 'Read') {
            playerStore.intelligenceXP += 10;
            playerStore.XPUntilNextIntelligenceLevel(); 
            playerStore.intelligenceLevelUp();
            playerStore.getIntelligenceValues();
        }
        moveTheDummy();
        startExpertTraining();
    }
    function intelligenceTurnExpert() {
        if (trainingCommand.value === 'Turn Page') {
            playerStore.intelligenceXP += 10;
            playerStore.XPUntilNextIntelligenceLevel();
            playerStore.intelligenceLevelUp();
            playerStore.getIntelligenceValues();
        }
        moveTheDummy();
        startExpertTraining();
    }
    function intelligenceAnalyzeExpert() {
        if (trainingCommand.value === 'Analyze') {
            playerStore.intelligenceXP += 10;
            playerStore.XPUntilNextIntelligenceLevel(); 
            playerStore.intelligenceLevelUp();
            playerStore.getIntelligenceValues();
        }
        moveTheDummy();
        startExpertTraining();
    }
    function intelligenceSummaryExpert() {
        if (trainingCommand.value === 'Summary') {
            playerStore.intelligenceXP += 10;
            playerStore.XPUntilNextIntelligenceLevel();
            playerStore.intelligenceLevelUp();
            playerStore.getIntelligenceValues();
        }
        moveTheDummy();
        startExpertTraining();
    }

// auto end session with levelup
    const storePlayerHealth = storeToRefs(playerStore); // so values are watchable
    const successfulTraining = ref(false);
    watch(storePlayerHealth.neededIntelligenceXP, function(value) {
        if (value === 0) {
        successfulTraining.value = true;
        }
    })

</script>