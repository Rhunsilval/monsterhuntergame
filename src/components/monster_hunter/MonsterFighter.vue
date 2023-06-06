<template>
    <div class="justify-center grid grid-cols-2">

<!-- fight buttons -->
        <div>
            <div class="-mt-8 ">
        <!-- spells -->
                <div class="col-span-3">
                    <div>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_F1_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_F2_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_F3_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                    </div>
                    <div>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_W1_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_W2_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_W3_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                    </div>
                    <div>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_E1_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_E2_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_E3_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                    </div>
                    <div>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_A1_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_A2_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_A3_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                    </div>
                    <div>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_D1_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_D2_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_D3_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                    </div>
                    <div>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_L1_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_L2_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                        <button class="mx-2"> 
                            <li v-for="item in playerStore.playerEquipped.player_L3_spell" :key="item.id" class="list-none ">
                                <ul>
                                    <img :src="item.imageSrc2" alt="" class="h-12 w-12 rounded-lg border border-black" />
                                </ul>                                        
                            </li>                                                                                                                           
                        </button>
                    </div>
                </div>
        <!-- general attack options -->
                <div class="mt-2" >
                    <button @click="emitattackMonster()" class="mr-2 text-lg text-white bg-[#305c79] border border-black hover:bg-blue-200 hover:text-black rounded-3xl px-5 py-5 ">
                        Fight </button>                     
                    <button @click="emithealPlayer()" class="text-lg text-white bg-[#305c79] border border-black hover:bg-blue-200 hover:text-black rounded-3xl px-5 py-5 " >
                        Heal</button>
                </div>
                <div v-if="props.specialAttackAvailable" class="mt-2" >
                    <button @click="emitspecialAttack()" class="text-lg text-white bg-[#305c79] border border-black hover:bg-blue-200 hover:text-black rounded-3xl px-5 py-5" >
                        Special Attack!</button>
                </div>
                <div class="mt-2" >
                    <button @click="emitrunAway()" class="text-lg text-white bg-[#305c79] border border-black hover:bg-blue-200 hover:text-black rounded-3xl px-5 py-5" >
                        Run Away!</button>
                </div>
        <!-- scripts -->
                <div class="mt-5 grid grid-cols-3">
                    <li v-for="(script) in playerStore.playerScripts" :key="script.id" class="list-none">
                        <ul>
                            <button @click="useScript(script.id)" class="h-20 w-20 border border-black my-2">
                                <img :src="script.imageSrc" class="h-20 w-20 " />
                            </button>
                        </ul>
                    </li>
                </div>
            </div>
        </div>    

<!-- conditionally rendered monster image -->
        <div class="">
            <div class="py-3 ">  
                <h2 class="font-bold text-3xl font-serif">{{ monsterStore.monsterName }}</h2>   
                <div class="border border-black mt-3 mx-2 ">       
                    <img v-if="monsterStore.monsterId == 'mountain_monster1'" src="../../assets/images/mountains/mountain_monster_1.png" alt="" class="h-56 w-64   object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'mountain_monster2'" src="../../assets/images/mountains/mountain_monster_2.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'mountain_monster3'" src="../../assets/images/mountains/mountain_monster_3.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'mountain_monster4'" src="../../assets/images/mountains/mountain_monster_4.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'mountain_monster5'" src="../../assets/images/mountains/mountain_monster_5.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'mountain_monster6'" src="../../assets/images/mountains/mountain_monster_6.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'mountain_monster7'" src="../../assets/images/mountains/mountain_monster_7.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'mountain_monster8'" src="../../assets/images/mountains/mountain_monster_8.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'mountain_monster9'" src="../../assets/images/mountains/mountain_monster_9.png" alt="" class="h-56 w-full object-cover object-top" />
                    <img v-if="monsterStore.monsterId == 'mountain_monster10'" src="../../assets/images/mountains/mountain_monster_10.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'desert_monster1'" src="../../assets/images/desert/desert_monster_1.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'desert_monster2'" src="../../assets/images/desert/desert_monster_2.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'desert_monster3'" src="../../assets/images/desert/desert_monster_3.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'desert_monster4'" src="../../assets/images/desert/desert_monster_4.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'desert_monster5'" src="../../assets/images/desert/desert_monster_5.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'desert_monster6'" src="../../assets/images/desert/desert_monster_6.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'desert_monster7'" src="../../assets/images/desert/desert_monster_7.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'desert_monster8'" src="../../assets/images/desert/desert_monster_8.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'desert_monster9'" src="../../assets/images/desert/desert_monster_9.png" alt="" class="h-56 w-full object-cover object-top" />
                    <img v-if="monsterStore.monsterId == 'desert_monster10'" src="../../assets/images/desert/desert_monster_10.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'forest_monster1'" src="../../assets/images/forest/forest_monster_1.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'forest_monster2'" src="../../assets/images/forest/forest_monster_2.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'forest_monster3'" src="../../assets/images/forest/forest_monster_3.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'forest_monster4'" src="../../assets/images/forest/forest_monster_4.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'forest_monster5'" src="../../assets/images/forest/forest_monster_5.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'forest_monster6'" src="../../assets/images/forest/forest_monster_6.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'forest_monster7'" src="../../assets/images/forest/forest_monster_7.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'forest_monster8'" src="../../assets/images/forest/forest_monster_8.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'forest_monster9'" src="../../assets/images/forest/forest_monster_9.png" alt="" class="h-56 w-full object-cover object-top" />
                    <img v-if="monsterStore.monsterId == 'forest_monster10'" src="../../assets/images/forest/forest_monster_10.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'grassland_monster1'" src="../../assets/images/grassland/grassland_monster_1.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'grassland_monster2'" src="../../assets/images/grassland/grassland_monster_2.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'grassland_monster3'" src="../../assets/images/grassland/grassland_monster_3.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'grassland_monster4'" src="../../assets/images/grassland/grassland_monster_4.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'grassland_monster5'" src="../../assets/images/grassland/grassland_monster_5.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'grassland_monster6'" src="../../assets/images/grassland/grassland_monster_6.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'grassland_monster7'" src="../../assets/images/grassland/grassland_monster_7.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'grassland_monster8'" src="../../assets/images/grassland/grassland_monster_8.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'grassland_monster9'" src="../../assets/images/grassland/grassland_monster_9.png" alt="" class="h-56 w-full object-cover object-top" />
                    <img v-if="monsterStore.monsterId == 'grassland_monster10'" src="../../assets/images/grassland/grassland_monster_10.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'jungle_monster1'" src="../../assets/images/jungle/jungle_monster_1.png" alt="" class="h-56 w-64  object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'jungle_monster2'" src="../../assets/images/jungle/jungle_monster_2.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'jungle_monster3'" src="../../assets/images/jungle/jungle_monster_3.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'jungle_monster4'" src="../../assets/images/jungle/jungle_monster_4.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'jungle_monster5'" src="../../assets/images/jungle/jungle_monster_5.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'jungle_monster6'" src="../../assets/images/jungle/jungle_monster_6.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'jungle_monster7'" src="../../assets/images/jungle/jungle_monster_7.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'jungle_monster8'" src="../../assets/images/jungle/jungle_monster_8.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'jungle_monster9'" src="../../assets/images/jungle/jungle_monster_9.png" alt="" class="h-56 w-full object-cover object-top" />
                    <img v-if="monsterStore.monsterId == 'jungle_monster10'" src="../../assets/images/jungle/jungle_monster_10.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'marshes_monster1'" src="../../assets/images/marshes/marshes_monster_1.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'marshes_monster2'" src="../../assets/images/marshes/marshes_monster_2.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'marshes_monster3'" src="../../assets/images/marshes/marshes_monster_3.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'marshes_monster4'" src="../../assets/images/marshes/marshes_monster_4.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'marshes_monster5'" src="../../assets/images/marshes/marshes_monster_5.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'marshes_monster6'" src="../../assets/images/marshes/marshes_monster_6.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'marshes_monster7'" src="../../assets/images/marshes/marshes_monster_7.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'marshes_monster8'" src="../../assets/images/marshes/marshes_monster_8.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'marshes_monster9'" src="../../assets/images/marshes/marshes_monster_9.png" alt="" class="h-56 w-full object-cover object-top" />
                    <img v-if="monsterStore.monsterId == 'marshes_monster10'" src="../../assets/images/marshes/marshes_monster_10.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'swamp_monster1'" src="../../assets/images/swamp/swamp_monster_1.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'swamp_monster2'" src="../../assets/images/swamp/swamp_monster_2.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'swamp_monster3'" src="../../assets/images/swamp/swamp_monster_3.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'swamp_monster4'" src="../../assets/images/swamp/swamp_monster_4.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'swamp_monster5'" src="../../assets/images/swamp/swamp_monster_5.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'swamp_monster6'" src="../../assets/images/swamp/swamp_monster_6.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'swamp_monster7'" src="../../assets/images/swamp/swamp_monster_7.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'swamp_monster8'" src="../../assets/images/swamp/swamp_monster_8.png" alt="" class="h-56 w-full object-cover object-center" />
                    <img v-if="monsterStore.monsterId == 'swamp_monster9'" src="../../assets/images/swamp/swamp_monster_9.png" alt="" class="h-56 w-full object-cover object-top" />
                    <img v-if="monsterStore.monsterId == 'swamp_monster10'" src="../../assets/images/swamp/swamp_monster_10.png" alt="" class="h-56 w-full object-cover object-center" />
                </div>
            </div>
        
<!-- monster name and healthbar -->
            <div v-if="monsterStore.monsterName" class="ml-2 text-center font-medium text-gray-600 w-60 "> {{ monsterStore.monsterName }}'s Health: {{ monsterStore.monsterHealth }}/{{ monsterStore.monsterStartingHealth }}
                <div class="healthbar">
                    <div class="healthbar_value" :style="monsterBarStyle"></div>
                </div>
            </div>

<!-- player name and healthbar -->
            <div v-if="monsterStore.monsterName" class="ml-2 text-center font-medium text-gray-600 w-60 "> {{ playerStore.playerId }}'s Life: {{ playerStore.playerHealth }}/{{ playerStore.playerStartingHealth }}
                <div class="healthbar">
                    <div class="healthbar_value" :style="playerBarStyle"></div>
                </div>
            </div>
        </div> 
    </div>

</template>


<script setup>
    import { ref, computed } from 'vue';
    // import { computed } from 'vue';
    import { usePlayerStore } from '@/stores/player';
    import { useMonsterStore } from '@/stores/monster';

    const props = defineProps({
        specialAttackAvailable: {},
    })

    const emit = defineEmits([
            'emit-attack-monster',
            'emit-run-away',
            'emit-special-attack',
            'emit-heal-player',
            'emit-use-script',
        ])

    const playerStore = usePlayerStore();
    const monsterStore = useMonsterStore();

    const playerHealthPercentage = computed(function () {
        return (100 * playerStore.playerHealth)/playerStore.playerStartingHealth;
    })

    const playerBarStyle = computed(function () {
        return {width: playerHealthPercentage.value + '%'};
    })

    const monsterHealthPercentage = computed(function() {
        return (100* monsterStore.monsterHealth)/monsterStore.monsterStartingHealth;
    })

    const monsterBarStyle = computed(function() {
        return {width: monsterHealthPercentage.value + '%'}
    })

    const chosenScriptId = ref('')
    const chosenScript = computed(function() {
        return playerStore.playerScripts.find(item => item.id === chosenScriptId.value);
    })
    function useScript(scriptId) {
        if(scriptId!==undefined) {
            console.log('chosen ID = ' + scriptId);
        }
        chosenScriptId.value = scriptId;
        let x = playerStore.playerScripts.findIndex(item => item.id === chosenScript.value.id); 
        
        emit('emit-use-script', scriptId);
        playerStore.playerScripts.splice(x, 1);
    }
    function emitattackMonster() {
        emit('emit-attack-monster');
    }
    function emitrunAway() {
        emit('emit-run-away');
    }
    function emitspecialAttack() {
        emit('emit-special-attack');
    }
    function emithealPlayer() {
        emit('emit-heal-player');
    }
           
</script>