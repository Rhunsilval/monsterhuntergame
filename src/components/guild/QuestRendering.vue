<template>
    <div class="grid grid-cols-1">
        <div class="py-8 flex justify-center">
            <img :src="renderedQuest.largeIcon" class="w-52 border border-gray-500 rounded-2xl " />
        </div>
        <div v-if="!questDone" class="flex justify-center"> 
            <div class="text-center text-xl font-serif grid grid-cols-1"> 
                <p class="text-2xl font-semibold">Ah, {{ playerStore.playerId }}.  You're back.</p>
                <p class="py-2">Do you have the {{ renderedQuest.need }} I asked for?</p>
                <p>Quantity needed:</p>
                <p class="text-3xl font-bold pb-4">{{ renderedQuest.qty }}</p>
            </div>            
        </div>
        <div v-if="questDone" class="flex justify-center mb-12"> 
            <div class="text-center text-xl font-serif grid grid-cols-1"> 
                <p class="text-2xl font-semibold">Well done, {{ playerStore.playerId }}!</p>
                <p class="py-2">Here's your reward: </p>
                <p>Quest Points: {{ renderedQuest.questPoints }}</p>
                <p>Experience Points: {{ renderedQuest.playerXP }}</p>
                <p class="">And you now have {{ renderedQuest.rewardScript }}</p>
                <button @click="emitQuestComplete" class="py-3 px-3 mt-5 border border-gray-500 bg-white hover:bg-slate-300 rounded-xl">
                    Okay!</button>
            </div>            
        </div>
        <div class="flex justify-center">
            <ul class="grid grid-cols-4 gap-y-6 gap-x-3 px-5 py-5 mb-12">
                <li v-for="item in playerStore.playerPacked" :key="item.id">
                    <button @click="giveItem(item.id)" class="pb-5 aspect-w-1 aspect-h-1 w-20 h-20 align-top">
                        <img :src="item.imageSrc" alt="" class="w-24 h-24 border border-gray-600 " />
                    </button>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import { useQuestStore } from '@/stores/quests';
    import { usePlayerStore } from '@/stores/player';
    
    const props = defineProps({
        quest: {
            type: String,
        },
    })
    const emit = defineEmits([
        'emitQuestComplete',
    ])
    const questStore = useQuestStore();
    const playerStore = usePlayerStore();
    const questDone = ref(false)

    const renderedQuest = computed(function() {
        return questStore.quests.find(item => item.id === props.quest);
    })

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
        if (chosenItem.value.name === renderedQuest.value.need) {
            renderedQuest.value.qty = (renderedQuest.value.qty - 1);
            playerStore.playerPacked.splice(x, 1);
        }
        if (renderedQuest.value.qty - 1 < 0) {
            renderedQuest.value.complete = true;
            renderedQuest.value.active = false;
            console.log('quest complete? : ' + renderedQuest.value.complete);
            questDone.value = true;
            playerStore.playerXP = playerStore.playerXP + renderedQuest.value.playerXP;
            playerStore.playerTotalXP = playerStore.playerTotalXP + renderedQuest.value.playerXP;
            let y = playerStore.playerActiveQuests.findIndex(quest => quest.id === renderedQuest.value.id);
            playerStore.playerActiveQuests.splice(y,1);
            playerStore.playerCompletedQuests.push(renderedQuest.value);
            
        }
    }
    function emitQuestComplete() {
        emit('emitQuestComplete');
    }

</script>