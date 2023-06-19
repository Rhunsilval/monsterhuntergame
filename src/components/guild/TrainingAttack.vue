<template>
    <div class="grid grid-cols-3 mt-5 mb-10">

          <div class="grid grid-cols-1 ml-8">
            <div class="flex justify-center mt-5">
                <div class="text-center flex justify-center">
                    <div class="pt-3 mt-8 ">
                        <img src="../../assets/images/village_guild/gym_trainer.png" alt="" class="h-56 w-56 border border-black"/>                     
                    </div>                               
                </div>                   
            </div>
            <div class="w-60 mb-2 pl-3 ml-16 text-center">  
              <h1 class="mt-2 text-xl text-gray-700 font-bold sm:text-center">Attack Training.</h1>
              <p class="font-semibold text-xl">A good choice, {{ playerStore.playerId }}.</p>  
              <p v-if="playerStore.playerBaseAttack < 5" class="mt-2 text-gray-700 sm:text-center">Now, you're obviously a beginner, so we'll start off easy.</p>  
              <p class="mt-2 text-sm text-gray-700 sm:text-center">Follow my instructions to gain experience.  Ignore them and gain nothing.</p>  
            </div>

            <div v-if="playerStore.playerBaseAttack < 5" class="flex justify-center mb-8">
                <button v-if="!trainingStarted" @click="startBasicTraining" class="border border-gray-500 rounded-lg bg-[#305c79] px-2 py-2 text-white w-24">
                    Ready?</button> 
                <button v-if="trainingStarted" class="border border-gray-500 rounded-lg bg-yellow-700 px-2 py-2 text-white text-2xl w-32 h-24">
                    {{ trainingCommand }}</button> 
                <!-- <button class="border border-gray-500 rounded-lg bg-[#305c79] px-2 py-2 text-white w-24">
                    Thrust!</button>  -->
            </div>
            
          </div>         

          <div class="col-span-2 flex justify-center">
            <div v-if="trainingStarted" class="flex items-center justify-center mr-32">
                <button @click="attackSlash" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                    Slash</button>
                <button @click="attackThrust" class="px-2 py-2 border border-gray-600 rounded-lg w-24 mx-2 bg-gray-600 text-xl text-white hover:bg-red-900">
                    Thrust</button>
            </div>
            <div class="flex items-center justify-center">
              <img src="../../assets/images/village_guild/gym_attack_dummy.png" alt="" class="h-72 w-72 border border-gray-600" />
              <!-- <img src="../../assets/images/village_guild/gym_attack_dummy.png" alt="" class="h-72 w-72 border border-gray-600 rotate-45" /> -->
              <!-- <img src="../../assets/images/village_guild/gym_attack_dummy.png" alt="" class="h-72 w-72 border border-gray-600 -rotate-45" /> -->
            </div>
          </div>

          <div class="col-span-3 flex justify-center">
            <div class="grid grid-cols-1 text-center">
                <div class="flex justify-center">
                    <button class="border border-gray-600 rounded-lg px-2 py-2 w-20 bg-[#305c79] text-white">Done?</button>
                </div>
                <p class="text-2xl font-semibold">Your current Attack Level: {{ playerStore.playerBaseAttack }}</p>
                <p class="text-2xl font-semibold">XP until next Attack level:  {{ playerStore.neededAttackXP }}</p>
                <p class="text-2xl font-semibold ">{{ playerStore.attackXP }}/{{ playerStore.nextAttackLevel }}</p>
            </div>
        </div>

    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { usePlayerStore } from '@/stores/player'

    const playerStore = usePlayerStore();

    const trainingCommand = ref('');
    const trainingStarted = ref(false);

    function startBasicTraining() {
        trainingStarted.value = true;
        let x = Math.floor(Math.random()*(3-1)+1);
        console.log(x);
        if (x <=1) {
            trainingCommand.value = 'Thrust'
        } else (trainingCommand.value = "Slash")
    }

    function attackSlash() {
        if (trainingCommand.value === 'Slash') {
            playerStore.attackXP += 100;
            playerStore.XPUntilNextAttackLevel();
            playerStore.attackLevelUp();
        }
        startBasicTraining();
    }
    function attackThrust() {
        if (trainingCommand.value === 'Thrust') {
            playerStore.attackXP += 100;
            playerStore.XPUntilNextAttackLevel();
            playerStore.attackLevelUp();
        }
        startBasicTraining();
    }

</script>