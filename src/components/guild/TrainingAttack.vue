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
              <h1 class="mt-2 text-xl text-gray-700 font-bold sm:text-center">Attack Training.</h1>
              <p class="font-semibold text-xl">A good choice, {{ playerStore.playerId }}.</p>  
              <p v-if="playerStore.playerBaseAttack < 5" class="mt-2 text-gray-700 sm:text-center">Now, you're obviously a beginner, so we'll start off easy.</p>  
              <p v-else-if="playerStore.playerBaseAttack < 10" class="mt-2 text-gray-700 sm:text-center">Looks like you've got some experience.  Let's make this a bit more challenging, then.</p>  
              <p class="mt-2 text-sm text-gray-700 sm:text-center">Follow my instructions to gain experience.  Ignore them and gain nothing.</p>  
            </div>
<!-- basic training start -->
            <div v-if="playerStore.playerBaseAttack < 5" class="flex justify-center mb-8">
                <button v-if="!trainingStarted" @click="startBasicTraining" class="border border-gray-500 rounded-lg bg-[#305c79] px-2 py-2 text-white w-24">
                    Ready?</button> 
                <button v-if="trainingStarted" class="border border-gray-500 rounded-lg bg-yellow-700 px-2 py-2 text-white text-2xl w-32 h-24">
                    {{ trainingCommand }}</button> 
            </div>
<!-- intermediate training start -->
            <div v-else-if="playerStore.playerBaseAttack < 10" class="flex justify-center mb-8">
                <button v-if="!trainingStarted" @click="startIntermediateTraining" class="border border-gray-500 rounded-lg bg-[#305c79] px-2 py-2 text-white w-24">
                    Ready?</button> 
                <button v-if="trainingStarted" class="border border-gray-500 rounded-lg bg-yellow-700 px-2 py-2 text-white text-2xl w-32 h-24">
                    {{ trainingCommand }}</button> 
            </div>
          </div>  

          <div class="col-span-2 flex justify-center">
            <div v-if="trainingStarted" class="flex items-center justify-center mr-32">
<!-- basic buttons -->
                <div v-if="basicTrainingActive" class="grid grid-cols-2 gap-x-2 gap-y-5">
                    <button @click="attackSlashBasic" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Slash</button>
                    <button @click="attackThrustBasic" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Thrust</button>
                </div>
<!-- intermediate buttons -->
                <div v-if="intermediateTrainingActive" class="grid grid-cols-2 gap-x-2 gap-y-5">
                    <button @click="attackSlashIntermediate" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Slash</button>
                    <button @click="attackThrustIntermediate" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Thrust</button>

                    <button @click="attackHackIntermediate" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Hack</button>
                    <button @click="attackCutIntermediate" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                        Cut</button>
                </div>
            </div>
<!-- rotating dummy -->
            <div v-if="!trainingStarted" class="flex items-center justify-center">
              <img src="../../assets/images/village_guild/gym_attack_dummy.png" alt="" class="h-72 w-72 border border-gray-600" />
            </div>
            <div v-if="trainingStarted" class="flex items-center jusify-c">
              <img v-if="AB" src="../../assets/images/village_guild/gym_attack_dummy.png" alt="" class="h-72 w-72 border border-gray-600 " />
              <img v-if="BA" src="../../assets/images/village_guild/gym_attack_dummy.png" alt="" class="h-72 w-72 border border-gray-600 " />
              <img v-if="A" src="../../assets/images/village_guild/gym_attack_dummy.png" alt="" class="h-72 w-72 border border-gray-600 rotate-45" />
              <img v-if="B" src="../../assets/images/village_guild/gym_attack_dummy.png" alt="" class="h-72 w-72 border border-gray-600 -rotate-45" />
            </div>
          </div>
          <div class="col-span-3 flex justify-center">
            <div class="grid grid-cols-1 text-center">
                <div class="flex justify-center mb-3">
                    <button @click="emitDoneTraining" class="border border-gray-600 rounded-lg px-2 py-2 w-20 bg-[#305c79] text-white">
                        Done?</button>
                </div>
                <p class="text-2xl font-semibold">Your current Attack Level: {{ playerStore.playerBaseAttack }}</p>
                <p class="text-2xl font-semibold">XP until next Attack level:  {{ playerStore.neededAttackXP }}</p>
                <p class="text-2xl font-semibold ">{{ playerStore.attackXP }}/{{ playerStore.nextAttackLevel }}</p>
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
        playerStore.attackPrice = (playerStore.attackPrice * 5);
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
        if (x <= 1) {
            trainingCommand.value = 'Thrust';
        } else (trainingCommand.value = "Slash")
    }

    const intermediateTrainingActive = ref(false);
    function startIntermediateTraining() {
        trainingStarted.value = true;
        intermediateTrainingActive.value = true;
        let x = Math.floor(Math.random()*(5-1)+1);
        console.log(x);x
        if (x <= 1) {
            trainingCommand.value = "Thrust";
        } else if (x <= 2) {
            trainingCommand.value = "Slash";
        } else if (x <= 3) {
            trainingCommand.value = "Hack";
        } else (trainingCommand.value = "Cut")
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
    function attackSlashBasic() {
        if (trainingCommand.value === 'Slash') {
            playerStore.attackXP += 100;
            playerStore.XPUntilNextAttackLevel();
            playerStore.attackLevelUp();
            playerStore.getAttackValues();
        }
        moveTheDummy();
        startBasicTraining();
    }
    function attackThrustBasic() {
        if (trainingCommand.value === 'Thrust') {
            playerStore.attackXP += 100;
            playerStore.XPUntilNextAttackLevel();
            playerStore.attackLevelUp();
            playerStore.getAttackValues();
        }
        moveTheDummy();
        startBasicTraining();
    }

// intermediate functions
    function attackSlashIntermediate() {
        if (trainingCommand.value === 'Slash') {
            playerStore.attackXP += 100;
            playerStore.XPUntilNextAttackLevel();
            playerStore.attackLevelUp();
            playerStore.getAttackValues();
        }
        moveTheDummy();
        startIntermediateTraining();
    }
    function attackThrustIntermediate() {
        if (trainingCommand.value === 'Thrust') {
            playerStore.attackXP += 100;
            playerStore.XPUntilNextAttackLevel();
            playerStore.attackLevelUp();
            playerStore.getAttackValues();
        }
        moveTheDummy();
        startIntermediateTraining();
    }
    function attackHackIntermediate() {
        if (trainingCommand.value === 'Hack') {
            playerStore.attackXP += 100;
            playerStore.XPUntilNextAttackLevel();
            playerStore.attackLevelUp();
            playerStore.getAttackValues();
        }
        moveTheDummy();
        startIntermediateTraining();
    }
    function attackCutIntermediate() {
        if (trainingCommand.value === 'Cut') {
            playerStore.attackXP += 100;
            playerStore.XPUntilNextAttackLevel();
            playerStore.attackLevelUp();
            playerStore.getAttackValues();
        }
        moveTheDummy();
        startIntermediateTraining();
    }

// auto end session with levelup
    const storePlayerHealth = storeToRefs(playerStore); // so values are watchable
    const successfulTraining = ref(false);
    watch(storePlayerHealth.neededAttackXP, function(value) {
        if (value === 0) {
        successfulTraining.value = true;
        }
    })

</script>