<template> 
    <div> 

<!-- available quest buttons -->
        <div v-if="conditionalStore.huntersGuild.questAccepted === false"> 
            <div v-if="insufficientFunds === false">

                <button v-if="conditionalStore.huntersGuild.grossStew1QuestAvailable"
                    @click="acceptGuildAcceptGrossStew1Quest" 
                    class="mb-2 text-sm text-gray-700 bg-gray-300 border border-black hover:bg-gray-600 hover:text-white rounded-3xl px-2 py-2">
                    <h1 class="text-lg">Experimental Kitchen Quest</h1>
                    <p>Collect 3 pieces of Green Chicken, 2 pieces of Bat Leather, and 3 pieces of Sacred Spores
                        <br/> Payout: 600 coin</p>
                </button>

                <button v-if="conditionalStore.huntersGuild.fixLightsQuestAvailable"
                    @click="acceptGuildFixLightsQuest" 
                    class="mb-2 text-sm text-gray-700 bg-gray-300 border border-black hover:bg-gray-600 hover:text-white rounded-3xl px-2 py-2">
                    <h1 class="text-lg">Guild Maintenance Quest</h1>
                    <p>Collect items the Guild needs to repair some broken lights: 10 Fae Lights and 10 Tangled Rootbeast Vines
                        <br/> Payout: 1500 coin</p>
                </button>
                
                <button v-if="conditionalStore.huntersGuild.collect9QuestAvailable && 
                            conditionalStore.worldMap.desertAvailable && 
                            conditionalStore.worldMap.mountainsAvailable &&
                            conditionalStore.worldMap.beachAvailable &&
                            conditionalStore.worldMap.grasslandsAvailable" 
                    @click="acceptGuildAccept9Quest" 
                    class="mb-2 text-sm text-gray-700 bg-gray-300 border border-black hover:bg-gray-600 hover:text-white rounded-3xl px-2 py-2">
                    <h1 class="text-lg">Collector's Quest</h1>
                    <p>Collect a piece of Green Chicken, a Sand Crab Shell, some Sacred Spores, a Rotten Femur, a piece of Bat Leather, a Fae Light, a set of Goblin Ears, a Jelly Stinger, and some Tangled Rootbeast Vines 
                        <br/> Payout: 2,000 coin</p>
                </button>
                
                <button v-if="conditionalStore.huntersGuild.fireRiverDrakeQuestAvailalbe && 
                            playerStore.playerLevel >= 20" 
                    @click="acceptGuildSlayFireDrakeQUest"
                    class="mb-2 text-sm text-gray-700 bg-gray-300 border border-black hover:bg-gray-600 hover:text-white rounded-3xl px-2 py-2">
                    <h1 class="text-lg">Dragon Slayer Quest</h1>
                    <p>Collect the hide of the Fire River Drake 
                        <br/> Payout: 150,000 coin</p>
                </button>
            </div>
        </div>

<!-- insufficient funds warning -->
        <div v-if="insufficientFunds" class="mt-2 w-11/12"> 
            <button @click="insufficientFunds = false" class="text-sm text-gray-700 bg-gray-300 border border-black hover:bg-gray-600 hover:text-white rounded-3xl px-2 py-2"> 
                <p>You don't have enough coinage to accept this quest</p>
                <p class="text-bold text-xl font-bold">Okay</p>
            </button>
        </div>

<!-- quest completion buttons -->
        <div v-if="conditionalStore.huntersGuild.questAccepted" class="flex justify-center">
            <div class="mt-2 grid grid-cols-1 gap-y-2 w-11/12">
                <button v-if="collectGrossStew1Quest.active" @click="emitAttemptQuest('guildGrossStew1')" class="text-sm text-gray-700 bg-gray-300 border border-black hover:bg-gray-600 hover:text-white rounded-3xl px-2 py-2">
                    Complete your Quest</button>
                <button v-if="collectGrossStew1Quest.active" @click="emitQuitQuest('guildGrossStew1')" class="text-sm text-gray-700 bg-gray-300 border border-black hover:bg-gray-600 hover:text-white rounded-3xl px-2 py-2">
                    Quit your Quest</button>

                <button v-if="collect9Quest.active" @click="emitAttemptQuest('guildCollectNine')" class="text-sm text-gray-700 bg-gray-300 border border-black hover:bg-gray-600 hover:text-white rounded-3xl px-2 py-2">
                    Complete your Quest</button>
                <button v-if="collect9Quest.active" @click="emitQuitQuest('guildCollectNine')" class="text-sm text-gray-700 bg-gray-300 border border-black hover:bg-gray-600 hover:text-white rounded-3xl px-2 py-2">
                    Quit your Quest</button>

                <button v-if="fixLightsQuest.active" @click="emitAttemptQuest('guildFixTheLights')" class="text-sm text-gray-700 bg-gray-300 border border-black hover:bg-gray-600 hover:text-white rounded-3xl px-2 py-2">
                    Complete your Quest</button>
                <button v-if="fixLightsQuest.active" @click="emitQuitQuest('guildFixTheLights')" class="text-sm text-gray-700 bg-gray-300 border border-black hover:bg-gray-600 hover:text-white rounded-3xl px-2 py-2">
                    Quit your Quest</button>

                <button v-if="slayFireDrakeQuest.active" @click="emitAttemptQuest('guildSlayFireRiverDrake')" class="text-sm text-gray-700 bg-gray-300 border border-black hover:bg-gray-600 hover:text-white rounded-3xl px-2 py-2">
                    Complete your Quest</button>
                <button v-if="slayFireDrakeQuest.active" @click="emitQuitQuest('guildSlayFireRiverDrake')" class="text-sm text-gray-700 bg-gray-300 border border-black hover:bg-gray-600 hover:text-white rounded-3xl px-2 py-2">
                    Quit your Quest</button>
            </div>
        </div>        
        
    </div>
</template>

<script setup> 
    import { ref } from 'vue';
    import { useConditionalsStore } from '@/stores/conditionals'
    import { usePlayerStore } from '@/stores/player';
    import { useQuestStore } from '@/stores/quests';

    const conditionalStore = useConditionalsStore();
    const playerStore = usePlayerStore();
    const questStore = useQuestStore();

    const insufficientFunds = ref(false);
    const emit = defineEmits([
        'emitAttemptQuest',
        'emitQuitQuest'
    ])

    let collectGrossStew1Quest = questStore.quests.find(quest => quest.id === 'guildGrossStew1');
    function acceptGuildAcceptGrossStew1Quest() {
        if (playerStore.coinOnHand - 500 < 0) {
        insufficientFunds.value = true;
        } else {
        playerStore.coinOnHand = (playerStore.coinOnHand - 500);
        conditionalStore.huntersGuild.questAccepted = true;
        conditionalStore.huntersGuild.grossStew1QuestAvailable = false;
        collectGrossStew1Quest.active = true;
        playerStore.playerActiveQuests.push(collectGrossStew1Quest);
        }    
    }

    let collect9Quest = questStore.quests.find(quest => quest.id === 'guildCollectNine');
    function acceptGuildAccept9Quest() {
        if (playerStore.coinOnHand - 500 < 0) {
        insufficientFunds.value = true;
        } else {
        playerStore.coinOnHand = (playerStore.coinOnHand - 500);
        conditionalStore.huntersGuild.questAccepted = true;
        conditionalStore.huntersGuild.collect9QuestAvailable = false;
        collect9Quest.active = true;
        playerStore.playerActiveQuests.push(collect9Quest);
        }    
    }

    let fixLightsQuest = questStore.quests.find(quest => quest.id === 'guildFixTheLights');
    function acceptGuildFixLightsQuest() {
        if (playerStore.coinOnHand - 500 < 0) {
        insufficientFunds.value = true;
        } else {
        playerStore.coinOnHand = (playerStore.coinOnHand - 500);
        conditionalStore.huntersGuild.questAccepted = true;
        conditionalStore.huntersGuild.fixLightsQuestAvailable = false;
        fixLightsQuest.active = true;
        playerStore.playerActiveQuests.push(fixLightsQuest);
        }    
    }

    let slayFireDrakeQuest = questStore.quests.find(quest => quest.id === 'guildSlayFireRiverDrake');
    function acceptGuildSlayFireDrakeQUest() {
        if (playerStore.coinOnHand - 500 < 0) {
        insufficientFunds.value = true;
        } else {
        playerStore.coinOnHand = (playerStore.coinOnHand - 500);
        conditionalStore.huntersGuild.questAccepted = true;
        conditionalStore.huntersGuild.fireRiverDrakeQuestAvailalbe = false;
        slayFireDrakeQuest.active = true;
        playerStore.playerActiveQuests.push(slayFireDrakeQuest);
        }    
    }

    function emitAttemptQuest(questId) {
        emit('emitAttemptQuest', questId);
        console.log('questID = ' + questId);
    }
    function emitQuitQuest(questId) {
        emit('emitQuitQuest', questId);
    }
</script>