<template>
    <div class="flex justify-center">
        <div class="grid grid-cols-1">
        <!-- vanishing text if a conversation is started -->
            <div v-if="!anyConversation" class="w-full "> 
                <div v-if="playerStore.playerLevel < 10"> 
                    <h1 class="text-3xl font-bold">Please don't think me rude.</h1>
                    <p>I appreciate the drink. <br/> However ...  <br/> I'm really very busy, so if you'll excuse me ... </p>
                </div>
                <div v-else> 
                    <h1 class="text-3xl font-bold">Ah!  {{ playerStore.playerId }}!  Thank you for the drink.</h1>
                    <p>Please, have a seat!</p>
                </div>
                
            </div>

            <div class="flex justify-center my-4"> 
                <img src="../../assets/images/quests/Pub_hunter.png" class="h-52 rounded-xl border border-gray-500 "/>
            </div>

            <div >
                <div v-if="!anyConversation">
                    <p v-if="playerStore.playerLevel >= 10" class="text-xl font-semibold">Chat with me.</p>
                </div>

                <div v-if="!anyConversation" class="flex justify-center mt-8">
                    <div v-if="playerStore.playerLevel < 10"> 
                        <button @click="endConversations" class="px-2 py-2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white"> 
                            Oh.  Okay, then.</button>
                    </div>
                    <div v-else class="grid grid-cols-2 gap-3"> 
                        <button v-if="conditionalStore.conversationsHunter.convo1Available" @click="startConvo1" class="px-2 py-2 border border-gray-500 rounded-xl bg-blue-400 hover:bg-blue-700 hover:text-white">
                            Sure!</button>
                        <button @click="endConversations" class="px-2 py-2 border border-gray-500 rounded-xl bg-gray-400 hover:bg-gray-600 hover:text-white  ">
                            No, thanks.</button>
                    </div>
                </div>

                <div v-if="conditionalStore.conversationsHunter.convo1Started"> 
                    <div v-if="conditionalStore.conversationsHunter.convo1Available"> 
                        <hunter-quest-one
                            @emit-end-conversation="endConversation1"
                        ></hunter-quest-one>
                    </div> 
                </div>                

            </div>            
        </div>
    </div>
</template>

<script setup> 
    import { ref } from 'vue';
    import { useConditionalsStore } from '@/stores/conditionals';
    import { usePlayerStore } from '@/stores/player';
    import HunterQuestOne from './hunterQuestOne.vue'

    const emit = defineEmits([
            'emit-end-conversation',
    ])
    function endConversations() {
        emit('emit-end-conversation');
    }
    
    const conditionalStore = useConditionalsStore();
    const playerStore = usePlayerStore();

    const anyConversation = ref(false)   //header bar - visible when player arrives, turns off when quest conversation starts
    
    function startConvo1() {
        anyConversation.value = true;
        conditionalStore.conversationsHunter.convo1Started = true;        
    }
    function endConversation1() {
        anyConversation.value = false;
        conditionalStore.conversationsHunter.convo1Started = false;
        endConversations();
    }

</script>