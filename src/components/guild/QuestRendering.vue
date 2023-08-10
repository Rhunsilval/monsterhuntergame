<template>
    <div class="grid grid-cols-1">
        <div class="py-8 flex justify-center">
            <img :src="renderedQuest.largeIcon" class="w-52 border border-gray-500 rounded-2xl " />
        </div>
        <div v-if="!questDone" class="flex justify-center"> 
            <div class="text-center text-lg font-serif grid grid-cols-1">
                    <p class="text-2xl font-semibold">Ah, {{ playerStore.playerId }}.  You're back.</p>
                    <p class="py-2">I'm still looking for the</p>
                    <p class="text-xl font-bold">{{ renderedQuest.qty }} {{ renderedQuest.need }}  </p>
                    <p class="text-xl font-bold">{{ renderedQuest.qty2 }} {{ renderedQuest.need2 }} </p>
                    <p class="text-xl font-bold">{{ renderedQuest.qty3 }} {{ renderedQuest.need3 }} </p>
                    <p class="text-xl font-bold">{{ renderedQuest.qty4 }} {{ renderedQuest.need4 }} </p>
                    <p class="text-xl font-bold">{{ renderedQuest.qty5 }} {{ renderedQuest.need5 }} </p>
                    <p class="text-xl font-bold">{{ renderedQuest.qty6 }} {{ renderedQuest.need6 }} </p>
                    <p class="text-xl font-bold">{{ renderedQuest.qty7 }} {{ renderedQuest.need7 }} </p>
                    <p class="text-xl font-bold">{{ renderedQuest.qty8 }} {{ renderedQuest.need8 }} </p>
                    <p class="text-xl font-bold">{{ renderedQuest.qty9 }} {{ renderedQuest.need9 }} </p>
                    <p class="mt-3">that you owe me.</p>
                <div class="flex justify-center"> 
                    <button @click="emitLeaveQuest" class="mt-10 px-2 py-2 w-32 border border-gray-500 rounded-xl bg-stone-400 hover:bg-stone-600 hover:text-white text-center">
                        Leave</button>
                </div>                
            </div>            
        </div>
        <div v-if="questDone" class="flex justify-center mb-12"> 
            <div class="text-center text-xl font-serif grid grid-cols-1"> 
                <p class="text-2xl font-semibold">Well done, {{ playerStore.playerId }}!</p>
                <p class="py-2">Here's your reward: </p>
                <p>Quest Points: {{ renderedQuest.questPoints }}</p>
                <p>Experience Points: {{ renderedQuest.playerXP }}</p>
                <p class="">And you now have {{ renderedQuest.rewardScript }}</p>
                <div class="flex justify-center"> 
                    <button @click="emitQuestComplete" class="py-3 px-3 w-4/5 mt-5 border border-gray-500 bg-white hover:bg-slate-300 rounded-xl">
                    Okay!</button>
                </div>                
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
        'emitLeaveQuest'
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
            if (renderedQuest.value.qty - 1 < 0 ) { 
                renderedQuest.value.qty = 0;
            } else {
                renderedQuest.value.qty = (renderedQuest.value.qty - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        } else if (chosenItem.value.name === renderedQuest.value.need2) {
            if (renderedQuest.value.qty2 - 1 < 0) {
                renderedQuest.value.qty2 = 0;
            } else {
                renderedQuest.value.qty2 = (renderedQuest.value.qty2 - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        } else if (chosenItem.value.name === renderedQuest.value.need3) {
            if (renderedQuest.value.qty3 - 1 < 0 ) {
                renderedQuest.value.qty3 = 0;
            } else {
                renderedQuest.value.qty3 = (renderedQuest.value.qty3 - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        } else if (chosenItem.value.name === renderedQuest.value.need4) {
            if (renderedQuest.value.qty4 - 1 < 0 ) {
                renderedQuest.value.qty4 = 0;
            } else {
                renderedQuest.value.qty4 = (renderedQuest.value.qty4 - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        } else if (chosenItem.value.name === renderedQuest.value.need5) {
            if (renderedQuest.value.qty5 - 1 < 0 ) {
                renderedQuest.value.qty5 = 0;
            } else {
                renderedQuest.value.qty5 = (renderedQuest.value.qty5 - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        } else if (chosenItem.value.name === renderedQuest.value.need6) {
            if (renderedQuest.value.qty6 - 1 < 0 ) {
                renderedQuest.value.qty6 = 0;
            } else {
                renderedQuest.value.qty6 = (renderedQuest.value.qty6 - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        } else if (chosenItem.value.name === renderedQuest.value.need7) {
            if (renderedQuest.value.qty7 - 1 < 0 ) {
                renderedQuest.value.qty7 = 0;
            } else {
                renderedQuest.value.qty7 = (renderedQuest.value.qty7 - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        } else if (chosenItem.value.name === renderedQuest.value.need8) {
            if (renderedQuest.value.qty8 - 1 < 0 ) {
                renderedQuest.value.qty8 = 0;
            } else {
                renderedQuest.value.qty8 = (renderedQuest.value.qty8 - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        } else if (chosenItem.value.name === renderedQuest.value.need9) {
            if (renderedQuest.value.qty9 - 1 < 0 ) {
                renderedQuest.value.qty9 = 0;
            } else {
                renderedQuest.value.qty8 = (renderedQuest.value.qty9 - 1);
                playerStore.playerPacked.splice(x, 1);
            }
        }
        
        const q2 = ref(0)
        if (!(renderedQuest.value.qty2 > 0)) {q2.value = 0} else (q2.value = renderedQuest.value.qty2)
        const q3 = ref(0)
        if (!(renderedQuest.value.qty3 > 0)) { q3.value = 0} else (q3.value = renderedQuest.value.qty3)
        const q4 = ref(0)
        if (!(renderedQuest.value.qty4 > 0)) { q4.value = 0} else (q4.value = renderedQuest.value.qty4)
        const q5 = ref(0)
        if (!(renderedQuest.value.qty5 > 0 )) { q5.value = 0} else (q5.value = renderedQuest.value.qty5)
        const q6 = ref(0)
        if (!(renderedQuest.value.qty6 > 0)) { q6.value = 0} else (q6.value = renderedQuest.value.qty6)
        const q7 = ref(0)
        if (!(renderedQuest.value.qty7 > 0)) { q7.value = 0} else (q7.value = renderedQuest.value.qty7)
        const q8 = ref(0)
        if (!(renderedQuest.value.qty8 > 0)) { q8.value = 0} else (q8.value = renderedQuest.value.qty8)
        const q9 = ref(0)
        if (!(renderedQuest.value.qty9 > 0)) { q9.value = 0} else (q9.value = renderedQuest.value.qty9)
        console.log("q2: " +q2.value)

        if ((renderedQuest.value.qty + q2.value + q3.value + q4.value + q5.value + q6.value + q7.value + q8.value + q9.value) - 1 < 0) {
            renderedQuest.value.complete = true;  // do i need this? YES - for unlocking features in response to quest completion
            renderedQuest.value.active = false;   // do i need this? YES - for quest complete button on main page
            questDone.value = true;
            playerStore.playerXP = playerStore.playerXP + renderedQuest.value.playerXP;
            playerStore.playerTotalXP = playerStore.playerTotalXP + renderedQuest.value.playerXP;
            playerStore.coinOnHand = playerStore.coinOnHand + renderedQuest.value.coins;
            let y = playerStore.playerActiveQuests.findIndex(quest => quest.id === renderedQuest.value.id);
            playerStore.playerActiveQuests.splice(y,1);
            playerStore.playerCompletedQuests.push(renderedQuest.value);
        }
    }
    function emitQuestComplete() {
        emit('emitQuestComplete');
    }
    function emitLeaveQuest() {
        emit('emitLeaveQuest');
    }

</script>