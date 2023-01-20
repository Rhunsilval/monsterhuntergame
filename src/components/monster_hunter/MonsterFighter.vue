<template>
    <div class="flex flex-col justify-center">
<!-- conditionally rendered monster image -->
        <div class="py-3 ">  
            <h2 class="font-bold text-3xl font-serif">{{ monsterStore.monsterName }}</h2>   
            <div class="border border-black ">       
                <img v-if="monsterStore.monsterId == 'mountain_monster1'" src="../../assets/images/mountains/mountain_monster_1.png" alt="" class="h-56 w-full object-cover object-center" />
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
                <img v-if="monsterStore.monsterId == 'jungle_monster1'" src="../../assets/images/jungle/jungle_monster_1.png" alt="" class="h-56 w-full object-cover object-center" />
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
        <div v-if="monsterStore.monsterName" class="text-center font-medium text-gray-600 w-60 "> {{ monsterStore.monsterName }}'s Health: {{ monsterStore.monsterHealth }}/{{ monsterStore.monsterStartingHealth }}
            <div class="healthbar">
                <div class="healthbar_value" :style="monsterBarStyle"></div>
            </div>
        </div>

<!-- player name and healthbar -->
        <div v-if="monsterStore.monsterName" class="text-center font-medium text-gray-600 w-60 "> {{ playerStore.playerId }}'s Life: {{ playerStore.playerHealth }}/{{ playerStore.playerStartingHealth }}
            <div class="healthbar">
                <div class="healthbar_value" :style="playerBarStyle"></div>
            </div>
        </div>
    </div>

<!-- fight buttons -->
    <div class="pb-3">
        <div class="mt-2" >
            <button @click="emitattackMonster()" class="text-lg text-white bg-[#305c79] border border-black hover:bg-blue-200 hover:text-black rounded-3xl px-5 py-5 ">Fight </button> 
            &nbsp;
            <button @click="emithealPlayer()" class="text-lg text-white bg-[#305c79] border border-black hover:bg-blue-200 hover:text-black rounded-3xl px-5 py-5 " >Heal</button>
        </div>
        <div v-if="specialAttackAvailable" class="mt-2" >
            <button @click="emitspecialAttack()" class="text-lg text-white bg-[#305c79] border border-black hover:bg-blue-200 hover:text-black rounded-3xl px-5 py-5" >Special Attack!</button>
        </div>
        <div class="mt-2" >
            <button @click="emitrunAway()" class="text-lg text-white bg-[#305c79] border border-black hover:bg-blue-200 hover:text-black rounded-3xl px-5 py-5" >Run Away!</button>
        </div>
    </div>

</template>


<script>
    import { computed } from 'vue';
    import { usePlayerStore } from '@/stores/player';
    import { useMonsterStore } from '@/stores/monster';

    export default {
        components: {},
        props: [
            'specialAttackAvailable'
        ],
        emits: [
            'emit-attack-monster',
            'emit-run-away',
            'emit-special-attack',
            'emit-heal-player',
        ],
        setup(props, context) {
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

            function emitattackMonster() {
                context.emit('emit-attack-monster');
            }

            function emitrunAway() {
                context.emit('emit-run-away');
            }

            function emitspecialAttack() {
                context.emit('emit-special-attack');
            }

            function emithealPlayer() {
                context.emit('emit-heal-player');
            }

           
            return {
                playerStore,
                monsterStore,
                playerBarStyle,
                monsterBarStyle,
                emitattackMonster,
                emitrunAway,
                emitspecialAttack,
                emithealPlayer,
            }
        }
    }  

</script>


<style> 
.healthbar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: 1rem 0;
  background: #fde5e5
}

.healthbar_value {
  background-color: #a6bf8e;
  width: 100%;
  height: 100%;
}
</style>